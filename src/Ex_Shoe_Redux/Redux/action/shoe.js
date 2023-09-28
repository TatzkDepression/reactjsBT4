import {
  BUY_SHOE,
  DOI_SO_LUONG,
  REMOVE_SHOE,
  VIEW_SHOE,
} from "../Constant/shoe";

export const buyShoeAction = (shoe) => ({
  type: BUY_SHOE,
  payload: shoe,
});
export const detail = (shoe) => ({
  type: VIEW_SHOE,
  payload: shoe,
});
export const Delete = (id) => ({
  type: REMOVE_SHOE,
  payload: id,
});
export const Quantity = (id, option) => ({
  type: DOI_SO_LUONG,
  payload: { id, option },
});
