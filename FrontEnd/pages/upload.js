import { useState } from "react";
import { useSolinkedin } from "../Connector/solinkedin";
import { AiOutlinePlus } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { BsArrow90DegLeft } from "react-icons/bs";
import Header from "../components/InsideComponent/Header";
const upload = () => {
  const {
    addVideo,
    videoDiscription,
    videoUrl,
    videoDiscriptionHandler,
    videoUrlHandler,
    allvideo,
    loading,
    transactionPending,
    videoLoading,
  } = useSolinkedin();
  const [upload, setUpload] = useState(false);
  const uploadVideo = () => {
    addVideo();
    if (loading && transactionPending == false) {
      setUpload(false);
    }
  };

  const switchView = () => {
    if (upload == false) {
      setUpload(true);
    }
    if (upload == true) {
      setUpload(false);
    }
  };
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <div class="p-2 w-full flex flex-col justify-center items-center">
        {upload ? (
          <>
            <button
              onClick={() => switchView()}
              class="text-black bg-white py-2 px-8 mt-5 mr-5 rounded-full"
            >
              <BsArrow90DegLeft />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => switchView()}
              class="text-black bg-white py-2 px-8 mt-5 mr-5 rounded-full"
            >
              <AiOutlinePlus />
            </button>
          </>
        )}
      </div>

      {upload ? (
        <>
          <section
            className="text-gray-600 body-font relative my-18"
            id="login"
          >
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 bg-[url('/3.jpg')] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <div
                  style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                  }}
                >
                  <Image
                    src="/3.jpg"
                    className="rounded-3xl"
                    alt="Mountains with snow"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  width="50%"
                  height="100%"
                  className="absolute inset-0 bg-gray-900 flex justify-center items-center"
                  style={{
                    backgroundColor: "#512da8",
                  }}
                  frameborder="0"
                  title="map"
                  marginheight="0"
                  marginwidth="0"
                  scrolling="no"
                >
                  <h2 className="text-white text-8xl mt-10">
                    Upload your video
                  </h2>
                </div>
              </div>
              <div className="lg:w-2/6 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10  md:mt-0 justify-center">
                <h2 className="text-white text-lg font-medium title-font mb-5">
                  Upload
                </h2>
                <div className="relative mb-4">
                  <label for="email" className="leading-7 text-sm text-white">
                    Video Description
                  </label>
                  <input
                    value={videoDiscription}
                    onChange={videoDiscriptionHandler}
                    type="text"
                    className="w-full mt-2 bg-white rounded-2xl border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    for="full-name"
                    className="leading-7 text-sm text-white"
                  >
                    Your Video Url
                  </label>
                  <input
                    value={videoUrl}
                    onChange={videoUrlHandler}
                    type="text"
                    className="w-full mt-2 bg-white border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl"
                  />
                </div>
                {loading ? (
                  <>
                    <Image
                      src="/yellowLoader.gif"
                      width={500}
                      height={500}
                      className="m-auto"
                    />
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => uploadVideo()}
                      className="bg-white text-black border-0 py-2 px-8 focus:outline-none rounded-full text-lg"
                    >
                      Upload
                    </button>
                  </>
                )}

                <p className="text-gray-500 mt-3"></p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {videoLoading ? (
            <>
              <Image
                src="/yellowLoader.gif"
                width={500}
                height={500}
                className="m-auto mt-10"
              />
            </>
          ) : (
            <div className="flex flex-wrap justify-start">
              {allvideo.map((item) => (
                <div
                  className="w-full md:w-1/3 px-4 mb-8 mt-4 flex items-center"
                  key={item}
                >
                  <div className="w-1/3">
                    <img
                      src={item.account.profileUrl}
                      alt="..."
                      className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                    />
                  </div>
                  <div className="w-2/3 px-4">
                    <h3 className="text-red-500 text-md mb-2 mt-5 title-font">
                      {item.account.userName}
                    </h3>
                    <iframe
                      allow="autoplay; gyroscope;"
                      allowFullScreen
                      className="w-full aspect-square object-fill rounded-3xl"
                      src={item.account.content}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default upload;
