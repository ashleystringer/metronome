import React, { useState, useEffect } from 'react';

export function useLocalStorage(initialValue, key){
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if(jsonValue != null) return JSON.parse(jsonValue);

        if (typeof initialValue === "function"){
            return initialValue();
        }else{
            return initialValue;
        }
    });
    useEffect(() => {
        setLocalStorage(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}