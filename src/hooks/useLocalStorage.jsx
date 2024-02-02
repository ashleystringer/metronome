import React, { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue){
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if(jsonValue != null && jsonValue != "undefined") return JSON.parse(jsonValue);

        if (typeof initialValue === "function"){
            return initialValue();
        }else{
            return initialValue;
        }
    });
    useEffect(() => {
        console.log(value);
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}