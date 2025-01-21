import React, { useEffect, useState } from "react";
import img from "./images/logo.png";
import Nazarat from "../Comments/nazarat";
import M from "../menu";

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
    <div>
      <div className="top-0 left-0 absolute w-screen h-screen bg-cover  z-0 ">
        <img className="w-full h-full object-cover" src={Picture[pic]} />
      </div>
      <div className="fixed mt-6 pr-16 pl-16 w-full items-center flex justify-between">
        <div className="flex justify-center items-center w-20 h-12 rounded-3xl bg-white shadow-sm shadow-gray-400">
          <button className="text-gray-500">Sign in</button>
        </div>
        <div className="flex justify-center">
          <img src={img} className="w-24 h-24 rounded-full" />
        </div>
        <div className="flex justify-start">
          <M />
        </div>
      </div>
      <div className="fixed left-[150px] top-[52px] w-10 h-10 rounded-full bg-white flex">
        <img
          className="w-6 h-6 absolute left-3 top-2"
          src="/pic/s.svg"
          alt="Search Icon"
        />
      </div>

      <div className="absolute top-56 right-14">
        <h1 className="text-2xl text-white">
          ☕قهوه تنها تلخیه که می‌تونه روزتو شیرین کنه
        </h1>
      </div>
      <div className="absolute top-80 right-14">
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
      <div className="absolute bottom-[220px] transform right-36">
        <div
          className="w-6 h-6 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin"
          style={{
            animationDuration: "4s", // هماهنگی با زمان تغییر پس‌زمینه
          }}
        ></div>
      </div>
      <div className="absolute w-9 h-9 bottom-8 left-1/2 transform -translate-x-1/2">
        <img className="w-full h-full" src="/pic/paein.png" />
      </div>
    </div>
  );
}
