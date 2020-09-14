import React, { useState, useRef, useEffect } from 'react';
import useOutsideClick from '../hook/clickOutSide';
function List({ array, onClick, selected }) {
    let list;

    if(array.length === 0)
        return list = <></>;
    list = array.map((val, index) => {
        return (
            <li key={index + 1} className={val.className} onClick={() => { selected.value != val.value && onClick(val) }}>
                <p className={val.classNameText}>{val.text}</p>
            </li>
        )
    })
    list.unshift(
        <li key="0" className={array[0].className}>
            <p className={array[0].classNameText}>{selected.text}</p>
        </li>
    )
    return list;
}

function DropDown({ array, onClick, value }) {
    const [isActive, toggleActive] = useState(false);
    let classActive = isActive ? "active" : "";
    let classBox = "dropdown__box " + classActive;
    let classDropDownArrow = "dropdown__box__arrow " + classActive;
    const ref = useRef(null);
    useOutsideClick(ref, () => {
        closeDropDown();
    });
    const closeDropDown = () => {
        toggleActive(false);
        resetScrollTop();
    }
    const resetScrollTop = () => {
        ref.current.scrollTop = 0;
    }
    return (
        <>
            <div className={classDropDownArrow}>
                <img src="./assets/images/arrow@2x.png" alt="" />
            </div>
            <ul ref={ref} className={classBox} onClick={() => {toggleActive(!isActive)}}>
                <List array={array} onClick={(value) => { onClick(value) ; resetScrollTop(); }} selected={value} />
            </ul>
        </>
    )
}

export default DropDown;