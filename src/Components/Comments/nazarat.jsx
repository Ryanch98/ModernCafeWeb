import React, { useState, useEffect } from "react";

export default function Nazarat({ nazarIndex }) {
  // nazarIndex را از props دریافت می‌کنیم
  const comments = [
    {
      text: "این قهوه فوق‌العاده است! واقعاً پیشنهاد می‌کنم.",
      name: "مهدی محمدی",
      profileImage: "/pic/pro1.jpg",
    },
    {
      text: "طعمش بی‌نظیره و باعث میشه هر روز انرژی بگیرم.",
      name: "سمیرا کیانی",
      profileImage: "/pic/pro2.jpg",
    },
    {
      text: "محیط خیلی خوبیه و همیشه احساس راحتی می‌کنم.",
      name: "مینا یزدی",
      profileImage: "/pic/pro3.jpg",
    },
    {
      text: "بهترین قهوه‌ای که تا حالا خوردم. عالیه!",
      name: "فاطمه نیکزاد",
      profileImage: "/pic/pro4.jpg",
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => {
      setAnimate(false); // انیمیشن تمام می‌شود
    }, 500);

    return () => clearTimeout(timeout);
  }, [nazarIndex]);

  return (
    <div className="w-96 text-lg text-center text-black overflow-hidden">
      <div
        className={`relative rounded-2xl p-2 transition-all duration-500 ${
          animate ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
        style={{
          backgroundColor: "#ffffff", // رنگ پس‌زمینه ثابت سفید
        }}
      >
        <p className="p-2">{comments[nazarIndex].text}</p>
        <div className="flex items-center justify-center ">
          <img
            src={comments[nazarIndex].profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-4 text-sm font-semibold">
            {comments[nazarIndex].name}
          </span>
        </div>
      </div>
    </div>
  );
}
