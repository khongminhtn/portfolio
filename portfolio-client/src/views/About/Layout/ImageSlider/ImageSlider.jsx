import React from 'react'

import sass from './ImageSlider.module.scss'

import img1 from '../../../../assets/architecture/img1.png'
import img2 from '../../../../assets/architecture/img2.png'
import img3 from '../../../../assets/architecture/img3.png'
import img4 from '../../../../assets/architecture/img4.png'

const ImageSlider = () => {
  return (
    <section
    className={sass.ImageSlider}>
      <img src={img1} alt='architectural sketches'/>
      <img src={img2} alt='architectural sketches'/>
      <img src={img3} alt='architectural sketches'/>
      <img src={img4} alt='architectural sketches'/>      
    </section>
  )
}

export default ImageSlider