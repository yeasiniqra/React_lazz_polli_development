import { useEffect } from "react";

const useCloseOnOutsideClick = (ref, action) => {
    useEffect(() => {
        function handleOutsideClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                action();
            }
        }
        document.addEventListener("click", handleOutsideClick);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
}

export { useCloseOnOutsideClick }