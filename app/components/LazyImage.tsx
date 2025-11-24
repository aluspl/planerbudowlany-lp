import React from 'react';
import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'placeholder'> & {
  blurDataURL?: string;
};

const LazyImage: React.FC<Props> = ({ blurDataURL, alt, ...rest }) => {
  return (
    <Image
      {...rest}
      alt={alt as string}
      placeholder={blurDataURL ? 'blur' : undefined}
      blurDataURL={blurDataURL}
      loading="lazy"
      style={{
        width: '100%',
        height: 'auto',
        objectFit: rest.style?.objectFit || 'cover',
      }}
    />
  );
};

export default LazyImage;
