import { createContext } from "react";

const cartContext = createContext({
    rooms: [],
    isInitiating: true,
    storeRoom: (room) => {},
    removeRoom: (room) => {}
});

export default cartContext;