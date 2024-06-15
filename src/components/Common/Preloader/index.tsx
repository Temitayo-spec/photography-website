import { useEffect, useRef } from 'react';
import {
  PreloaderWrapper,
  PreloaderInner,
  SecondOverlay,
  ThirdOverlay,
} from './styles';
import { gsap } from 'gsap';
import { useRecoilState } from 'recoil';
import { preloaderAtom } from '../../../../atoms/preloaderAtom';

const Preloader = ({ playAnimation }: { playAnimation: boolean }) => {
  const [, setIsLoading] = useRecoilState(preloaderAtom);

  const secondOverlayRef = useRef(null);
  const thirdOverlayRef = useRef(null);

  const wrapperRef = useRef(null);
  const spanOne = useRef(null);
  const spanTwo = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
    });

    tl.to(spanOne.current, {
      y: 50,
      duration: 2,
      ease: 'power2.out',
    });
    tl.to(
      spanTwo.current,
      {
        y: -50,
        duration: 2,
        ease: 'power2.out',
      },
      '<'
    );

    // Animate both the wrapper and the second overlay almost at the same time
    tl.to(
      [wrapperRef.current, thirdOverlayRef.current, secondOverlayRef.current],
      {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'back.out(1.7)',
        duration: 1.2,
        stagger: 0.5,
        onComplete: () => {
          setIsLoading(false);
        },
      }
    );

    // Play the timeline when the animation is ready
    playAnimation && tl.play();

    return () => {
      tl.pause();
    };
  }, [playAnimation, setIsLoading]);
  return (
    <>
      <PreloaderWrapper ref={wrapperRef}>
        <PreloaderInner>
          <h1>
            <span ref={spanOne}>Jacob</span>
          </h1>
          <h1>
            <span ref={spanTwo}>Grønberg</span>
          </h1>
        </PreloaderInner>
      </PreloaderWrapper>
      <ThirdOverlay ref={thirdOverlayRef}></ThirdOverlay>
      <SecondOverlay ref={secondOverlayRef}></SecondOverlay>
    </>
  );
};

export default Preloader;
