import ButtonsAction from "@/components/commons/ButtonsAction/ButtonsAction";
import DataTable from "@/components/ui/DataTable";
import useChangeUrl from "@/hooks/useChangeUrl";
import { totalPages } from "@/utils/totalPages";
import { useDisclosure } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Key, ReactNode, useCallback, useEffect } from "react";
import { COLUMN_LISTS_PRODUCTS } from "./Products.constants";
import useProducts from "./useProducts";

const Products = () => {
  const { push, isReady, query } = useRouter();

  const {
    dataProducts,

    isLoadingProducts,
    isRefetchingProducts,

    refetchProducts,
    selectedId,
    setSelectedId,
  } = useProducts();

  const addProductsModal = useDisclosure();
  const deleteProductsModal = useDisclosure();

  const { setURL } = useChangeUrl();

  useEffect(() => {
    if (isReady) setURL();
  }, [isReady]);

  const renderCell = useCallback(
    (product: Record<string, unknown>, columKey: Key) => {
      const cellValue = product[columKey as keyof typeof product];

      const isURL = Array.isArray(cellValue) && cellValue[0].includes("http");

      switch (columKey) {
        case "images":
          return (
            <Image
              src={isURL ? cellValue[0] : ""}
              alt="Image"
              width={100}
              height={100}
              loading="lazy"
            />
          );
        case "actions":
          return (
            <ButtonsAction
              onPressButtonDetail={() => {}}
              onPressButtonUpdate={() => {
                setSelectedId(`${product?.id}`);
              }}
              onPressButtonDelete={() => {
                setSelectedId(`${product?.id}`);
              }}
            />
          );
        default:
          return cellValue as ReactNode;
      }
    },
    [push],
  );

  return (
    <section>
      {Object.keys(query).length > 0 && (
        <DataTable
          buttonTopContentLabel="Create Product"
          columns={COLUMN_LISTS_PRODUCTS}
          data={dataProducts?.products || []}
          emptyContent="Product is empty"
          isLoading={isLoadingProducts || isRefetchingProducts}
          onClickButtonTopContent={addProductsModal.onOpen}
          renderCell={renderCell}
          totalPages={totalPages(dataProducts?.total)}
        />
      )}
    </section>
  );
};

export default Products;
