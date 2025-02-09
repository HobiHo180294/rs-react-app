interface LocationPosition {
  latitude: number;
  longitude: number;
}

export interface Location {
  name: string;
  city: string;
  country: string;
  position: LocationPosition;
}
