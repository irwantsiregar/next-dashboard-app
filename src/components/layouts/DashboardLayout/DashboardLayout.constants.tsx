import { CiFries, CiGrid41, CiShop, CiShoppingCart } from "react-icons/ci";

const SIDEBAR_ADMIN = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <CiGrid41 />,
  },
  {
    key: "products",
    label: "Products",
    href: "/products",
    icon: <CiShop />,
  },
  {
    key: "carts",
    label: "Carts",
    href: "/carts",
    icon: <CiShoppingCart />,
  },
  {
    key: "recipes",
    label: "Recipes",
    href: "/recipes",
    icon: <CiFries />,
  },
];

export { SIDEBAR_ADMIN };
