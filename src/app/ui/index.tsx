import GalleryPage from '@/pages/gallery/ui';
import { ERRORS } from '@/shared/constants';
import { ErrorMessage } from '@/widgets/error-message/ui';
import { PhotoDetails } from '@/widgets/photo-details/ui';
import { Route, Routes } from 'react-router';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GalleryPage />}>
        <Route index element={<PhotoDetails />} />
      </Route>
      <Route
        path="*"
        element={<ErrorMessage error={ERRORS['404']} helperText="404" />}
      />
    </Routes>
  );
}
