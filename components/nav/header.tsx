"use client";

import React from "react";
import { MdMenu } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiChampions } from "react-icons/gi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { BabyIcon, LogIn, Menu } from "lucide-react";
import { ModeToggle } from "../toggle";

const links = [
  /*   { id: 1, link: "Accueil", href: "/" },
   */ { id: 2, link: "Equipe", href: "/team" },
  { id: 3, link: "Modules", href: "/modules" },
  { id: 4, link: "Liens utiles", href: "/liens" },
  { id: 5, link: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <div className=" my-4 flex items-center justify-between max-md:p-2">
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-white  dark:text-black">
                Menu Education
              </SheetTitle>
            </SheetHeader>

            <SheetFooter>
              <SubMenu />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
      <Link href="/" className="font-bold text-2xl text-sky-600">
        {/*         <BabyIcon className="" />
         */}{" "}
        LK
        <span className="font-thin text-lg text-black dark:text-white">
          Education
        </span>
      </Link>
      <nav className="max-md:hidden flex gap-6 items-center font-semibold ">
        {links.map((lk: any) => (
          <Link key={lk.id} href={lk.href} className="hover:text-sky-600">
            {lk.link}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <ModeToggle />

        <Button variant="outline" className="max-md:hidden">
          Connexion
        </Button>
        <LogIn className="text-green-600 md:hidden " />
      </div>
    </div>
  );
};

export default Header;

const SubMenu = () => {
  const router = useRouter();

  return (
    <>
      <SheetClose asChild>
        <Button
          className="bg-transparent text-black dark:text-white"
          onClick={() => router.push("/contact")}
        >
          Contact
        </Button>
      </SheetClose>

      <SheetClose asChild>
        <Button
          className="bg-transparent text-black dark:text-white"
          onClick={() => router.push("/liens")}
        >
          Liens utiles
        </Button>
      </SheetClose>

      <SheetClose asChild>
        <Button
          className="bg-transparent text-black dark:text-white"
          onClick={() => router.push("/modules")}
        >
          Modules
        </Button>
      </SheetClose>

      <SheetClose asChild>
        <Button
          className="bg-transparent text-black dark:text-white"
          onClick={() => router.push("/team")}
        >
          Equipe
        </Button>
      </SheetClose>

      <SheetClose asChild>
        <Button
          className="bg-transparent text-black dark:text-white"
          onClick={() => router.push("/home")}
        >
          Accueil
        </Button>
      </SheetClose>
    </>
  );
};
