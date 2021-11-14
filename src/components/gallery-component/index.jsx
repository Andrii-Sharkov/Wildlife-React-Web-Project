import React from 'react';
import { GallerySection, GalleryContent, GalleryColumn } from './galleryElements';
import { GalleryData } from './galleryData';

const Gallery = () => {
  return (
    <GallerySection>
      <GalleryContent>
        {GalleryData.map((image, index) => {
          return (
            <GalleryColumn key={index}>
              <img src={image.image} alt='animals'/>
            </GalleryColumn>
          )
        })}
      </GalleryContent>
    </GallerySection>
  )
}

export default Gallery;