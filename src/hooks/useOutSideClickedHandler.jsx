import { useEffect } from "react";

const useCloseOnOutsideClick = (ref, action) => {
    useEffect(() => {
        // Function for click event
        function handleOutsideClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                action();
            }
        }
        // Adding click event listener
        document.addEventListener("click", handleOutsideClick);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
}

export { useCloseOnOutsideClick }