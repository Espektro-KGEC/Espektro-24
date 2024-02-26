import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

import Logo from '@/assets/images/espektro-logo-fill.svg';
import { useGSAP } from '@gsap/react';

import styles from './styles.module.scss';

gsap.registerPlugin(Observer);
const links = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
  {
    id: 2,
    label: 'About',
    href: '/about',
  },
  {
    id: 3,
    label: 'Statistics',
    href: '#',
  },
  {
    id: 5,
    label: 'Events',
    href: '/events',
  },
  {
    id: 6,
    label: 'Artists',
    href: '/artists',
  },
  {
    id: 8,
    label: 'Sponsors',
    href: '#',
  },
  {
    id: 7,
    label: 'Merchandise',
    href: '#',
  },
  {
    id: 4,
    label: 'Clubs',
    href: '#',
  },
];
function Navigation() {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const mobileNavContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mobileNavContainerRef.current) return;
    const handler = (e: TouchEvent | WheelEvent) => e.preventDefault();
    mobileNavContainerRef.current.addEventListener('wheel', handler, {
      passive: false,
    });
    mobileNavContainerRef.current.addEventListener('touchmove', handler, {
      passive: false,
    });

    return () => {
      mobileNavContainerRef.current?.removeEventListener('wheel', handler);
      mobileNavContainerRef.current?.removeEventListener('touchmove', handler);
    };
  }, []);
  const HeroSection = document.querySelector(
    '[data-id="espektro-hero-section"]'
  );
  useEffect(() => {
    if (!HeroSection) return;
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          //! if hero is intersecting with the viewport then
          //! these css rules will be applied, overidding the rules mentioned in .navigation class
          if (entry.isIntersecting) {
            gsap.to('#navbar', {
              css: {
                background: 'none',
                boxShadow: 'none',
                backdropFilter: 'blur(3px)',
              },
              duration: 0.2,
              ease: 'power1.inOut',
            });
          }
          //! if hero is not intersecting, then two cased arise
          //! one -> is mobile nav visbile or not
          else {
            //! if mobile nav is visible the apply these css rules
            if (toggleMobileNav) {
              gsap.to('#navbar', {
                css: {
                  background: 'none',
                  boxShadow: 'none',
                  backdropFilter: 'blur(0px)',
                },
                duration: 0,
                ease: 'power3.inOut',
              });
            }
            //! if mobile nav is not visible the apply these css rules
            else {
              gsap.to('#navbar', {
                css: {
                  background: 'rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(6.6px)',
                },
                duration: 0,
                ease: 'power3.inOut',
              });
            }
          }
        });
      },
      {
        rootMargin: '-70px 0px 0px 0px',
      }
    );
    navObserver.observe(HeroSection);
    //! re-run for state change -> toggleMobileNav
  }, [HeroSection, toggleMobileNav]);

  Observer.create({
    type: 'wheel,touch,scroll', // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
    onUp: () => {
      gsap.to('#navbar', {
        y: 0,
        duration: 0,
        ease: 'power1.inOut',
      });
    },
    onDown: () => {
      gsap.to('#navbar', {
        y: -80,
        duration: 0,
        ease: 'power1.inOut',
      });
    },
  });

  const { contextSafe } = useGSAP({
    dependencies: [toggleMobileNav],
  });

  const handleToggleOn = contextSafe(() => {
    const visibleTL = gsap
      .timeline()
      .to('.mobile-navigation-wrapper', {
        css: {
          visibility: 'visible',
          pointerEvents: 'all',
        },
        duration: 0,
      })
      .from('.mobile-navigation-container', {
        '--window-width': '0%',
        ease: 'power1.inOut',
        duration: 0.3,
      })

      .fromTo(
        '.link',
        {
          x: 50,
          opacity: 0,
          stagger: 0.08,
          duration: 0.3,
          delay: -0.5,
          ease: 'power1.inOut',
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.3,
          delay: -0.5,
          ease: 'power1.inOut',
        }
      )
      .fromTo(
        '.mobile-navigation-heading',
        {
          opacity: 0,
          x: 50,
          duration: 0.25,
          delay: -0.2,
          ease: 'power1.inOut',
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.25,
          delay: -0.2,
          ease: 'power1.inOut',
        }
      );
    visibleTL.play();
  });
  const handleToggleOff = contextSafe(() => {
    const hiddenTL = gsap
      .timeline()
      .to('.link', {
        opacity: 0,
        duration: 0,
      })
      .to('.mobile-navigation-heading', {
        opacity: 0,
        duration: 0,
        ease: 'power1.inOut',
      })
      .to('.mobile-navigation-container', {
        '--window-width': '0%',
        ease: 'power1.inOut',
        duration: 0.2,
      })
      .to('.mobile-navigation-wrapper', {
        duration: 0,
        css: {
          visibility: 'hidden',
          pointerEvents: 'none',
        },
      });
    hiddenTL.play();
  });

  return (
    <header className={styles.header}>
      <div className={styles.navigation__wrapper}>
        <nav
          id="navbar"
          className={`${styles.navigation}  ${
            toggleMobileNav ? styles.background__transparent : ''
          }`}
        >
          <a className={styles.logo__container}>
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <h1 id="title">espektro</h1>
          </a>
          <div className={styles.navigation__links__wrapper}>
            <ul className={styles.navigation__links}>
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <HamburgerButton
              isClicked={toggleMobileNav}
              onClick={() => {
                //! delaying the click event, after 0.2s of user clicking
                //! state will be updated, this is because, rapid clicking(on/off) causes unfinished animation
                //! so in toggle off state for a few second links are still visible
                setTimeout(() => {
                  setToggleMobileNav((prev) => !prev);
                  if (!toggleMobileNav) {
                    handleToggleOn();
                  } else {
                    handleToggleOff();
                  }
                }, 200); //* experiment with this value
              }}
            />
          </div>
        </nav>

        {/* mobile navigation container */}
        <div
          className={`${styles.mobile__navigation__wrapper} mobile-navigation-wrapper`}
          ref={mobileNavContainerRef}
        >
          <div
            className={`${styles.mobile__navigation__container} mobile-navigation-container`}
          >
            <div className={styles.mobile__navigation__links}>
              <div>
                <h1 className="mobile-navigation-heading">espektro</h1>
              </div>
              <ul>
                {links.map((link) => (
                  <li
                    key={link.id}
                    className="link"
                    onClick={() => {
                      if (toggleMobileNav) {
                        setToggleMobileNav((prev) => !prev);
                        handleToggleOff();
                      }
                    }}
                  >
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HamburgerButton({
  isClicked,
  onClick,
}: {
  isClicked: boolean;
  onClick: () => void;
}) {
  return (
    <button className={styles.HamburgerButton__button} onClick={onClick}>
      <div
        className={`${isClicked ? styles.button__clicked : ''} ${
          styles.HamburgerButton__button__wrapper
        }`}
      >
        <div></div>
        <div></div>
      </div>
    </button>
  );
}

export default Navigation;
