import { useState } from "react";
import orderCoverimg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categorys =['salad','pizza','soup','dessert','drinks']
  const {category}=useParams();
  const initialIndex =categorys.indexOf(category);
    const [tabIndex,setTabindex]= useState(initialIndex);
    const [menu]=useMenu();
    console.log(category);
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');
  return (
    <div>
      <Helmet>
              <title>Mengo | Order Food</title>
            </Helmet>
      <Cover img={orderCoverimg} title="order foot"></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
        <OrderTab items={salad} ></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={pizza} ></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup} ></OrderTab>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-10">
          {
            dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-10">
          {
            drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
