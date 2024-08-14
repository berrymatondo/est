"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [light, setLight] = React.useState(true);

  return (
    <>
      {light ? (
        <Button
          onClick={() => {
            setLight(false);
            setTheme("dark");
          }}
          className="border-none"
          variant="outline"
          size="icon"
        >
          <Moon className="h-[1.2rem] w-[1.2rem] " />
        </Button>
      ) : (
        <Button
          onClick={() => {
            setLight(true);
            setTheme("light");
          }}
          className="border-none"
          variant="outline"
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] " />
        </Button>
      )}
    </>
  );
}
