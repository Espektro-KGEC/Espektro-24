import styles from './style.module.scss';

import OutlinedHeading from '@/components/outlined-heading';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ARTIST_DATA } from './artist_data';

gsap.registerPlugin(ScrollTrigger);

const ArtistSection = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const galleryContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const imgitems = Array.from(
      galleryContainerRef.current?.children || []
    ).flatMap((item) => Array.from(item.querySelectorAll('img')));

    imgitems.forEach((item) => {
      item.onmouseenter = (e) => {
        gsap.to(e.target, {
          scale: 1.1,
          ease: 'power4.out',
        });
      };
      item.onmouseleave = (e) => {
        gsap.to(e.target, {
          scale: 1,
          ease: 'power4.out',
        });
      };
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContentRef.current || undefined,
        start: 'top 70%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
        // markers: true,
      },
    });

    tl.from(imgitems, {
      opacity: 0,
      x: '-100%',
      ease: 'power2.out',
    });
  });

  return (
    <div
      className={styles.main_container}
      ref={mainContentRef}
      id="espektro-past-artists"
    >
      <OutlinedHeading label="Artists" />

      <div className={styles.main_gallery} ref={galleryContainerRef}>
        {ARTIST_DATA.map((item, index) => {
          return <ArtistCard key={index} id={item.id} imageUrl={item.url} />;
        })}
      </div>
    </div>
  );
};
function ArtistCard({ id, imageUrl }: { id: string; imageUrl: string }) {
  return (
    <div aria-label={id} key={id} className="">
      <img src={imageUrl} alt="" />
    </div>
  );
}
export default ArtistSection;
