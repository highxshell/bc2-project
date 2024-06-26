import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useSolinkedin } from "../Connector/solinkedin";
import { CiLogin } from "react-icons/ci";
import { NavbarUtil } from "../utils/NavbarUtil";
import { useRouter } from "next/router";
import Image from "next/image";
const Navbar = () => {
  const router = useRouter();
  console.log(router.asPath);
  const { initialized } = useSolinkedin();
  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );
  const { word, home } = NavbarUtil();

  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="image"
              width={90}
              height={90}
              className="rounded-xl text-5xl"
            />
            <h1 class="ml-3 text-4xl text-white">SoLinkedin</h1>
          </a>
          <div class="flex">
            <WalletMultiButtonDynamic
              style={{
                marginRight: "10px",
                borderRadius: "50vw",
              }}
            />
            <button class="bg-white text-black py-2 px-4 rounded-3xl inline-flex items-center">
              <span>{word}</span>
              {initialized ? (
                <>
                  {home ? (
                    <>
                      <BsArrowLeft
                        onClick={() => router.push("/")}
                        className="ml-1 w-5 text-3xl"
                      />
                    </>
                  ) : (
                    <>
                      <BsArrowRight
                        onClick={() => router.push("/main")}
                        className="ml-1 w-5 text-3xl"
                      />
                    </>
                  )}
                </>
              ) : (
                <CiLogin className="ml-1 w-5 text-3xl" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
