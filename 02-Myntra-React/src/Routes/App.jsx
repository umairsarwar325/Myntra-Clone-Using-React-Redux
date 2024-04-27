import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import FetchItem from "../Components/FetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";

function App() {
  let { fetchDone,currentlyFetching } = useSelector((store) => store.fetchStatus);
  return (
    <>
      <FetchItem />
      <Header />
      {currentlyFetching ? <LoadingSpinner/> :  <Outlet />}
      <Footer />
    </>
  );
}

export default App;
