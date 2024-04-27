import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../Store/bagSlice";

const HomeItem = ({ item }) => {
  const bag = useSelector(store=>store.bag)
  const dispatch = useDispatch();
  const handleAddToBag = (id) => {
    dispatch(bagActions.addToBag(id))
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        <button className={`${bag.includes(item.id) ? "btn-add-bag btn-rmove-bag": "btn-add-bag"}`} onClick={() => {handleAddToBag(item.id)}}>
          {bag.includes(item.id) ? "Remove": "Add to Bag"}
        </button>
      </div>
    </>
  );
};

export default HomeItem;
