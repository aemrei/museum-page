import Head from "next/head";
import { Menu } from "@/features/menu/components/Menu";
import { HomePage } from "@/features/core/pages/HomePage";

const menuItems: MenuItem[] = [
  {
    label: "Home",
    path: "/",
    icon: "home",
    id: "home",
  },
  {
    label: "About",
    path: "/about",
    icon: "info",
    id: "about",
  },
  {
    label: "Contact",
    path: "/contact",
    icon: "mail",
    id: "contact",
  },
];
export default function Home() {
  return <HomePage menuItems={menuItems} />;
}
