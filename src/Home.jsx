import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import houseImage1 from "./homeImages/mansions_main_fin-1.jpg";
import sittingRoomImage from "./homeImages/sittingroom image.jpg";
import kitchenImage from "./homeImages/kitchen image.png";
import homeDesignImage from "./homeImages/home-design.jpg";
import logoImage from "./homeImages/Logo White.png";
import image from "./homeImages/Modern-style-study-room-with-recessed-wooden-bookshelves.jpg";
import imags from "./homeImages/images.jpg";


function Home() {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <img src={houseImage1} alt="House" style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: '-160px', left: '-130px', right: 0, padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}>
          <img src={logoImage} alt="Logo White" width="400px" />
          <nav style={{ padding:'0 15px', display: 'inlineblock' }}>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', left:'-90px', fontSize: '1.2rem' }}>
            <li style={{ margin: '0 20px' }}><a href="#" style={{ color: 'white' }}> Home </a></li>
            <li style={{ margin: '0 20px' }}><a href="#" style={{ color: 'white' }}> Listing </a></li>
            <li style={{ margin: '0 20px' }}><a href="#" style={{ color: 'white' }}> About </a></li>
            <li style={{ margin: '0 20px' }}><a href="#" style={{ color: 'white' }}> Contact </a></li>
          </ul>
       </nav>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', maxWidth: '600px' }}>
           <h1 style={{ textAlign: 'left', fontSize: '35px', fontWeight: 'bold', marginBottom: '10px', color: '#00bfff' }}><strong>Property Description.</strong></h1>
             <p style={{ textAlign: 'left', fontSize: '16px', marginBottom: '20px', color: 'black' }}>
             Welcome to Nyumbani Real Estate, where your dream home awaits. At Nyumbani, we are committed to providing exceptional real estate services tailored to your needs.
             </p>
            <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '10px', color: '#00bfff' }}>Great Neighborhood.</h2>
               <p style={{ fontSize: '16px', marginBottom: '15px', color: 'black' }}>At Nyumbani Real Estate, we believe that a "Great Neighborhood" is more than just a place to live—it's a place to thrive. Experience the difference of living in a community where every day brings new opportunities for growth, connection, and fulfillment. Welcome home to Nyumbani!</p>
           <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '10px', color: '#00bfff' }}>Family Friendly.</h2>
               <p style={{ fontSize: '16px', marginBottom: '15px', color: 'black' }}> In Nyumbani Real Estate, being family-friendly is more than just a label—it's a commitment to creating nurturing environments where families can thrive, grow, and create lasting memories together. Welcome to a place where every family feels at home. Welcome to Nyumbani!</p>
        </div>

        <div>
          <button style={{ 
            padding: '10px 20px', 
            fontSize: '1.1rem', 
            backgroundColor: '#00bfff', 
            color: 'black',
            border: 'none', 
            zIndex: 1000,
            borderRadius: '5px', 
            cursor: 'pointer',
            position: 'absolute',
            top: '103%',
            left: '1%', 
            transform: 'translateY(-50%)', 
          }}>View Details</button>
        </div>
      </div>
      <table style={{ float: 'right', width: '40%', marginRight: '0%', top: '900px', marginTop: '-395px' }}>
        <tbody>
          <tr>
            <td>
              <Carousel showArrows={true} showIndicators={false} showThumbs={false} autoPlay={true} interval={1000} style={{ width: '100%' }}>
                <div>
                  <img src={sittingRoomImage} alt="Sitting Room" style={{ width: '100%' }} />
                </div>
                <div>
                  <img src={kitchenImage} alt="Kitchen" style={{ width: '100%' }} />
                </div>
                <div>
                  <img src={image} alt="image" style={{ width: '100%' }} />
                </div>
                <div>
                  <img src={imags} alt="imags" style={{ width: '100%' }} />
                </div>
                <div>
                  <img src={homeDesignImage} alt="Home Design" style={{ width: '100%' }} />
                </div>
              </Carousel>
            </td>
          </tr>
        </tbody>
      </table>
</div> 
  );
}

export default Home;
