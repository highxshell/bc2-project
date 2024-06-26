import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { useSolinkedin } from "../Connector/solinkedin";
import { useEffect, useState } from "react";
import { LoginUtil } from "./LoginUtil";
import { useRouter } from "next/router";
import Login from "./Login";
import dynamic from "next/dynamic";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
const Hero = () => {
  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );
  const { publicKey } = useWallet();
  const router = useRouter();
  const { initialized } = useSolinkedin();
  const { loginState, turnLoginTrue } = LoginUtil();
  const [isPublicKey, setPublicKey] = useState(false);
  useEffect(() => {
    const check = () => {
      if (publicKey) {
        setPublicKey(true);
      }
    };
    check();
  }, [publicKey]);
  return (
    <>
      <div id="top">
        <div
          style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Image
            src="/2.jpg"
            className="rounded-3xl"
            alt="Mountains with snow"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h1
            style={{
              paddingTop: "21vh",
              fontFamily: "monospace",
              fontSize: "6rem",
              fontWeight: "bold",
              textAlign: "center",
              color: "#512da8",
              textDecoration: "underline",
              textShadow: `
                -1px -1px 0 #fff,  
                1px -1px 0 #fff,
                -1px 1px 0 #fff,
                1px 1px 0 #fff
              `,
            }}
          >
            START A NEW JOURNEY
            {/* <p>With SoLinkedin </p> */}
          </h1>
          <div class="flex justify-center">
            {isPublicKey ? (
              <>
                {initialized ? (
                  <>
                    <button
                      onClick={() => router.push("/main")}
                      className={`md:mr-5 bg-[#512da8] text-white py-4 px-10 rounded-3xl inline-flex items-center mx-10 mt-5 transition-colors hover:bg-[#1a1f2e]`}
                    >
                      <span>DIVE IN</span>
                      <BsArrowRight className="ml-1 w-5 text-3xl" />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => turnLoginTrue()}
                      class={`md:ml-5 bg-white text-black py-4 px-10 rounded-3xl inline-flex items-center mx-10 mt-10 `}
                    >
                      <span className="text-xl">Create Your Account</span>
                      <CiLogin className="ml-1 w-8 text-3xl" />
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                <WalletMultiButtonDynamic
                  style={{
                    marginRight: "10px",
                    borderRadius: "50vw",
                  }}
                />
              </>
            )}
          </div>
          {loginState ? (
            <>
              <Login />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
