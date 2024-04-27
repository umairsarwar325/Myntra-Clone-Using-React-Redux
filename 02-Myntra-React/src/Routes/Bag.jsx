import React from "react";
import BagSummery from "../Components/BagSummery";
import BagItem from "../Components/BagItem";
import { useSelector } from "react-redux";

const bag = () => {
  const items = useSelector((store) => store.items);
  const bag = useSelector((store) => store.bag);

  const finalItems = items.filter((item) => {
    // return bag.includes(item.id) ;
    return bag.indexOf(item.id) >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => {
              return <BagItem key={item.id} item={item} />;
            })}
          </div>
          <div className="bag-summary">
            <BagSummery bagItems={finalItems} />
          </div>
        </div>
      </main>
    </>
  );
};

export default bag;
