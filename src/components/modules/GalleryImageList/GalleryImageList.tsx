import React from 'react';
import Image from 'next/image';

import { galleryImages } from '../../../data/galleryImageList.js';

export interface GalleryImageListProps {}

export default function GalleryImageList({}: GalleryImageListProps) {
  return (
    <ul className="flex flex-col gap-6 mt-6 md:hidden">
      {galleryImages.map(({ image, alt }) => (
        <li key={alt}>
          <Image src={image} alt={alt} />
        </li>
      ))}
    </ul>
  );
}
