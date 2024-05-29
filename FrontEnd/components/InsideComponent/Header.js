import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <style jsx>{`
        .custom-button {
          background-color: #512da8;
          color: white;
        }
        .custom-button:hover {
          background-color: #1a1f2e;
        }

        .btn:hover {
          background-color: #1a1f2e;
        }
      `}</style>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
          <button
            onClick={() => router.push("/upload")}
            className={`py-2 px-4 rounded-3xl inline-flex items-center justify-center mx-5 w-40 ${
              currentPath === "/upload" ? "custom-button" : "btn"
            }`}
          >
            EXPLORE
          </button>

          <button
            onClick={() => router.push("/main")}
            className={`py-2 px-4 rounded-3xl inline-flex items-center justify-center w-40 ${
              currentPath === "/main" ? "custom-button" : "btn"
            }`}
          >
            PEOPLE
          </button>

          <button
            onClick={() => router.push("/myspace")}
            className={`py-2 px-4 rounded-3xl inline-flex items-center justify-center mx-5 w-40 ${
              currentPath === "/myspace" ? "custom-button" : "btn"
            }`}
          >
            MY SPACE
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
