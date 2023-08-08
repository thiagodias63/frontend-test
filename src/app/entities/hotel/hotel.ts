import {Address} from './address';
import {Amenity} from './amenity';

export interface Hotel {
  id: number;
  favorite: boolean;
  name: string;
  description: string;
  stars: string | number;
  thumb: string;
  amenities: Amenity;
  hasBreakFast: boolean;
  hasRefundableRoom: boolean;
  hasAgreement: boolean;
  nonRefundable?: boolean;
  address: Address;
  images: string[];
  deals: string;
  roomsQuantity: number;
}
