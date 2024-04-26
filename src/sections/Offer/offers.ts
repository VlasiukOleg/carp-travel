import { StaticImageData } from 'next/image';

import offer1 from '../../../public/image/offer/offer1.jpg';
import offer2 from '../../../public/image/offer/offer2.jpg';
import offer3 from '../../../public/image/offer/offer3.jpg';
import offer4 from '../../../public/image/offer/offer4.jpg';
import offer5 from '../../../public/image/offer/offer5.jpg';

export interface OfferSlide {
  id: number;
  image: StaticImageData;
  actionText: string;
  title: string;
  subtitle: string;
  description: string;
}

export const offerSlides: OfferSlide[] = [
  {
    id: 1,
    image: offer1,
    actionText: 'Feel the adrenaline rush',
    title: 'ATVs Traveling',
    subtitle: '',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
  {
    id: 2,
    image: offer2,
    actionText: 'Destroy your limitations',
    title: 'Rock climbing',
    subtitle: '',
    description:
      'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
  },
  {
    id: 3,
    image: offer3,
    actionText: 'Get Inspired',
    title: 'Hot air',
    subtitle: 'ballooning',
    description:
      'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
  },
  {
    id: 4,
    image: offer4,
    actionText: 'Overcome your fears',
    title: 'Skydiving',
    subtitle: '',
    description:
      'Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a birds eye view forever.',
  },
  {
    id: 5,
    image: offer5,
    actionText: 'Trust the flow',
    title: 'Rafting',
    subtitle: '',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
];
