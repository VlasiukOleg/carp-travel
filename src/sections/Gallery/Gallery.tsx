import React from 'react';

import Section from '../../components/UiKit/Section/Section';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/UiKit/SectionTitle/SectionTitle';
import GalleryImageList from '../../components/Modules/GalleryImageList/GalleryImageList';
import GallerySwiper from '../../components/Modules/GallerySwiper/GallerySwiper';

import gallery from '../../data/gallery.json';

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
          <GallerySwiper />

          <GalleryImageList />
        </Container>
      </Section>
    </div>
  );
}
