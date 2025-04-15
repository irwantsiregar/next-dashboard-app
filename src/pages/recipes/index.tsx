import DashboardLayout from "@/components/layouts/DashboardLayout";
import Carts from "@/components/views/Carts";

function RecipesPage() {
  return (
    <DashboardLayout
      title="Recipes"
      description="List of all recipes and manage existing recipes"
      type="admin"
    >
      <Carts />
    </DashboardLayout>
  );
}

export default RecipesPage;
