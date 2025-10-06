import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, src, alt }) => {
  return (
    <Link href={href} className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors">
      <Image src={src} alt={alt} width={18} height={18} />
    </Link>
  );
};

export default SocialIcon;