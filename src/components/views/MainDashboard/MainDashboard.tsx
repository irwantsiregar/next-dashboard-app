import CardSummary from "@/components/ui/CardSummary";
import useCarts from "@/components/views/Carts/useCarts";
import useProducts from "@/components/views/Products/useProducts";
import useChangeUrl from "@/hooks/useChangeUrl";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MixedChart, PolarAreaChart } from "./Charts";
import { Card, CardBody } from "@heroui/react";
import Products from "./Products";

const MainDashboard = () => {
  const { push, isReady, query } = useRouter();

  const { dataProducts, isLoadingProducts } = useProducts();
  const { dataCarts, isLoadingCarts } = useCarts();

  const { setURL } = useChangeUrl();

  useEffect(() => {
    if (isReady) setURL();
  }, [isReady]);

  return (
    <div className="container-fluid gay-y-3">
      {/* Start::Row-1 */}
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

            {Array.from({ length: 3 }).map((_, index) => (
              <div
                className="xxl:col-span-3 col-span-12 xl:col-span-6"
                key={`summary_${index}`}
              >
                <div className="relative flex flex-col overflow-hidden p-3">
                  <CardSummary
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

            <div className="col-span-12 xl:col-span-8">
              <div className="relative flex flex-col overflow-hidden p-3">
                <Card>
                  <CardBody>
                    <MixedChart />
                  </CardBody>
                </Card>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="col-span-12 rounded-xl bg-slate-200 xl:col-span-4">
              <div className="relative flex flex-col overflow-hidden p-3">
                <Card>
                  <CardBody>
                    <PolarAreaChart />
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-12 xl:col-span-4">
          <div className="grid grid-cols-12 gap-0">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                className="col-span-12 xl:col-span-12"
                key={`summary__${index}`}
              >
                <div className="relative flex flex-col overflow-hidden p-3">
                  <CardSummary
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
      {/* End: Row-1 */}

      {/* Start: Row-2 */}
      <div className="grid grid-cols-12 gap-x-6">
        {/* LEFT */}
        <div className="col-span-12 xl:col-span-8">
          <div className="relative flex flex-col overflow-hidden p-3">
            <Products />
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-12 xl:col-span-4">
          {Array.from({ length: 1 }).map((_, index) => (
            <div
              className="col-span-12 xl:col-span-12"
              key={`summary__${index}`}
            >
              <div className="relative flex flex-col overflow-hidden p-3">
                <CardSummary
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
      {/* End: Row-2 */}
    </div>
  );
};

export default MainDashboard;
