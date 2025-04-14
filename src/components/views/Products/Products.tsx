import DataTable from "@/components/ui/DataTable";
import { useDisclosure } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Key, ReactNode, useCallback, useEffect } from "react";
import { COLUMN_LISTS_PRODUCTS } from "./Products.constants";
import useProducts from "./useProducts";
import useChangeUrl from "@/hooks/useChangeUrl";

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

  console.log(dataProducts);

  const renderCell = useCallback(
    (products: Record<string, unknown>, columKey: Key) => {
      const cellValue = products[columKey as keyof typeof products];

      const isURL = Array.isArray(cellValue) && cellValue[0].includes("http");

      switch (columKey) {
        case "images":
          return (
            <Image
              src={isURL ? cellValue[0] : ""}
              alt="Image"
              width={100}
              height={200}
              loading="lazy"
            />
          );
        case "actions":
          return (
            <></>
            // <DropdownAction
            //   onPressButtonDetail={() =>
            //     push(`/admin/category/${category?._id}`)
            //   }
            //   onPressButtonDelete={() => {
            //     setSelectedId(`${category._id}`);
            //     deleteCategoryModal.onOpen();
            //   }}
            // />
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
          buttonTopContentLabel="Create Products"
          columns={COLUMN_LISTS_PRODUCTS}
          data={dataProducts?.products || []}
          emptyContent="Product is empty"
          isLoading={isLoadingProducts || isRefetchingProducts}
          onClickButtonTopContent={addProductsModal.onOpen}
          renderCell={renderCell}
          totalPages={0}
        />
      )}
    </section>
  );
};

export default Products;
