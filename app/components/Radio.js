import React from 'react';

function Radio({ val, checked, name, className, label , id, fnc }) {
    return (
        <>
            <input onChange={(e) => {fnc(e.target.value)}} type="radio" name={name} className={className} checked={checked} id={id} value={val} />
            <label htmlFor = {id} >{label}</label>
        </>
    );
}

export default Radio;