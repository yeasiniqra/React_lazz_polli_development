import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { CONTEXT_KEYS, LOCAL_STORAGE_KEY } from "../constants/magic-string";
import cartContext from "./cart-context";

const initialState = {
  rooms: [],
  isInitiating: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case CONTEXT_KEYS.CART_STORE_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.room],
      };

    case CONTEXT_KEYS.CART_REMOVE_ROOM:
      return {
        ...state,
        rooms: [...state.rooms.filter((r) => action.id !== r.Id)],
      };

    case CONTEXT_KEYS.CART_INITIATED:
      return {
        ...state,
        isInitiating: false,
      };

    case CONTEXT_KEYS.CART_UPDATE_STORE:
      return {
        ...action.cart,
      };

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const cartJSON = localStorage.getItem(LOCAL_STORAGE_KEY.CART);

    let cart;
    if (cartJSON) {
      try {
        cart = JSON.parse(cartJSON);
        dispatch({ type: CONTEXT_KEYS.CART_UPDATE_STORE, cart });
      } catch (error) {
        console.log(error);
      }
    }

    dispatch({ type: CONTEXT_KEYS.CART_INITIATED });
  }, []);
  

  const storeRoom = (room) => {
    dispatch({ type: CONTEXT_KEYS.CART_STORE_ROOM, room });
  };
 
  const removeRoom = (room) => {
    dispatch({ type: CONTEXT_KEYS.CART_REMOVE_ROOM, id: room.Id });
  };

  const context = {
    rooms: state.rooms,
    isInitiating: state.isInitiating,
    storeRoom,
    removeRoom,
  };

  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
