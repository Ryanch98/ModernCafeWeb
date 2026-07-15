export interface Comment {
  en: {
    text: string;
    name: string;
  };
  fa: {
    text: string;
    name: string;
  };
  profileImage: string;
}

export const CUSTOMER_COMMENTS: Comment[] = [
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
