import App from '@/app/ui';
import ErrorBoundary from '@/entities/error-boundary/ui';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
