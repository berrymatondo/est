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
import { BabyIcon, Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-md:p-2">
      <Link href="/">
        <BabyIcon className="" />
      </Link>
      <nav>
        <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-white">Menu Education</SheetTitle>
            </SheetHeader>

            <SheetFooter>
              <SubMenu />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
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
          className="bg-transparent text-black"
          onClick={() => router.push("/contact")}
        >
          Contact
        </Button>
      </SheetClose>
      <SheetClose asChild>
        <Button
          className="bg-transparent text-black"
          onClick={() => router.push("/team")}
        >
          Team
        </Button>
      </SheetClose>
      <SheetClose asChild>
        <Button
          className="bg-transparent text-black"
          onClick={() => router.push("/liens")}
        >
          Liens utiles
        </Button>
      </SheetClose>
      <SheetClose asChild>
        <Button
          className="bg-transparent text-black"
          onClick={() => router.push("/home")}
        >
          Accueil
        </Button>
      </SheetClose>
    </>
  );
};
