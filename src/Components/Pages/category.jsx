import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Category = () => {
  const { name } = useParams();
  const menuItems = useSelector((state) => state.menu.menuItems);

  const categoryData = menuItems[name] || [];

  return (
    <div className="bg-gray-800 relative">
      <div>
        <h1 className="text-white flex justify-center relative top-28 text-3xl">
          {name}
        </h1>
      </div>
      <div className="mt-52 flex flex-col gap-14">
        {categoryData.map((item) => (
          <div key={item.id} className="border mx-10 h-44 flex">
            <h2>{item.name}</h2>
            <p>قیمت: {item.price.toLocaleString()} تومان</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
