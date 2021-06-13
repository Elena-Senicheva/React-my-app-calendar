import React, { useState } from 'react'
import { SliderData } from '../SliderData'
import style from './ImageSlider.module.sass'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  // const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  const moveDot = index => {
    setCurrent(index)
  }

  return (
    <section className={style.slider}>
      <FaArrowAltCircleLeft className={style.leftarrow} onClick={prevSlide} />
      <FaArrowAltCircleRight className={style.rightarrow} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? style.active : style.slide}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='image' className={style.image} />
            )}
          </div>
        )
      })}
      <div className={style.dots}>
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={current === index + 1 ? style.activedot : style.dot}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default ImageSlider
