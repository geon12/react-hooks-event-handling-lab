import React from "react";

function Keypad() {
    function typing() {
        console.log('Entering password...')
    }

    return (
        <input onChange={typing} type="password" />
    );
}

export default Keypad;