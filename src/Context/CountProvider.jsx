import { createContext, useState } from "react";

const CountContext = createContext();

export const CountProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    };

    const decrease = () => {
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(0);
    };

    return (
        <CountContext.Provider
            value={{ counter, increase, decrease, reset }}>
                {children}
        </CountContext.Provider>
    )
}

export default CountContext;