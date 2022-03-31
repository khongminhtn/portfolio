import React from 'react'
import useSetMedia from '../../../../hooks/useSetMedia'
import PropTypes from 'prop-types'
import styles from './Image.style.js'


const Image = ({alt, src}) => {
  const media = useSetMedia()
  return (
    <img
      style={styles.image(media, src)}
      alt={alt}
      src={src}/>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
}

export default Image