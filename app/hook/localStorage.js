import { useEffect, useState } from 'react';

const useStateLocalStorage = (localStorageKey) => {
    const [ value, setValue ] = useState(localStorage.getItem(localStorageKey) || "");
    useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value]);

    const clear = () => {
        localStorage.removeItem(localStorageKey);
    }

    return [value, setValue, clear];
}

export default useStateLocalStorage;