import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { CONTEXT_KEYS, LOCAL_STORAGE_KEY } from "../constants/magic-string";
import cartContext from "./cart-context";

const initialState = {
  rooms: [],
  isInitiating: true,
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case CONTEXT_KEYS.CART_STORE_ROOM: {
      const roomFromStore = state.rooms.find((r) => r.Id === action.room.Id && action.room.type === r.type);

      const amount = action.quantity * action.room.type === 'ROOM' 
                    ? action.room.RoomPrice 
                    : action.room.Price;
      
      let newRooms = state.rooms;

      if (!roomFromStore)
        newRooms = [
          ...newRooms,
          { ...action.room, quantity: 1, amount: amount },
        ];
      else {
        newRooms = newRooms.map((r) => {
          if (r.Id === action.room.Id) {
            return {
              ...r,
              amount,
              quantity: action.quantity,
            };
          } 

          return r;
        });
      }

      let totalAmount = 0;
      newRooms.forEach((r) => (totalAmount += (r.type === 'ROOM' 
      ? r.RoomPrice 
      : r.Price)));

      const newState = {
        ...state,
        rooms: newRooms,
        totalAmount: totalAmount,
      };

      localStorage.setItem(LOCAL_STORAGE_KEY.CART, JSON.stringify(newState));

      return newState;
    }

    // const roomFromStore = state.rooms.find((r) => r.Id === action.room.Id && action.room.type === r.type);
    case CONTEXT_KEYS.CART_REMOVE_ROOM: {
      const newRooms = [...state.rooms.filter((r) => action.id !== r.Id)];

      let totalAmount = 0;
      newRooms.forEach((r) => (totalAmount += (r.type === 'ROOM' 
      ? r.RoomPrice 
      : r.Price)));

      const newState = {
        ...state,
        rooms: newRooms,
        totalAmount: totalAmount,
      };
      
      localStorage.setItem(LOCAL_STORAGE_KEY.CART, JSON.stringify(newState));
      
      return newState;
    }

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

  const storeRoom = (room, quantity = 1) => {
    dispatch({ type: CONTEXT_KEYS.CART_STORE_ROOM, room, quantity });
  };

  const removeRoom = (room) => {
    dispatch({ type: CONTEXT_KEYS.CART_REMOVE_ROOM, id: room.Id });
  };

  const getQuantity = (id) => {
    const room = state.rooms.find((r) => r.Id === id);

    return room ? room.quantity : 0;
  };

  const context = {
    rooms: state.rooms,
    isInitiating: state.isInitiating,
    totalAmount: state.totalAmount,
    storeRoom,
    removeRoom,
    getQuantity,
  };

  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
