import useChangeUrl from "@/hooks/useChangeUrl";
import productsServices from "@/services/products.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

const useProducts = () => {
  const router = useRouter();

  const [selectedId, setSelectedId] = useState<string>("");

  const { currentLimit, currentPage, currentSearch } = useChangeUrl();

  const getProducts = async () => {
    let params = `limit=${currentLimit}&skip=${currentPage}`;

    if (currentSearch) {
      params += `&q=${currentSearch}`;
    }

    const res = await productsServices.getproducts(
      params,
      currentSearch !== "",
    );
    const { data } = res;

    return data;
  };

  const {
    data: dataProducts,
    isLoading: isLoadingProducts,
    isRefetching: isRefetchingProducts,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ["Products", currentPage, currentLimit, currentSearch],
    queryFn: () => getProducts(),
    enabled: router.isReady && !!currentPage && !!currentLimit,
  });

  return {
    dataProducts,
    isLoadingProducts,
    isRefetchingProducts,
    refetchProducts,
    selectedId,
    setSelectedId,
  };
};

export default useProducts;
