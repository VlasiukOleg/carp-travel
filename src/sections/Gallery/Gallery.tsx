import React from 'react';
import Image from 'next/image';

import Section from '@/components/UiKit/Section/Section';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/UiKit/SectionTitle/SectionTitle';
import GalleryImageList from '@/components/Modules/GalleryImageList/GalleryImageList';

import gallery from '../../data/gallery.json';
import gallery1 from '../../../public/image/gallery/gallery1.jpg';
import gallery2 from '../../../public/image/gallery/gallery2.jpg';
import gallery3 from '../../../public/image/gallery/gallery3.jpg';

import styles from './Gallery.module.css';

export interface GalleryProps {}

export default function Gallery({}: GalleryProps) {
  return (
    <div className={styles.gallery}>
      <Section>
        <Container>
          <SectionTitle>
            <span className="font-thin">{gallery.title}</span>{' '}
            {gallery.highlightedTitle}
          </SectionTitle>

          <GalleryImageList />
        </Container>
      </Section>
    </div>
  );
}
