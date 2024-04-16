import Category from "./Category/Category";
import Enhance from "./Enhance/Enhance";
import Hero from "./Hero";
import NewArrival from "./NewArrival/NewArrival";
import OurCom from "./OurCom/OurCom";
import OurProduct from "./OurProduct/OurProduct";
import ThisMonth from "./ThisMonth/ThisMonth";
import TodayOffers from "./Today/TodayOffers";

export default function Home(){
    return(
        <div>
            <Hero/>
            <TodayOffers/>
            <Category/>
            <ThisMonth/>
            <Enhance/>
            <OurProduct/>
            <NewArrival/>
            <OurCom/>
        </div>
    )
}