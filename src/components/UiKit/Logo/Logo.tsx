import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

export interface LogoProps {
  pathname: string;
  src: string;
  alt: string;
}

export default function Logo({ pathname, src, alt }: LogoProps) {
  return (
    <Link href={pathname}>
      <Image width={61} height={33} src={src} alt={alt} priority={true} />
    </Link>
  );
}
