import GalleryPage from '@/pages/gallery/ui';
import { ERRORS } from '@/shared/constants';
import { ErrorMessage } from '@/shared/ui/error-message/ui';
import { PhotoDetailsSidebar } from '@/widgets/photo-details/sidebar/ui';
import { Route, Routes } from 'react-router';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GalleryPage />}>
        <Route index element={<PhotoDetailsSidebar />} />
      </Route>
      <Route
        path="*"
        element={<ErrorMessage errorText={ERRORS['404']} helperText="404" />}
      />
    </Routes>
  );
}
