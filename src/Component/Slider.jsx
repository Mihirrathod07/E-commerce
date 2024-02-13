import Carousel from 'react-bootstrap/Carousel';
import './style.css'
import React from 'react';
function DarkVariantExample() {
  return (
    <div class="imgslider">
    <Carousel data-bs-theme="dark">
      <Carousel.Item className=''>  
        <img
          className="d-block w-100"
          src="https://c1.wallpaperflare.com/preview/573/909/315/store-clothes-clothing-line.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>"Wear the Trend" "Fashion that Dares" "Make Heads Turn" "Dress to Impress"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>
          Capture the essence of your brand: Your slogan should reflect the overall image and style of your fashion business.
        
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2489629.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
            
          <h5>Third slide label</h5>
          <p>
          Don't be slow! Our prices are low.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default DarkVariantExample;
