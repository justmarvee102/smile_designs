import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { motion } from 'framer-motion';

import { images } from '../constants';

function ImageSliders({
  children: slide = [],
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slide.length - 1 : curr - 1));
  const next = useCallback(
    () => setCurr((curr) => (curr === slide.length - 1 ? 0 : curr + 1)),
    [slide.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const items = [
    {
      title: 'Typography 🖋️',
      description: [
        'For typography, I selected clean yet playful fonts that ensure readability while adding a touch of fun. The combination of modern sans-serifs, comic fonts and a whimsical script font perfectly embodies the brand’s friendly and approachable vibe. 👯‍♂️ ',
      ],
    },
    {
      title: 'Project Duration',
      description: [
        'From the initial concept discussions to the final designs, the project spanned over a delightful 2 weeks months, filled with creativity and collaboration. 📅 ',
      ],
    },

    {
      title: 'Role and Responsibility',
      description: ['Graphic Designer'],
    },
  ];

  const items2 = [
    {
      title: 'Inspiration',
      title2: 'Where Did The Idea Come From 🤫 ',
      description: [
        'Online resources and also resources from my client who stated blatantly that she loved pink.',
      ],
    },
    {
      title: 'Challenges & Solutions',
      description: [
        ' Did not have serious challenges because I got a lot of feedback from the client, the communication between us was very strong also the understanding 😃 ',
      ],
    },

    {
      title: 'Color Palette',
      description: [
        "The owner of the business wanted bright colors which included pink, in her words, 'Use any bright colors you think would fit, but in anything you do make sure I have pink in there,🥰' and I just laughed and said okay. Therefore, to mirror the lively and playful spirit of Scrunchies By Smile and it's owner, I chose a color palette bursting with vibrant and cheerful hues. Think sunny yellows, soft pinks, and fresh greens - colors that evoke joy and creativity as the client wanted.👉 ",
      ],
    },
  ];

  const items3 = [
    {
      title: 'Project Scope',
      title2: 'Logo Designs',
      description: [
        'I designed set of new logos that captures the essence of the brand. The logos incorporate elegant elements and a color palette that evokes fun all over.',
      ],
    },
    {
      title: 'Project Scope',
      title2: 'Packaging Design & Social Media Graphics',
      description: [
        'I created eye-catching and vibrant packaging for scrunchies and clothing items, designed to make each purchase feel like a special gift, I also flung in engaging and colorful social media graphics to help the brand connect with its audience and showcase new products..',
      ],
    },
    {
      title: 'Project Scope',
      title2: 'Marketing Collateral & Mockup Designs',
      description: [
        "I also designed flyers, posters, and banners to attract attention and communicate the brand's fun and refreshing nature whilst adding in lively and realistic mockup designs showcasing the product in various settings, adding a touch of whimsy and professionalism to the brand presentation.",
      ],
    },
  ];

  const items4 = [
    {
      title: 'Result',
      title2: 'The Smile Effect',
      description: [
        'The end result? Well the end result was pretty cool. I was pretty surprised myself because this was the first graphic project I ever worked on for a client. Working with Scrunchies By Smile was a joyous experience, and I’m thrilled with how the graphics turned out. It was a wonderful journey into a world of stitches and smiles, creating visuals that tell the story of a brand that sews love into every piece. The graphic materials are sure to make anyone smile 😍 ',
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 sm:p-14 lg:p-14  min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl w-full rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 sm:mt-8 lg:mt-10 mt-20">
          <div className="relative w-full lg:w-3/6 overflow-hidden">
            <motion.div
              className=" flex transition-transform ease-out duration-500 h-full"
              style={{ transform: `translateX(-${curr * 100}%)` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {slide.map((child, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center">
                    {child}
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prev}
                className="p-2 rounded-full shadow  bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-white hover:dark:bg-gray-600"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full shadow  bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-white hover:dark:bg-gray-600"
              >
                <ChevronRight size={22} />
              </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
              <div className="flex items-center justify-center space-x-1">
                {slide.map((_, i) => (
                  <div
                    key={i}
                    className={`transition-all w-2 h-2 rounded-full ${
                      curr === i
                        ? 'bg-black p-1 dark:bg-black'
                        : 'bg-black dark:bg-black bg-opacity-30 dark:bg-opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-3/6 p-6 sm:w-2/2">
            <div className="bold-text mb-3 dark:text-gray-200">
              Crafting the Brand Identity for Scrunchies By Smile 🌟.
            </div>
            <p className="s-text mb-4">
              Scrunchies By Smile, a delightful local brand owned by a talented
              tailoress, approached me to create a vibrant and cohesive brand
              identity for her sewing business. She specializes in the sewing
              and selling of handmade clothes and scrunchies, the brand needed a
              look that reflected the joy, creativity, and quality of her craft.
              🎨✂️
            </p>
            <div className="flex flex-col mb-3">
              <span className="font-semibold dark:text-gray-200">
                Organization Name:
              </span>
              <span className="s-text">Scrunchies By Smile</span>
            </div>
            <div className="font-semibold mb-1 dark:text-gray-200">
              Tools Used:
            </div>
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex flex-col items-center">
                <img src={images.canva} alt="Canva" className="w-7 h-7 mt-1" />
                <span className="s-text">Canva</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={images.photoshop}
                  alt="Photoshop"
                  className="w-7 h-7 mt-1 rounded"
                />
                <span className="s-text">Photoshop</span>
              </div>
            </div>
            <div className="flex-col flex mb-4">
              <div className="font-semibold dark:text-gray-200">
                Color Palette 🌈:
              </div>
              <h2 className="s-text mb-2">
                Think sunny yellows, cheerful pinks, and fresh greens colors.
              </h2>

              <div className="flex-row flex mb-1">
                <img
                  src={images.shien}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />
                <div className="colors">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2 dark:hover:bg-gray-800"></button>
                </div>
              </div>

              <div className="flex-row flex ">
                <img
                  src={images.scrunchies}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />
                <div className="colors2">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2 dark:hover:bg-gray-800"></button>
                </div>
              </div>

              <div className="flex-row flex mt-1">
                <img
                  src={images.scrunchy}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />

                <div className="colors3">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2 dark:hover:bg-gray-800"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2 dark:hover:bg-gray-800"></button>
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className="font-semibold mb-2 dark:text-gray-200">
                Project Link:
              </div>
              <a
                href="blank"
                className="text-blue-500 dark:text-blue-300 dark:hover:text-blue-100 underline"
              >
                *Check out a full PDF of the designs*
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className="font-semibold text-center dark:text-gray-200">
        Other Important Info:
      </h1>
      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center text-black dark:text-white">
              {item.title}
            </div>
            {item.description.map((desc, i) => (
              <h2
                key={i}
                className="h-text text-center text-black dark:text-white"
              >
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items2.map((item2, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center text-black dark:text-white">
              {item2.title}
            </div>
            {item2.description.map((desc, i) => (
              <h2
                key={i}
                className="h-text text-center text-black dark:text-white"
              >
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items3.map((item3, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center text-black dark:text-white">
              {item3.title}
            </div>
            {item3.description.map((desc, i) => (
              <h2
                key={i}
                className="h-text text-center text-black dark:text-white"
              >
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items4.map((item4, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center text-black dark:text-white">
              {item4.title}
            </div>
            {item4.description.map((desc, i) => (
              <h2
                key={i}
                className="h-text text-center text-black dark:text-white"
              >
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default ImageSliders;
