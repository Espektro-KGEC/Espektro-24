import { animated, useTransition } from '@react-spring/web';
import React, { useState } from 'react';
//@ts-ignore
function LazyLoad({
  children,
  fallback,
}: {
  children: JSX.Element;
  fallback: JSX.Element;
}) {
  const [isSplashVisible, setisSplashVisible] = useState(true);
  React.useEffect(() => {
    const loadFn = () => {
      setisSplashVisible(false);
      console.log('loaded');
    };
    window.addEventListener('load', loadFn);
    return () => window.removeEventListener('load', loadFn);
  }, []);
  const transition = useTransition(isSplashVisible, {
    from: {
      opacity: 1,
      scale: 1,
    },
    enter: {
      opacity: 1,
      scale: 1,
    },
    leave: {
      opacity: 0,
      scale: 1.5,
      transition: {
        duration: 5,
      },
    },
  });
  return (
    <>
      {transition((style, item) =>
        !item ? (
          children
        ) : (
          <animated.div
            style={{
              ...style,
              height: '100vh',
              width: '100vw',
              position: 'fixed',
              overflow: 'hidden',
              background: '#000',
              color: 'red',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '4rem',
            }}
          >
            {fallback}
          </animated.div>
        )
      )}
    </>
  );
}
