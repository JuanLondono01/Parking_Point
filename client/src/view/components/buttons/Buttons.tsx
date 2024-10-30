import React from 'react';
import { FaCheck } from "react-icons/fa6";
import './buttons.css';

interface Checkbox {
    text: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<Checkbox> = ({ text, id, onChange }) => {
    return (
        <>
            <input type='checkbox' id={id} onChange={onChange}/>
            <label htmlFor={id}>
                <span className='check-icon'>
                    <FaCheck />
                </span>
                {text}
            </label>
        </>
    );
};

interface Button {
    text: string;
}

export const Button: React.FC<Button> = ({ text }) => {
    return (
        <>
            <button>{text}</button>
        </>
    );
};

