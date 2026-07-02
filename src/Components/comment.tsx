import { useState, useEffect } from 'react';

export default function Comment({ commentIndex, language = 'en' }) {
  // commentIndex را از props دریافت می‌کنیم
  const comments = [
    {
      en: {
        text: 'This coffee is absolutely amazing! Highly recommended.',
        name: 'Mehdi Mohammadi',
      },
      fa: {
        text: 'این قهوه فوق‌العاده است! واقعاً پیشنهاد می‌کنم.',
        name: 'مهدی محمدی',
      },
      profileImage: '/pic/pro1.jpg',
    },
    {
      en: {
        text: 'The flavor is incredible and gives me energy every day.',
        name: 'Samira Kiani',
      },
      fa: {
        text: 'طعمش بی‌نظیره و باعث میشه هر روز انرژی بگیرم.',
        name: 'سمیرا کیانی',
      },
      profileImage: '/pic/pro2.jpg',
    },
    {
      en: {
        text: 'The atmosphere is wonderful and I always feel comfortable here.',
        name: 'Mina Yazdi',
      },
      fa: {
        text: 'محیط خیلی خوبیه و همیشه احساس راحتی می‌کنم.',
        name: 'مینا یزدی',
      },
      profileImage: '/pic/pro3.jpg',
    },
    {
      en: {
        text: "Best coffee I've ever had. It's amazing!",
        name: 'Fatemeh Nikzad',
      },
      fa: {
        text: 'بهترین قهوه‌ای که تا حالا خوردم. عالیه!',
        name: 'فاطمه نیکزاد',
      },
      profileImage: '/pic/pro4.jpg',
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => {
      setAnimate(false); // انیمیشن تمام می‌شود
    }, 500);

    return () => clearTimeout(timeout);
  }, [commentIndex]);

  return (
    <div className="w-full overflow-hidden text-lg text-black">
      <div
        className={`${language === 'fa' ? 'text-right' : 'text-left'} relative flex flex-col gap-5 rounded-2xl px-1 py-2 transition-all duration-500 ${
          animate ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        }`}
        style={{
          backgroundColor: '#ffffff', // رنگ پس‌زمینه ثابت سفید
        }}
      >
        <p className="p-2 text-sm">{comments[commentIndex][language].text}</p>
        <div className="flex items-center justify-center">
          <img
            src={comments[commentIndex].profileImage}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <span className="ml-4 text-sm font-semibold">
            {comments[commentIndex][language].name}
          </span>
        </div>
      </div>
    </div>
  );
}
