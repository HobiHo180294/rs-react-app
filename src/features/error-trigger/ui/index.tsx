import { ERRORS } from '@/shared/constants';
import { useState } from 'react';

export const ErrorTrigger = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  if (isActive) throw new Error(ERRORS.MANUAL);

  return (
    <button
      className="button-error px-6 py-2.5 rounded ripple"
      onClick={() => setIsActive(true)}
    >
      Break the application
    </button>
  );
};
