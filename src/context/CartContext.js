import { useState } from "react";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  products: [],
  item_count: null,
  total: null,
};

export const CartContext = createContext(INITIAL_STATE);

const CartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart":
      var sum = "";
      if (state.total === null) {
        sum =
          action.payload.price * action.payload.quantity + action.payload.size;
      } else {
        sum =
          state.total +
          action.payload.price * action.payload.quantity +
          action.payload.size;
      }
      const update = (array, value) => {
        return [...array, value];
      };
      var store = update(state.products, action.payload);
      return {
        ...state,
        products: store,
        item_count: store.length,
        total: sum,
      };
    case "IncreaseQuantity":
      var price = "";
      const updated = state.products.map((product) => {
        if (product._id == action.payload.id) {
          price = product.price;
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      return {
        ...state,
        products: updated,
        total: state.total + price,
      };
    case "DecreaseQuantity":
      var price = "";
      const updatedd = state.products.map((product) => {
        if (product._id == action.payload.id) {
          price = product.price;
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      return {
        ...state,
        products: updatedd,
        total: state.total - price,
      };
    case "DeleteItem":
      var price = "";
      const array = state.products.filter((product) => {
        if (product._id == action.payload.id) {
          price = product.price * product.quantity;
        }
      });
      const filter = state.products.filter(
        (product) => product._id !== action.payload.id
      );
      return {
        ...state,
        products: filter,
        item_count: filter.length,
        total: state.total - price,
      };
  }
};
export const CartContextProvider = ({ children }) => {
  const addtocart = (data, quantity, size) => {
    dispatch({ type: "AddToCart", payload: { ...data, quantity, size } });
  };
  const Increaseqty = (id) => {
    dispatch({ type: "IncreaseQuantity", payload: { id } });
  };
  const Decreaseqty = (id) => {
    dispatch({ type: "DecreaseQuantity", payload: { id } });
  };
  const DeleteItem = (id) => {
    console.log(id);
    dispatch({ type: "DeleteItem", payload: { id } });
  };
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
  return (
    <CartContext.Provider
      value={{
        products: state.products,
        item_count: state.item_count,
        total: state.total,
        xiu: state.xiu,
        addtocart,
        Increaseqty,
        Decreaseqty,
        dispatch,
        DeleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
