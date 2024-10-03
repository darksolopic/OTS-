import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import bg from "../assets/Vector 2.svg"
import bg1 from "../assets/Vector 8.svg"
import bg2 from "../assets/Vector 5.svg"

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img  className='w-full h-[762px]' src={bg} onDragStart={handleDragStart} role="presentation" alt='logo'/>,
  <img className='w-full h-full' src={bg1} onDragStart={handleDragStart} role="presentation" alt='logo'/>,
  <img className='w-full h-[762px]' src={bg2} onDragStart={handleDragStart} role="presentation" alt='logo'/>,
];

const Gallery = () => {
  return (
    <AliceCarousel  autoPlay={true} infinite autoPlayInterval={5000} autoHeight disableButtonsControls={true} disableDotsControls={true} items={items} />
  );
}
export default Gallery;