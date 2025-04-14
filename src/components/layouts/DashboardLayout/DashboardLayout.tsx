import PageHead from "@/components/commons/PageHead";
import { Navbar, NavbarMenuToggle } from "@heroui/react";
import { Fragment, ReactNode, useState } from "react";
import { SIDEBAR_ADMIN } from "./DashboardLayout.constants";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar/DashboardLayoutSidebar";

interface PropTypes {
  children: ReactNode;
  description?: string;
  title?: string;
  type?: string;
}

const DashboardLayout = (props: PropTypes) => {
  const { children, description, title, type = "admin" } = props;

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <PageHead title={title} />

      <div className="max-w-screen-3xl 3xl:container flex">
        <DashboardLayoutSidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_ADMIN}
          isOpen={open}
        />

        <div className="h-screen w-full overflow-auto p-8">
          <Navbar
            className="flex justify-between bg-transparent px-0"
            isBlurred={false}
            classNames={{ wrapper: "p-0" }}
            position="static"
          >
            <h1 className="text-3xl font-bold">{title}</h1>

            <NavbarMenuToggle
              className="lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onPress={() => setOpen(!open)}
            />
          </Navbar>

          <p className="mb-4 text-small">{description}</p>

          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardLayout;
