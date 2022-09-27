import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import mobile from '../../Data/mobile.png'
import mobile1 from '../../Data/mobile1.png'
import mobile12 from '../../Data/mobile2.png'
import LeftButton from './LeftButton'
import RightButton from './RightButton'
const ProductGallery = () => {
  const images = [
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile1}`,
    },
    {
      original: `${mobile12}`,
    },
  ]
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2"
    >
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showFullscreenButton={false}
        isLTR={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton} 
      />
    </div>
  )
}

export default ProductGallery
