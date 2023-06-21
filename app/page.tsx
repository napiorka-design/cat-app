import Image from 'next/image';
import cat1 from '../public/images/cat1.gif';
import cat2 from '../public/images/cat2.gif';
import cat3 from '../public/images/cat3.gif';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1 className='mb-4 text-3xl'>The Cat</h1>

        <div className='relative w-32 h-32 mb-4 overflow-hidden rounded-full ring-2 ring-pink-200 ring-offset-4'>
          <Image
            src={cat1}
            alt='Picture of cat1'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
        <div className='relative w-32 h-32 mb-4 overflow-hidden rounded-full ring-2 ring-pink-200 ring-offset-4'>
          <Image
            src={cat2}
            alt='Picture of cat2'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
        <div className='relative w-32 h-32 mb-4 overflow-hidden rounded-full ring-2 ring-pink-200 ring-offset-4'>
          <Image
            src={cat3}
            alt='Picture of cat3'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
      </div>
    </>
  );
}


