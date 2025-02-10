import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/menuSlice";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCategory = (Category) => {
    dispatch(setCategory(Category));
    navigate(`/category/${Category}`);
  };
  return (
    <div className="group left-0 rounded-r-2xl flex flex-col items-center absolute justify-evenly w-12 h-[480px] top-36 bg-white/10 backdrop-blur-sm hover:w-32 hover:transition-all duration-300 hover:items-start hover:pl-2">
      {/* نوشیدنی‌ها */}
      <div className="relative flex items-center">
        <button onClick={() => handleCategory("نوشیدنی")}>
          <h1 className="absolute left-12 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            نوشیدنی‌ها
          </h1>
          <img className="w-9 h-9" src="/pic/coffee.svg" alt="coffee-logo" />
        </button>
      </div>

      {/* کیک‌ها */}
      <div className="relative flex items-center">
        <h1 className="absolute left-12 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          کیک‌ها
        </h1>
        <img className="w-8 h-8" src="/pic/cake.svg" alt="cake-logo" />
      </div>

      {/* غذا‌ها */}
      <div className="relative flex items-center">
        <h1 className="absolute left-12 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          غذا‌ها
        </h1>
        <img className="w-9 h-9" src="/pic/pizza.svg" alt="pizza-logo" />
      </div>

      {/* خرید */}
      <div className="relative flex items-center">
        <h1 className="absolute left-12 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          خرید
        </h1>
        <img className="w-9 h-9" src="/pic/basket.svg" alt="basket-logo" />
      </div>

      {/* مکان */}
      <div className="relative flex items-center">
        <h1 className="absolute left-12 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          مکان
        </h1>
        <img className="w-10 h-10" src="/pic/loc.svg" alt="loc-logo" />
      </div>
    </div>
  );
}
