import { useEffect, useRef } from 'react';

export const useControlledOutsideClick = (
  isVisible: boolean,
  onClose: () => void
) => {
  const targetRef = useRef<HTMLElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      targetRef.current &&
      !targetRef.current.contains(event.target as Node) &&
      isVisible
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isVisible]);

  return targetRef;
};
