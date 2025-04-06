import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedcategory: "نوشیدنی ها",
  menuItems: {
    "نوشیدنی ها": [
      {
        id: 1,
        name: "قهوه ترک",
        price: 50000,
        description: "تک‌شات معادل  میلی‌لیتر",
        image: "/pic/iteams/turk.png",
      },
      {
        id: 2,
        name: "اسپرسو",
        price: 35000,
        description: "تک‌شات و جفت‌شات عصاره غلیظ قهوه",
        image: "/pic/iteams/espre.png",
      },
      {
        id: 3,
        name: "لته",
        price: 75000,
        description: "اسپرسو، شیر با فوم کم",
        image: "/pic/iteams/latte.png",
      },
      {
        id: 4,
        name: "کاپوچینو",
        price: 75000,
        description: "اسپرسو، شیر با فوم زیاد",
        image: "/pic/iteams/capo.png",
      },
      {
        id: 5,
        name: "موکا",
        price: 85000,
        description: "اسپرسو، شکلات، شیر با فوم کم",
        image: "/pic/iteams/mocha.png",
      },
      {
        id: 6,
        name: "آمریکانو",
        price: 55000,
        description: "اسپرسو، آب داغ",
        image: "/pic/iteams/amer.png",
      },
      {
        id: 7,
        name: "آیس لته",
        price: 80000,
        description: "اسپرسو، شیر سرد کم چرب، یخ",
        image: "/pic/iteams/icel.png",
      },
      {
        id: 8,
        name: "آیس موکا",
        price: 80000,
        description: "اسپرسو، شکلات، شیر سرد کم چرب، یخ",
        image: "/pic/iteams/icem.png",
      },
      {
        id: 9,
        name: "چای سبز",
        price: 35000,
        description: "تک‌شات معادل ۳۰ میلی‌لیتر",
        image: "/pic/iteams/chay.png",
      },
      {
        id: 10,
        name: "چای ماسالا",
        price: 45000,
        description: "تک‌شات معادل ۳۰ میلی‌لیتر",
        image: "/pic/iteams/turk.png",
      },
    ],
    غذاها: [
      {
        id: 11,
        name: " پیتزا مخصوص ",
        price: 2800000,
        description: "",
        image: "/pic/iteams/pizza/pz3.png",
      },
      {
        id: 12,
        name: " پیتزا پپرونی ",
        price: 2600000,
        description: "",
        image: "/pic/iteams/pizza/pz2.png",
      },
      {
        id: 13,
        name: " پیتزا مخلوط ",
        price: 2500000,
        description: "",
        image: "/pic/iteams/pizza/pz2.png",
      },
      {
        id: 14,
        name: " پیتزا بیف ",
        price: 3400000,
        description: "",
        image: "/pic/iteams/pizza/pz7.png",
      },
      {
        id: 15,
        name: " پیتزا گوشت قارچ ",
        price: 260000,
        description: "",
        image: "/pic/iteams/pizza/pz2.png",
      },
      {
        id: 16,
        name: " پیتزا سبزیجات ",
        price: 190000,
        description: "",
        image: "/pic/iteams/pizza/pz2.png",
      },
      {
        id: 17,
        name: " پیتزا مرغ قارچ ",
        price: 240000,
        description: "",
        image: "/pic/iteams/pizza/pz2.png",
      },
      {
        id: 18,
        name: " پیتزا ایتالیایی ",
        price: 290000,
        description: "",
        image: "/pic/iteams/pizza/pz6.png",
      },
      {
        id: 19,
        name: " پیتزا آمریکایی ",
        price: 280000,
        description: "",
        image: "/pic/iteams/pizza/pz2.png",
      },
      {
        id: 20,
        name: " نان سیر ",
        price: 170000,
        description: "",
        image: "/pic/iteams/pizza/pz2.png",
      },
    ],
    "کیک ها": [
      { id: 21, name: " کیک شکلاتی ", price: 95000, description: "" },
      { id: 22, name: " کراسان شکلاتی ", price: 75000, description: "" },
      { id: 23, name: " پن شکلاتی ", price: 88000, description: "" },
      { id: 24, name: " رول دارچین ", price: 86000, description: "" },
      { id: 25, name: " کوکی کشمشی ", price: 54000, description: "" },
      { id: 26, name: " کوکی شکلاتی ", price: 54000, description: "" },
    ],
  },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedcategory = action.payload;
    },
  },
});

export const { setCategory } = menuSlice.actions;
export default menuSlice.reducer;
