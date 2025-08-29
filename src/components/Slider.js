import React from 'react'
import { Carousel } from 'react-bootstrap'

import vivo from "../images/vivo.png"
import oppo from "../images/oppo.jpg"
import samsung from "../images/samsung.jpg"
import tecno from "../images/tecno.jpg"

import './Slider.css'


const SimpleSlider = () => {
  return (
    <div className='slider-container'>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={vivo}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oppo}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={samsung}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tecno}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      
    </div>
  )
}

export default SimpleSlider