import { shoeArr } from "../../Data";
import { message } from "antd";
import {
  BUY_SHOE,
  DOI_SO_LUONG,
  REMOVE_SHOE,
  VIEW_SHOE,
} from "../Constant/shoe";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cart: [],
  // cart: shoeArr,
};
export let ShoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SHOE: {
      let cloneCart = [...state.cart];
      var index = cloneCart.findIndex((item) => {
        return item.id == action.payload.id;
      });
      if (index == -1) {
        let newShoe = { ...action.payload, soLuong: 1 };
        cloneCart.push(newShoe);
      } else {
        cloneCart[index].soLuong++;
      }
      state.cart = cloneCart;
      return { ...state };
    }
    case VIEW_SHOE: {
      let detail = action.payload;
      state.detail = detail;
      // state.detail=action.payload
      return { ...state };
    }
    case REMOVE_SHOE: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id == action.payload);
      cloneCart.splice(index, 1);
      state.cart = cloneCart;
      message.success("Xóa Thành Công");
      return { ...state };
    }
    case DOI_SO_LUONG: {
      // cách rút gọn let { id, option } = action.payload;
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id === action.payload.id);
      cloneCart[index].soLuong =
        cloneCart[index].soLuong + action.payload.option;
      cloneCart[index].soLuong == 0 && cloneCart.splice(index, 1);
      // this.setState({ cart: cloneCart })
      state.cart = cloneCart;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
