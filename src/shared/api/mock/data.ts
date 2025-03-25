import { PhotoBasic, PhotoFull } from '../types/photos';

export const MOCKED_BASIC_PHOTO = {
  id: '164_6wVEHfI',
  slug: 'sunset-over-mountain-first-photo-164_6wVEHfI',
  description:
    'A breathtaking sunset view over a mountain landscape. The sky is painted with vivid orange and purple hues as the sun descends behind the mountain silhouette. Captured during golden hour, this image showcases the peaceful transition from day to night in a pristine natural setting. #sunset #mountains #naturephotography',
  alt_description:
    'Vibrant sunset over silhouetted mountain range with orange and purple sky',
  urls: {
    full: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    raw: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3',
    regular:
      'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    small:
      'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    thumb:
      'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
  },
  created_at: '2023-01-15T14:23:45Z',
  updated_at: '2023-01-16T09:12:33Z',
  height: 3840,
  width: 5760,
  likes: 342,
  views: 15678,
  downloads: 827,
  links: {
    download: 'https://unsplash.com/photos/first-photo/download',
    download_location: 'https://api.unsplash.com/photos/first-photo/download',
    html: 'https://unsplash.com/photos/first-photo',
    self: 'https://api.unsplash.com/photos/first-photo',
  },
  user: {
    name: 'Alex Johnson',
    total_collections: 12,
    total_likes: 428,
    updated_at: '2023-01-14T18:45:22Z',
    username: 'alexjphoto',
    id: 'user123',
    total_photos: 87,
    profile_image: {
      small:
        'https://images.unsplash.com/profile-1609545740442?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
      medium:
        'https://images.unsplash.com/profile-1609545740442?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
      large:
        'https://images.unsplash.com/profile-1609545740442?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
    },
    first_name: 'Alex',
    links: {
      followers: 'https://api.unsplash.com/users/alexjphoto/followers',
      following: 'https://api.unsplash.com/users/alexjphoto/following',
      likes: 'https://api.unsplash.com/users/alexjphoto/likes',
      portfolio: 'https://api.unsplash.com/users/alexjphoto/portfolio',
      self: 'https://api.unsplash.com/users/alexjphoto',
      html: 'https://unsplash.com/@alexjphoto',
      photos: 'https://api.unsplash.com/users/alexjphoto/photos',
    },
  },
} satisfies PhotoBasic;

export const MOCKED_FULL_PHOTO = {
  ...MOCKED_BASIC_PHOTO,
  exif: {
    iso: 200,
    aperture: '2.8',
    exposure_time: '1/1000',
    focal_length: '5.6',
    make: 'Canon',
    model: 'EOS R5',
  },
  tags: [{ title: 'nature' }, { title: 'mountains' }, { title: 'sunrise' }],
  location: {
    position: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
  related_collections: {
    results: [],
    total: 1,
    type: 'collected',
  },
} satisfies PhotoFull;
