import { useState } from "react";


export const useCounter = (initialvalue: number) => {
    const [counter, setCounter] = useState(initialvalue);

    const handleAdd = () => {
        setCounter(prev => prev + 1);
    }
    const handleLess = () => {
        setCounter(prev => prev - 1);
    }
    const handleReset = () => {
        setCounter(0);
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


