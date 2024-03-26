import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="bg-white flex justify-center items-center w-full h-screen">
      <div className="w-[53%] max-h-full h-screen ">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/images/login.png')` }}
        />
      </div>
      <div className="w-[47%] h-screen bg-white px-9 flex justify-center items-center">
        <div className="w-[616px] rounded-lg border border-[#E4E4E7] p-8">
          <div>
            <h3 className="text-4xl text-black font-bold mb-16">Sign In</h3>
            <div className="flex flex-col gap-5">
              <div>
                <Label className=" inline-block mb-3">
                  Username <span className="text-red-600">*</span>
                </Label>
                <Input placeholder="username" />
              </div>
              <div>
                <Label className=" inline-block mb-3">
                  Password <span className="text-red-600">*</span>
                </Label>
                <Input type="password" placeholder="password" />
              </div>
              <Button
                size="sm"
                variant="primary"
                className=" flex justify-center items-center gap-2 p-4"
              >
                Sign In
              </Button>
              <Link className="text-sm w-full text-center font-medium" href="/">
                Forgot Password ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
