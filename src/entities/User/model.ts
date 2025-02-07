interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface Links {
  self: string;
  html: string;
  photos: string;
  likes: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  instagram_username: string;
  twitter_username: string;
  portfolio_url: string;
  profile_image: ProfileImage;
  links: Links;
}
