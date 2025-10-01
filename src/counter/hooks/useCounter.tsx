import { useState } from "react";


export const useCounter = (initialvalue: number = 10) => {
    const [counter, setCounter] = useState(initialvalue);

    const handleAdd = () => {
        setCounter(prev => prev + 1);
    }
    const handleLess = () => {
        setCounter(prev => prev - 1);
    }
    const handleReset = () => {
        setCounter(initialvalue);
    }

    return {
        //Values
        counter,
        //Methods / Actions
        handleAdd,
        handleLess,
        handleReset
    }
}


