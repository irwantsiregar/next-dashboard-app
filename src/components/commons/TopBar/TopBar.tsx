import ThemeSwitcher from "@/components/ui/ThemeSwitcher/ThemeSwithcher";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { BsBell, BsCart3 } from "react-icons/bs";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function TopBar() {
  return (
    <Navbar
      isBlurred
      maxWidth="2xl"
      position="static"
      className="border-b-1 border-default-200"
    >
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="secondary" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <div className="flex items-center justify-center gap-x-3 pr-2">
          <ThemeSwitcher />

          <CartAndNotif />
        </div>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Badge color="danger" content="new" size="sm">
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                radius="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Badge>
          </DropdownTrigger>

          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="profile">Profile</DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

const CartAndNotif = () => {
  return (
    <div className="flex gap-3">
      <Badge color="secondary" content="5" placement="top-right" size="sm">
        <Button
          isIconOnly
          variant="bordered"
          aria-label="Shopping Cart"
          className="border-1 border-default-200"
        >
          <BsCart3 className="text-xl" />
        </Button>
      </Badge>

      <Badge color="danger" content="9+" shape="circle" size="sm">
        <Button
          isIconOnly
          variant="bordered"
          aria-label="Notification"
          className="border-1 border-default-200"
        >
          <BsBell className="text-xl" />
        </Button>
      </Badge>
    </div>
  );
};
