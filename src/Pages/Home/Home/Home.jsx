import { Helmet } from "react-helmet-async";
import MenuItem from "../../Shared/MenuItem";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Popularmenu from "../PopularMenu/Popularmenu";
import Testimonials from "../Testimonials/Testimonials";
import { useLocation } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mengo | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Popularmenu></Popularmenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
