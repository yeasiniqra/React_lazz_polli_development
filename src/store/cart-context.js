import { createContext } from "react";

const cartContext = createContext({
    rooms: [],
    isInitiating: true,
    totalAmount: 0,
    storeRoom: (room, quantity) => {},
    removeRoom: (room) => {},
    getQuantity: (id, type) => {},
    clear: () => {},
    isHouseAdded: (id) => false,
    isRoomAdded: (id) => false
});


export default cartContext;