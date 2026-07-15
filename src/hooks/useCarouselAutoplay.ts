import { useEffect } from 'react';

interface UseCarouselAutoplayProps {
  isPaused: boolean;
  onNextSlide: () => void;
  interval: number;
  totalSlides?: number;
}

/**
 * Custom hook for managing carousel autoplay logic
 * Handles automatic slide transitions with pause functionality
 */
export const useCarouselAutoplay = ({
  isPaused,
  onNextSlide,
  interval,
  totalSlides,
}: UseCarouselAutoplayProps) => {
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (!isPaused) {
        onNextSlide();
      }
    }, interval);

    return () => clearInterval(autoplayInterval);
  }, [isPaused, onNextSlide, interval, totalSlides]);
};
