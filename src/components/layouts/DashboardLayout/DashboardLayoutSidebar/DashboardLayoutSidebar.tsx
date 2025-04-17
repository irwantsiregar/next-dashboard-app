import { cn } from "@/utils/cn";
import { Listbox, ListboxItem } from "@heroui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { JSX } from "react";

interface SidebarItem {
  key: string;
  label: string;
  href: string;
  icon: JSX.Element;
}

interface PropTypes {
  sidebarItems: SidebarItem[];
  isOpen: boolean;
}

function DashboardLayoutSidebar(props: PropTypes) {
  const { sidebarItems, isOpen } = props;

  const { theme } = useTheme();

  const router = useRouter();

  return (
    <div
      className={cn(
        "fixed z-50 flex h-screen w-full max-w-[300px] -translate-x-full flex-col justify-between border border-r-1 border-default-200 px-4 py-6 transition-all lg:relative lg:translate-x-0",
        {
          "translate-x-0": isOpen,
          "lg:fixed": isOpen,
          "lg:-translate-x-full": isOpen,
          "bg-white": theme === "light",
          "bg-black": theme === "dark",
        },
      )}
    >
      <div>
        <div className="flex w-full justify-center">
          <Image
            src="/images/general/logo.svg"
            alt="logo"
            width={180}
            height={60}
            className="mb-6 w-32 rounded-lg bg-default-200 p-2"
            onClick={() => router.push("/")}
          />
        </div>

        <Listbox items={sidebarItems} variant="solid" label="Dashboard Menu">
          {(item) => (
            <ListboxItem
              key={item.key}
              className={cn("my-1 h-12 text-2xl", {
                "bg-danger-500 text-white": router.pathname.startsWith(
                  item.href,
                ),
              })}
              startContent={item.icon}
              textValue={item.label}
              aria-labelledby={item.label}
              aria-describedby={item.label}
              as={Link}
              href={item.href}
            >
              <p className="text-small">{item.label}</p>
            </ListboxItem>
          )}
        </Listbox>
      </div>

      <div className="flex items-center p-1">
        {/* About Brand or something actions */}
      </div>
    </div>
  );
}

export default DashboardLayoutSidebar;
