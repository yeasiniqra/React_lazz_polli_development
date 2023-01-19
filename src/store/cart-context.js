import { createContext } from "react";

const cartContext = createContext({
    rooms: [],
    isInitiating: true,
    totalAmount: 0,
    storeRoom: (room, quantity) => {},
    removeRoom: (room) => {},
    getQuantity: (id, type) => {},
    clear: () => {}
});


export default cartContext;