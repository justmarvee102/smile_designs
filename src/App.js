import React from 'react';
import { Navbar } from './components';
import ImageSliders from './components/ImageSliders';
import { images } from './constants';
import './App.scss';

const slide = [
  images.scrunchy,
  images.scrunchie,
  images.scrunchies,
  images.fashion,
  images.smile,
  images.fash,
  images.smillie,
  images.smil,
  images.slime,
  images.shien,
  images.fas,
  images.lie,
  images.comply,
  images.style,
];

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <ImageSliders autoSlide autoSlideInterval={5000}>
        {slide.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full"
          />
        ))}
      </ImageSliders>
    </div>
  );
}
