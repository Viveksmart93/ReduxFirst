import { ADD_PLACE, DEL_PLACE } from './types';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}

export const delPlace = placeIndex => {
    return {
        type: DEL_PLACE,
        payload: placeIndex
    }
}