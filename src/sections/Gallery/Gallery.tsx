import React from 'react';

import Section from '@/components/UiKit/Section/Section';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/UiKit/SectionTitle/SectionTitle';
import GalleryImageList from '@/components/Modules/GalleryImageList/GalleryImageList';
import GallerySwiper from '@/components/Modules/GallerySwiper/GallerySwiper';

import gallery from '../../data/gallery.json';

import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <div className={styles.gallery} id="Gallery">
      <Section>
        <Container>
          <SectionTitle addStyle="mb-6 md:mb-16 xl:mb-6">
            <span className="font-thin">{gallery.title}</span>{' '}
            {gallery.highlightedTitle}
          </SectionTitle>
          <GallerySwiper />

          <GalleryImageList />
        </Container>
      </Section>
    </div>
  );
}
