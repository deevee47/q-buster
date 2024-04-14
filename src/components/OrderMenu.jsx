import React from 'react'
import CafeCard from './sub/CafeCard';
import FoodCard from './sub/FoodCard';

const OrderMenu = ({ cafe }) => {
  console.log("The cafe:",cafe)
    if (cafe === 'Maggi Hotspot') {
      return (
        <div className='font-Poppins p-12'>
        <CafeCard name={"Maggi Hotspot Order Menu"} color={"text-primary-red"} gradient={"from-red-200 to-red-300"}>  
          <FoodCard name={"Maggi"} price={"45"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Butter Maggi"} price={"55"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Masala Maggi"} price={"50"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Garlic Maggi"} price={"60"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Peri Peri Maggi"} price={"55"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Oregano Maggi"} price={"65"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Milky Bar"} price={"20"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Kit Kat"} price={"30"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Sandwich"} price={"65"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
          <FoodCard name={"Truffle"} price={"70"}  buttonColor={"bg-primary-red"} image={"./assets/maggie.jpeg"}></FoodCard>
        </CafeCard>
      </div>
      )
    }
    else if (cafe === "Southern Stories") {
      return (
      <div className='font-Poppins p-12'>
      <CafeCard name={"Southern Stories Order Menu"} color={"text-primary-beige"} gradient={"from-orange-100 to-orange-50"}>  
      <FoodCard name={"Plain Dosa"} price={"80"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Malsal Dosa"} price={"90"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Rava Dosa"} price={"100"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Rava Masala Dosa"} price={"110"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Aloo Paratha"} price={"110"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Paneer Paratha"} price={"120"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Mixed Paratha"} price={"140"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Laccha Paratha"} price={"120"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Cold Drink"} price={"40"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      <FoodCard name={"Idli"} price={"60"} buttonColor={"bg-primary-beige"} image={"./assets/dosa.jpeg"}></FoodCard>
      </CafeCard>
      </div>)
    }

    else if (cafe === "Kathi & COP") {
      return (
      <div className='font-Poppins p-12'>
      <CafeCard name={"Kathi & COP Order Menu"} color={"text-primary-orange"} gradient={"from-orange-300 to-orange-200"}>  
      <FoodCard name={"Egg Roll"} price={"80"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Paneer Shawarma"} price={"95"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Paneer Tikka Roll"} price={"100"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Paneer Makhani Roll"} price={"110"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Paneer Bhurji Roll"} price={"100"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Paneer Schezwan Roll"} price={"110"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Paneer Egg Roll"} price={"100"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Noodles Roll"} price={"85"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Soya Chap Roll"} price={"85"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      <FoodCard name={"Creamy Soya Roll"} price={"100"} buttonColor={"bg-primary-orange"} image={"./assets/chole.png"}></FoodCard>
      </CafeCard>
      </div>)
    }

    else if (cafe === "Quench") {
      return(
      <div className='font-Poppins p-12'>  
      <CafeCard name={"Quench Order Menu"} color={"text-primary-green"} gradient={"from-green-300 to-green-200"}>  
      <FoodCard name={"Peri Peri Fries"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Plain Fries"} price={"50"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Aloo Burger"} price={"40"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Schezwan Burger"} price={"40"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Paneer Burger"} price={"50"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Veggie Burger"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Crispy Burger"} price={"70"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Crispy Paneer Burger"} price={"60"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Chocolate Shake"} price={"80"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      <FoodCard name={"Mango Shake"} price={"80"} buttonColor={"bg-primary-green"} image={"./assets/fries.png"}></FoodCard>
      </CafeCard>
      </div>
      )
    }
    
}

export default OrderMenu
