import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/pizza-bg.jpg'



const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Mengo | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
     
    </div>
  );
};

export default Menu;
