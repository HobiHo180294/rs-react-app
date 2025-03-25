import { UserBasic } from '@/shared/api/types/user';
import { PhotoDetailsMetricsProps } from '@/widgets/photo-details/metrics/model';
import { PhotoDetailsTopicsProps } from '@/widgets/photo-details/topics/model';

export interface PhotoDetailsContentProps
  extends PhotoDetailsTopicsProps,
    PhotoDetailsMetricsProps {
  title?: string;
  description?: string;
  user?: UserBasic;
  originalPhotoLink?: string;
}
