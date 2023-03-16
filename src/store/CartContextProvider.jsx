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
      const roomFromStore = state.rooms.find(
        (r) => r.Id === action.room.Id && action.room.Type === r.Type
      );

      const amount =
        action.quantity *
        (action.room.Type === "ROOM"
          ? action.room.RoomPrice
          : action.room.Price);

      let newRooms = state.rooms;

      if (!roomFromStore)
        newRooms = [
          ...newRooms,
          { ...action.room, quantity: 1, amount: amount },
        ];
      else {
        newRooms = newRooms.map((r) => {
          if (r.Id === action.room.Id && action.room.Type === r.Type) {
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
      newRooms.forEach((r) => (totalAmount += r.amount));

      const newState = {
        ...state,
        rooms: newRooms,
        totalAmount: totalAmount,
      };

      localStorage.setItem(LOCAL_STORAGE_KEY.CART, JSON.stringify(newState));

      return newState;
    }
    case CONTEXT_KEYS.CART_REMOVE_ROOM: {
      const newRooms = [
        ...state.rooms.filter(
          (r) => !(r.Type === action.room.Type && action.room.Id === r.Id)
        ),
      ];

      let totalAmount = 0;
      newRooms.forEach((r) => (totalAmount += r.amount));

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

    case CONTEXT_KEYS.CART_CLEAR: {
      localStorage.removeItem(LOCAL_STORAGE_KEY.CART);
      return {
        ...state,
        ...initialState,
      };
    }

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
    dispatch({ type: CONTEXT_KEYS.CART_REMOVE_ROOM, room });
  };

  const getQuantity = (id, type) => {
    const room = state.rooms.find((r) => r.Id === id && r.Type === type);

    return room ? room.quantity : 0;
  };

  const clear = () => {
    dispatch({ type: CONTEXT_KEYS.CART_CLEAR });
  };

  const isRoomAdded = (id, checkIn, checkOut) => {
    return (
      state.rooms.find(
        (r) =>
          r.Id === id &&
          checkIn === r.arrivalDate &&
          checkOut === r.departureDate
      ) !== undefined
    );
  };

  const isHouseAdded = (id, checkIn, checkOut) => {
    return (
      state.rooms.find(
        (r) =>
          r.Id === id &&
          r.Type === "HOUSE" &&
          checkIn === r.arrivalDate &&
          checkOut === r.departureDate
      ) !== undefined
    );
  };

  const context = {
    rooms: state.rooms,
    isInitiating: state.isInitiating,
    totalAmount: state.totalAmount,
    storeRoom,
    removeRoom,
    getQuantity,
    clear,
    isRoomAdded,
    isHouseAdded,
  };
  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
