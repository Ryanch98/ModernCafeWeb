import React, { useEffect, useState } from "react";
import Nazarat from "../Comments/nazarat";
import Menu from "../menu";

export default function Home() {
  const Picture = [
    "/pic/pic1.jpg",
    "/pic/pic2.jpg",
    "/pic/pic3.jpg",
    "/pic/pic4.jpg",
    "/pic/pic5.jpg",
  ];

  const [pic, setPic] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [nazarIndex, setNazarIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
      setPic((prevIndex) =>
        prevIndex === Picture.length - 1 ? 0 : prevIndex + 1
      );
      setNazarIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
      setTimeout(() => {
        setIsLoading(false); // بعد از تغییر پس‌زمینه و کامنت، اسپینر ناپدید می‌شود
      }, 2000); // مدت زمانی که اسپینر نمایش داده می‌شود (برای همگام‌سازی با تغییرات)
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen bg-cover z-0">
        <img className="w-full h-full object-cover" src={Picture[pic]} />
      </div>
      <div className="fixed w-full flex justify-between items-center px-40 mt-5">
        <div className="flex justify-center items-center gap-1">
          <div className="w-20 h-12 rounded-3xl  bg-white/10 backdrop-blur-sm flex justify-center items-center">
            <button className="text-white">Sign in</button>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center">
            <img
              className="ml-1 w-6 h-6 text-white"
              src="/pic/s.svg"
              alt="Search Icon"
            />
          </div>
        </div>

        <div className="flex justify-center w-44 bg-white/10 rounded-full">
          <img src="/pic/logo.png" alt="Logo" />
        </div>

        <div className="justify-center items-center flex w-20 h-12 rounded-3xl bg-white/10 backdrop-blur-sm">
          <h1 className="text-white">Abou Us</h1>
        </div>
      </div>

      <div>
        <Menu />
      </div>

      <div className="absolute top-[40vh] right-14">
        <h1 className="text-2xl text-white">
          ☕ قهوه تنها تلخیه که می‌تونه روزتو شیرین کنه
        </h1>
      </div>

      <div className="absolute top-[47vh] right-14">
        <Nazarat nazarIndex={nazarIndex} />
      </div>

      <div className="absolute bottom-56 right-20 w-4 h-4">
        <img className="w-full h-full" src="/pic/next.svg" />
      </div>
      <div className="absolute bottom-56 right-28 w-4 h-4">
        <img className="w-full h-full rotate-180" src="/pic/next.svg" />
      </div>

      <div className="absolute bottom-24 right-20 w-7 h-7">
        <img
          className="w-full h-full hover:scale-125 transition-transform duration-300"
          src="/pic/insta.svg"
        />
      </div>
      <div className="absolute bottom-24 right-32 w-7 h-7">
        <img
          className="w-full h-full hover:scale-125 transition-transform duration-300"
          src="/pic/whatsApp.svg"
        />
      </div>

      <div className="absolute bottom-[220px] right-36">
        <div
          className="w-6 h-6 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin"
          style={{
            animationDuration: "4s",
          }}
        ></div>
      </div>

      <div className="absolute w-9 h-9 bottom-8 left-1/2 transform -translate-x-1/2">
        <img className="w-full h-full" src="/pic/down.svg" />
      </div>
    </>
  );
}
