"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

export default function Header() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };
  return (
    <div className=" ">
      <div className=" sm:w-full sm:flex sm:flex-wrap sm:items-center sm:px-3 sm:justify-between">
        <div>
          <div className="flex justify-between px-8 py-5">
            {/* logo */}
            <div className=" ">
              <Link href="/">
                {" "}
                <Image
                  src="/logo.png"
                  alt="Company logo"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
            {/* navbar small  */}
            <div className="sm:hidden" onClick={toggleNavbar}>
              {isClick ? (
                <ImCross className="text-2xl" />
              ) : (
                <TiThMenu className="text-3xl" />
              )}
            </div>
          </div>
          {isClick && (
            <div className="w-screen h-screen pt-10 ">
              <ul className="pl-10  leading-10 ">
                <li className="hover:border-b-2">Products</li>
                <li className="hover:border-b-2">Solutions</li>
                <li className="hover:border-b-2">Resources</li>
                <li className="hover:border-b-2">Pricing</li>
              </ul>
              <div className=" flex gap-[60px] my-5 justify-center">
                <Image src="/heart.png" alt="pic1" width={20} height={20} />
                <Image src="/man.png" alt="pic3" width={20} height={20} />
                <Image src="/trolly.png" alt="pic2" width={20} height={20} />
              </div>
            </div>
          )}
        </div>
        {/* Search Bar */}
        <div className=" flex justify-center sm:pt-3 ">
          <div className="w-[95%] h-[55px] sm:w-[400px]  bg-[#F5F5F5] border-2 border-solid rounded flex  items-center opacity-40 mb-2 ">
            <div className="pl-7">
              <Image src="/search.png" alt="search" width={20} height={20} />
            </div>
            <h1 className="pl-5">search</h1>
          </div>
        </div>
        {/* components */}
        <ul className="hidden sm:flex gap-[20px]">
          <Link href={"/"}>
            <li>Home </li>
          </Link>
          <Link href={"/Components/About"}>
            <li className="opacity-40 text-center hover:opacity-100">About</li>
          </Link>
          <Link href={"/Components/Contact"}>
            <li className="opacity-40 text-center hover:opacity-100">
              Contact us
            </li>
          </Link>
        </ul>
        {/* right icon  */}
        <div className="hidden h-[20px] sm:flex gap-[20px] my-2 mx-2">
          <Image src="/heart.png" alt="pic1" width={20} height={20} />
          <Image src="/man.png" alt="pic3" width={20} height={20} />
          <Image src="/trolly.png" alt="pic2" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
