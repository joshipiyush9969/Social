import Cart from "../../../model/cart";
import { ADD_BOOK, CLEAN, FETCH_LIST, REMOVE_BOOK, ADD_NAME } from "./action";

const initialState = {
  books: [],
  cart: [],
  total: 0,
  name: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST:
      return {
        ...state,
        books: action.data,
      };
    case ADD_BOOK:
      const cart = state.cart;
      const price = state.total + action.pageCount;
      const newCart = cart.concat(
        new Cart(action.id, action.title, action.pageCount, action.image)
      );
      console.log("carttt", newCart);
      console.log(price);
      return {
        ...state,
        total: price,
        cart: newCart,
      };
    case ADD_NAME:
      console.log(action.name);
      return {
        ...state,
        name: action.name,
      };
    case REMOVE_BOOK:
      const carts = state.cart;
      const cartR = carts.find((x) => x.id === action.id);
      const newCarts = carts.filter((x) => x.id !== action.id);
      const totalprice = state.total - cartR.TotalpageCount;
      console.log(totalprice);
      console.log("carttt", newCarts);
      return {
        ...state,
        total: totalprice,
        cart: newCarts,
      };
    case CLEAN:
      return initialState;

    default:
      return state;
  }
};
