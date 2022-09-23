import React from "react";
import Countdown from "react-countdown";


const CountdownWrapper = () => {
    const future = new Date();
    future.setDate(future.getDate() + 30);
    return (
        <Countdown date={future}/>
    )
}

const MemoCountdown = React.memo(CountdownWrapper);

export default MemoCountdown;