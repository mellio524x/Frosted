import React from 'react';
import cakeImage from './images/Logo.png'; // Replace with the actual path to your image

function Home() {
  return (
    <section className="home-container">
      <div className="image-container">
        <img src={cakeImage} alt="Delicious cake from Freshly Frosted" />
      </div>
      <div className="text-container">
        <h2>About Us</h2>
        <p>
        Welcome to Freshly Frosted, where every cake is crafted with love and precision.
         We specialize in custom cakes for every occasion.
        </p>

        <p>At Freshly Frosted, baking isn’t just a business – it’s a passion.
           With a lifelong love for creating beautifully decorated and delicious cakes,
            we take pride in transforming simple ingredients into something truly special.
             From classic flavors to unique, taste-bud-tempting combinations, we delight in 
             pushing the boundaries of flavor and design to bring our customers’ visions to life.
             </p>

             <p>Whether it’s a birthday, wedding, or any special gathering, our cakes are designed 
              to bring joy and sweetness to your table, celebrating the love and creativity that 
              goes into each layer. Join us in the journey of delightful flavors and craftsmanship 
              – one cake at a time.</p>
      </div>
    </section>
  );
}

export default Home;
