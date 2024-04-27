import React from "react";
import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";
// import {itemsSlice} from "../Store/itemsSlice";

const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => {
            return <HomeItem key={item.id} item={item} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
