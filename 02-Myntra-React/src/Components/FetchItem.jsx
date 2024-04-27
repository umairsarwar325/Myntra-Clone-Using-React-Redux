import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../Store/fetchStatusSlice";
import { itemsActions } from "../Store/itemsSlice";

const FetchItem = () => {
  const { fetchDone, currentlyFetching } = useSelector(
    (store) => store.fetchStatus
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchDone) {
      return;
    }
    let controller = new AbortController();
    let signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:3000/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinsished());

        dispatch(itemsActions.addInitailItems(items));
      });
    return () => {
      controller.abort();
    };
  }, []);
  return <div></div>;
};

export default FetchItem;
