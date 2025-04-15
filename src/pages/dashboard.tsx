import { Inter } from "next/font/google";
import { Button } from "@heroui/react";
import PageHead from "@/components/commons/PageHead";
import { useRouter } from "next/router";
import CardSummary from "@/components/ui/CardSummary";
import { CiShoppingCart } from "react-icons/ci";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import useProducts from "@/components/views/Products/useProducts";
import useChangeUrl from "@/hooks/useChangeUrl";
import { useEffect } from "react";
import useCarts from "@/components/views/Carts/useCarts";

export default function MainDasboard() {
  const { push, isReady, query } = useRouter();

  const { dataProducts, isLoadingProducts } = useProducts();
  const { dataCarts, isLoadingCarts } = useCarts();

  const { setURL } = useChangeUrl();

  useEffect(() => {
    if (isReady) setURL();
  }, [isReady]);

  return (
    <DashboardLayout
      title="Dashboard"
      description="Recap from products, carts, recipes"
      type="admin"
    >
      <div className="container-fluid">
        <div className="grid grid-cols-12 gap-x-6">
          {/* LEFT */}
          <div className="col-span-12 xl:col-span-8">
            <div className="grid grid-cols-12 gap-0">
              {/* PRODUCT */}
              <div className="xxl:col-span-3 col-span-12 xl:col-span-6">
                <div className="relative flex flex-col overflow-hidden p-3">
                  <CardSummary
                    bgIcon="warning"
                    creased={2.64}
                    isCreased={true}
                    icon={
                      <CiShoppingCart className="text-2xl font-bold text-white" />
                    }
                    isLoading={isLoadingProducts}
                    label="Total Product"
                    total={dataProducts?.total ?? 0}
                  />
                </div>
              </div>

              {Array.from({ length: 4 }).map((_, index) => (
                <div className="xxl:col-span-3 col-span-12 xl:col-span-6">
                  <div className="relative flex flex-col overflow-hidden p-3">
                    <CardSummary
                      key={`summary${index}`}
                      label="Total Product"
                      total={864}
                      icon={
                        <CiShoppingCart className="text-2xl font-bold text-white" />
                      }
                      creased={2.64}
                      isCreased={false}
                      // bgIcon="secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-12 xl:col-span-4">
            <div className="grid grid-cols-12 gap-0">
              {Array.from({ length: 2 }).map((_, index) => (
                <div className="col-span-12 xl:col-span-12">
                  <div className="relative flex flex-col overflow-hidden p-3">
                    <CardSummary
                      key={`summary${index}`}
                      label="GRID RIGHT"
                      total={0}
                      icon={
                        <CiShoppingCart className="text-2xl font-bold text-white" />
                      }
                      creased={2.64}
                      isCreased={false}
                      isLoading={true}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
