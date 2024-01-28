import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterDemo() {
  return (
    <footer className="sm:overflow-hidden 2xl:overflow-hidden">
      <div
        className="
        sm:flex sm:flex-col 2xl:flex-nowrap sm:flex-wrap
        py-8
        mx-auto
        sm:items-center
        md:flex-row md:flex-nowrap
      "
      >
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <Link className="flex justify-center mb-6" href="/" prefetch={true}>
            <h2 className="scroll-m-10 sm:text-[30px] 2xl:text-3xl sm:ml-2 font-black tracking-wider first:mt-0 text-primary  hover:italic">
              Insta
            </h2>
            <h3 className=" scroll-m-10 sm:text-[30px] 2xl:text-3xl font-bold tracking-widest  ">
              down
            </h3>
            <h3 className=" scroll-m-10 sm:text-[12px]  2xl:text-[14px] font-bold tracking-widest ">
              .io
            </h3>
          </Link>
          <p className="my-8 text-xs text-justify text-gray-400">
            Saiyam Dubey (Devloper 🙊) : I am Working on this site just for the
            Educational purpose , I also want you to contribute on this site on
            my Github Repository which is mentioned on the page of my github
            (saiyamdubey) .... 💖
          </p>
          <div className="flex mt-4 sm:flex-col ">
            <Input type="email" placeholder="Email" />
            <Button variant="outline" className="bg-primary sm:mt-3 ">
              Subscribe
            </Button>
          </div>
          <div className="flex my-10 justify-center space-x-4">
            <Link href={"/"}>
              <Facebook className="text-blue-500" />
            </Link>
            <Link href={"/"}>
              <Twitter className="text-sky-300" />
            </Link>
            <Link href={"/"}>
              <Instagram className="text-pink-500" />
            </Link>
            <Link href={"/"}>
              <Linkedin className="text-blue-400" />
            </Link>
          </div>
        </div>
        <div className="justify-between w-dvw mt-4 text-center sm:flex-col">
          <div className="w-dvw lg:w-1/3 md:w-1/2">
            <h2 className="mb-4 font-extrabold text-xl tracking-widest ">
              Instagram
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="">
                  Instagram video Download
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Instagram Profile Download
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Instagram Highlights Download
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Instagram Stories Download
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Instagram Carosol Download
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-4  font-extrabold text-xl tracking-widest ">
              Youtube
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="">
                  Instant Video Download
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Quality Profile Photo
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Youtube Shorts Downloder
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-4 font-extrabold text-xl tracking-widest ">
              Facebook
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="">
                  Facbook Videos Download
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Profile Facebook Download
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Shorts Video Downloder
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Stories Downloder Facebook
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-4  font-extrabold text-xl tracking-widest ">
              Tiktok
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="">
                  Profile Pic Downloder
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Tiktok Video Downloder
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Tiktok Shorts Downloder
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-dvw px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-4  font-extrabold text-xl tracking-widest ">
              Pinterest
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="">
                  Image Downloader
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  pinterest Video Downloder
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t-2 border-primary">
        <p className="text-center sm:text-[13px] text-primary py-4">
          @2024 Ram Ram Bhaiyo .
        </p>
      </div>
    </footer>
  );
}
