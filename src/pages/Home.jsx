import React from 'react'
import Hero from '../components/home/Hero'
import Service from '../components/home/Service'
import Product from '../components/home/Product'
import AllProducts from '../components/home/AllProducts'
import MidBanner from '../components/home/MidBanner'
import Info from '../components/home/Info'
import FoodStore from '../components/food-store/foodStore'
import Footer from '../components/footer/footer'



const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <Service></Service>
        <Product></Product>
        <AllProducts></AllProducts>
        <Info></Info>
        <MidBanner></MidBanner>
        <FoodStore></FoodStore>
        <Footer></Footer>
    </div>
  )
}

export default Home