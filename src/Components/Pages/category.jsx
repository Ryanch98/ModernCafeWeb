import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Menu from "../menu";
import { Link } from "react-router-dom";

const Category = () => {
  const { name } = useParams();
  const menuItems = useSelector((state) => state.menu.menuItems);
  const categoryData = menuItems[name] || [];

  return (
    <div className="bg-gray-800 flex flex-col justify-center items-center p-4">
      <Link to="/">
        <img
          className="w-44 bg-white/10 rounded-full hover:bg-white/5"
          src="/pic/logo.png"
          alt="Logo"
        />
      </Link>

      <div>
        <h1 className="text-white text-3xl mt-10">{name}</h1>
      </div>
      <div className="pb-20 mt-10 grid grid-cols-3 gap-y-14 gap-x-52">
        {categoryData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center gap-2 border-b border-gray-500 pb-6 w-full group relative transition-all duration-500 hover:delay-500 hover:pb-20"
          >
            <img
              src={item.image}
              className="w-36 h-36 object-cover bg-gray-500 rounded-full p-2 transition-transform duration-300 hover:bg-gray-600 group-hover:scale-110"
            />
            <h2 className="text-white text-xl group-hover:scale-105 transition-all duration-300 cursor-pointer">
              {item.name}
            </h2>
            <div className="absolute bottom-4 p-2 text-right right-0 w-full text-white text-sm rounded-xl group-hover:delay-700 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all group-hover:translate-y-0 duration-300">
              {item.description || "توضیحات در دسترس نیست"}
            </div>
            <p className="text-white text-lg mt-2">
              قیمت: {item.price.toLocaleString()} تومان
            </p>
          </div>
        ))}
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Category;
