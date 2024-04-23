import React from 'react';

import Section from '@/components/ui-kit/section/Section';
import Container from '@/components/container/Container';
import Button from '@/components/ui-kit/button/Button';

import hero from '../../data/hero.json';

export interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <Section>
      <Container>
        <div className="flex justify-end pb-6">
          <p className="text-[37px] uppercase  font-thin max-w-[113px] leading-[0.4]">
            <span className="font-medium">{hero.labelNumber}</span>
            {hero.labelTitle}
            <span className="inline-block text-xs font-light tracking-[0.75em]">
              {hero.labelSubtitle}
            </span>
          </p>
        </div>

        <h1 className="text-[40px] tracking-tighter leading-[3.5rem] font-thin uppercase pb-6">
          <span className="font-medium block">{hero.title}</span>
          {hero.subtitle}
        </h1>
        <p className="text-[10px] font-extralight max-w-[157px] pb-6">
          {hero.location}
        </p>
        <p className="text-sm text-justify font-extralight pb-6">
          {hero.description}
        </p>
        <Button>Join Now</Button>
      </Container>
    </Section>
  );
}

// w-full text-center bg-white bg-opacity-10
