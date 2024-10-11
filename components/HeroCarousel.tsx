"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages=[
    {imgUrl: '/assets/images/hero-1.svg',alt:'smartwatch'},
    {imgUrl: '/assets/images/hero-2.svg',alt:'bag'},
    {imgUrl: '/assets/images/hero-3.svg',alt:'lamp'},
    {imgUrl: '/assets/images/hero-4.svg',alt:'air fryer'},
    {imgUrl: '/assets/images/hero-5.svg',alt:'chair'},

]

const HeroCarousel = () => {
  return (
    <div style={{ width: '500px', height: '500px', position: 'relative' }}>
            <Carousel className='pt-0 mt-0'
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
            >
                {heroImages.map((image)=>(
                    <Image 
                    src={image.imgUrl}
                    alt={image.alt} 
                    width={300}
                    height={300}
                    className='object-contain'
                    key={image.alt}
                    />
                ))}
            </Carousel>   
            <Image 
            src="/assets/icons/hand-drawn-arrow.svg"
            alt='arrow'
            width={175}
            height={175}
            className='max-xl:hidden absolute
             -bottom-8 mt-4 z-1'
        />           
    </div>
  )
}

export default HeroCarousel
