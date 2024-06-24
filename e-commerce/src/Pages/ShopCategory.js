import React from "react";
import "./CSS/ShopCategory.css";
// import ShopContextProvider, { ShopContext } from "../Context/Shopcontext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";
import all_products from "../Components/Assets/all_product";
export default function ShopCategory(props) {
  //   const { all_product } = useContext(ShopContextProvider);
  console.log(all_products);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span> Shpwong 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              ></Items>
            );
          } else return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}
