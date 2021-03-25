import React from 'react';
import './index.scss';

const Input = ({ name, type, title, value, handleChange, placeholder, required }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">{title}{required && ' *'}</label>
            <input
                className="form-input"
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

export default Input;
