import DashboardLayout from "@/components/layouts/DashboardLayout";
import Products from "@/components/views/Products";

function ProductsAdminPage() {
  return (
    <DashboardLayout
      title="Products"
      description="List of all product, create new product, and manage existing products"
      type="admin"
    >
      <Products />
    </DashboardLayout>
  );
}

export default ProductsAdminPage;
