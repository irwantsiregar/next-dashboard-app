import {
  CiGrid41,
  CiShop,
  CiShoppingCart,
  CiShoppingTag,
} from "react-icons/ci";

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
    key: "category",
    label: "Category",
    href: "/category",
    icon: <CiShoppingTag />,
  },
  {
    key: "carts",
    label: "Carts",
    href: "/carts",
    icon: <CiShoppingCart />,
  },
];

export { SIDEBAR_ADMIN };
