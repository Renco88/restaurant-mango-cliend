import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Mengo | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
      {/* main cover */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      {/* offer menu item */}
     <MenuCategory items={offered}></MenuCategory>
     {/* desserd menu item */}
     <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
     {/* pizza menu item */}
     <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
     {/* Salads menu item */}
     <MenuCategory items={salad} title="salads" img={saladImg}></MenuCategory>
     {/* Soups menu item */}
     <MenuCategory items={soup} title="soups" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
