import { ERRORS } from '@/shared/constants';
import { useState } from 'react';

export const ErrorTrigger = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  if (isActive) throw new Error(ERRORS.MANUAL);

  return (
    <button className="button-error" onClick={() => setIsActive(true)}>
      Break the application
    </button>
  );
};
