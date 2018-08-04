import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import "react-id-swiper/src/styles/css/swiper.css";
import "./Index.css"
    
export default class NestedSwipers extends Component {
      render() {
        const HorizontalSwiperParams = {
          spaceBetween: 1000,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
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
            <div>轮播图 1</div>
            <div>轮播图 2</div>
            <div>轮播图 3 </div>
            <div>轮播图 4</div>
            <div>轮播图 5</div>
          </Swiper>
        );
      }
    }