import { useEffect, useState } from 'react'
import Image from 'next/image'
import noImage from '@/app/assets/no-photo-available.png'

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const FallbackImage: React.FC<Props> = ({ 
  src, 
  alt, 
  width,
  height,
  className
  }) => {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      className={className}
      src={imgSrc || noImage}
      width={width}
      height={height}
      onError={() => {
        setImgSrc('/images/not-found.png')
      }}
      alt={alt}
    />
  )
}