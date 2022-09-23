import React from "react";
import { useContext } from "react";
import CountContext from "../../Context/CountProvider";

const Header = () => {
    const context = useContext(CountContext);

    return (
        <React.Fragment>
            <div style={{ color: 'blue' }}>{context.counter}</div>
            <button onClick={context.increase}>Increment</button>
        </React.Fragment>
    )
};

export default Header;