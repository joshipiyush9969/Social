import axios from "axios";

import api from "../../../constants/api";
import Book from "../../../model/book";
export const CREATE_ORDER = "CREATE_ORDER";
export const FETCH_LIST = "FETCH_LIST";
export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const CLEAN = "CLEAN";
export const ADD_NAME = "ADD_NAME";
export const fetchBook = () => {
  return async (dispatch, getState) => {
    const books = [];
    const response = await axios.get(api.baseURL);
    const resData = response.data.items;
    for (const keys in resData) {
      books.push(
        new Book(
          response.data.items[keys]?.id,
          response.data.items[keys]?.volumeInfo
        )
      );
    }
    console.log("data===>", books.length);
    dispatch({ type: FETCH_LIST, data: books });
  };
};

export const addBook = (id, title, pageCount, image) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ADD_BOOK,
      id,
      title,
      pageCount,
      image,
    });
  };
};

export const removeBook = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  };
};
export const addname = (name) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ADD_NAME,
      name,
    });
  };
};
export const cleanCart = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: CLEAN,
    });
  };
};

export const createOrder = () => {
  return async (dispatch, getState) => {
    const total = getState().book.total;
    const name = getState().book.name.toLowerCase();
    const cartBooks = getState().book.cart;
    const params = {
      name: name,
      total: total,
      books: cartBooks,
    };
    const response = await axios.post(api.OrderUrl, params);

    console.log(response);
    //dispatch({ type: FETCH_LIST, data: books });
  };
};
