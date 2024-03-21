"use client";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  FileCheck,
  Check,
  ChevronsUpDown,
  Phone,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputWithIcon } from "@/components/atoms/InputWithIcon";
import { InputWithButton } from "@/components/atoms/InputWithButton";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Progress } from "@/components/ui/progress";

const frameworks = [
  {
    nilai: "next.js",
    label: "Next.js",
  },
  {
    nilai: "sveltekit",
    label: "SvelteKit",
  },
  {
    nilai: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    nilai: "remix",
    label: "Remix",
  },
  {
    nilai: "astro",
    label: "Astro",
  },
];
export default function TestComponents() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="m-10 mb-2 ">
        {/* Button */}
        <Button
          size="sm"
          variant="primary"
          className=" flex justify-center items-center gap-2 p-4 mb-2"
        >
          <FileCheck />
          Req Review
        </Button>
        <Button
          size="sm"
          variant="gray"
          className=" flex justify-center items-center gap-2 p-4 mb-2"
        >
          <ArrowLeft />
          Back
        </Button>
        <Button
          size="sm"
          variant="primary"
          className=" flex justify-center items-center gap-2 p-4 mb-2"
        >
          <ArrowRight />
          Next
        </Button>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input placeholder="Tes" />
          <InputWithIcon placeholder="Input with icon" icon={<Phone />} />
          <InputWithButton placeholder="Input with button" button="IDR" />
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>

        {/* Breadcum */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">
                Components
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Progress Bar */}
        <Progress value={progress} className="w-[20%]" />
      </div>
    </div>
  );
}
