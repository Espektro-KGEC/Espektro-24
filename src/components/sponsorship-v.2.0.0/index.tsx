import OutlinedHeading from '@/components/outlined-heading';
import React, { useEffect, useRef } from 'react';
import { SPONSORS } from './sponsor-data';
import styles from './styles.module.scss';
function SponsorSection(): React.JSX.Element {
  const forwardScrollWrapperRef = useRef<HTMLDivElement>(null);
  const forwardListRef = useRef<HTMLUListElement>(null);
  const backwardListRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (!forwardListRef.current || !backwardListRef.current) return;

    // inserting cloned childnodes to the forward list
    const clonedForwardList = forwardListRef.current.cloneNode(
      true
    ) as HTMLUListElement;
    const isForwardCloned = forwardListRef.current.getAttribute('data-cloned');

    if (clonedForwardList.childNodes.length === 0) return;
    const forwardChildNodes = clonedForwardList.childNodes;
    if (isForwardCloned === 'false') {
      forwardListRef.current.append(...forwardChildNodes);
      forwardListRef.current.setAttribute('data-cloned', 'true');
    }

    // inserting cloned childnodes to the backward list
    const clonedBackwardList = backwardListRef.current.cloneNode(
      true
    ) as HTMLUListElement;
    const isBackwardCloned =
      backwardListRef.current.getAttribute('data-cloned');
    if (clonedBackwardList.childNodes.length === 0) return;
    const backwardChildNodes = clonedBackwardList.childNodes;
    console.log(isBackwardCloned);
    if (isBackwardCloned === 'false') {
      console.log('cloning backward');
      backwardListRef.current.append(...backwardChildNodes);
      backwardListRef.current.setAttribute('data-cloned', 'true');
    }
  }, []);

  useEffect(() => {
    if (!forwardScrollWrapperRef.current) return;
    forwardScrollWrapperRef.current.scrollLeft =
      forwardScrollWrapperRef.current.scrollWidth -
      forwardScrollWrapperRef.current.clientWidth;
  }, [forwardScrollWrapperRef.current]);
  return (
    <section id="espektro-past-sponsors" className={styles.sponsors__section}>
      <div className='fourth-section'></div>
      <div className={styles.wrapper}>
        <div className={styles.sponsor__header}>
          <OutlinedHeading label="Our Sponsors" />
          <p>
            We appreciate your efforts and generosity in supporting our events
          </p>
        </div>
        <div className={styles.lists__container}>
          <div scroll-direction="left" className={styles.li__wrapper}>
            <ul
              ref={forwardListRef}
              data-direction="left"
              data-cloned="false"
              className={styles.li__container}
            >
              {SPONSORS.slice(0, ~~(SPONSORS.length / 2) - 1).map(
                (sponsor, _) => (
                  <SponsorCard key={sponsor.id} sponsor={sponsor} />
                )
              )}
            </ul>
          </div>
          <div
            ref={forwardScrollWrapperRef}
            scroll-direction="right"
            className={styles.li__wrapper}
          >
            <ul
              ref={backwardListRef}
              data-direction="right"
              data-cloned="false"
              className={styles.li__container}
            >
              {SPONSORS.slice(~~SPONSORS.length / 2, SPONSORS.length - 1).map(
                (sponsor, _) => (
                  <SponsorCard key={sponsor.id} sponsor={sponsor} />
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SponsorCard({
  sponsor,
}: {
  sponsor: {
    id: number;
    sponsor: string;
    url: string;
  };
}) {
  return (
    <li className={styles.sponsers__item__wrapper} key={sponsor.id}>
      <div className={styles.sponsers__item}>
        <div className={styles.sponsor__image__container}>
          <img src={sponsor.url} alt={sponsor.sponsor} />
        </div>
        <div className={styles.sponsor__title__container}>
          <p>{sponsor.sponsor}</p>
        </div>
      </div>
    </li>
  );
}
export default SponsorSection;
