import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import "react-id-swiper/src/styles/css/swiper.css";
import "./Index.css";
import one from "../../../images/1.jpg";
import two from "../../../images/2.jpg";
import three from "../../../images/3.jpg";
import four from "../../../images/4.jpg";
import five from "../../../images/5.jpg";
    
export default class NestedSwipers extends Component {
      render() {
        const HorizontalSwiperParams = {
          spaceBetween: 30,
          speed:650,
          centeredSlides: true,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination.swiper-pagination-h',
            type: 'bullets',
            clickable: true
          },
          containerClass:'swiper-container-full'
        };
    
        return (
            <Swiper {...HorizontalSwiperParams} >
            <div><img src={one} alt='pag1' className='image-item'/></div>
            <div><img src={two} alt='pag2' className='image-item'/></div>
            <div><img src={three} alt='pa3' className='image-item'/></div>
            <div><img src={four} alt='pag4' className='image-item'/></div>
            <div><img src={five} alt='pag5' className='image-item'/></div>
          </Swiper>
        );
      }
    }