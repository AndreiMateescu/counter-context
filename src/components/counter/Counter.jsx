import React, { useContext} from "react";
import CountContext from "../../Context/CountProvider";

export default function Counter() {

    const context = useContext(CountContext);

    return (
        <div>
            {context.counter}
            <button onClick={context.increase}>+</button>
            <button onClick={context.decrease}>-</button>
            <button onClick={context.reset}>Reset</button>
        </div>
    )
}
