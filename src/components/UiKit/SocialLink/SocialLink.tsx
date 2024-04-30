import * as React from 'react';

export interface SocialLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function SocialLink({ children, href }: SocialLinkProps) {
  return (
    <a
      className="text-sm leading-6 no-underline underline-offset-1 hover:underline md:text-base xl:text-lg"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
