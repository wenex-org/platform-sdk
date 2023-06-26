import { SubInterface } from '../../../../../common/interfaces';
import { PlaceType } from '../../../../../common/enums';

export interface Place extends SubInterface {
  type: PlaceType;
  country: string;
  name?: string;
  address?: string;
  location?: string;
}

export type PlaceInterface = Place;
