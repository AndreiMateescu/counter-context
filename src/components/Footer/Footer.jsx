import React, { useContext } from "react";
import CountContext from "../../Context/CountProvider";
import MemoCountdown from "../CountdownWrapper";

const Footer = () => {

    const context = useContext(CountContext);

    return (
        <React.Fragment>
        <div style={{ color: 'red' }}>{context.counter}</div>
        <br/>
        <MemoCountdown />
        </React.Fragment>
    )
};

export default Footer;