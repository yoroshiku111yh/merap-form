import React from 'react';

function Input({fnc, val, placeholder, className}) {
    return (
        <>
            <input className={className} type="text" onChange={(e => { fnc(e.target.value); e.preventDefault() })} value={val} placeholder={placeholder} />
        </>
    )
}

export default Input;