import React from "react";
import Navbar from "../../conponents/Navbar";
import Hero from "../../conponents/Hero";
import Categories from"../../conponents/Categories";
import Collections from "./Collections";
                                                      
                                  
import "../../App.css";
import Footer from "../../conponents/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <Categories/>
        <Collections/>   
        <Footer/> 
         
        {/* Your home page design */}
      </main>
    </>
  );
};

export default Home;