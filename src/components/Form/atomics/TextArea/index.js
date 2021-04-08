import React from 'react';
import './index.scss';

const TextArea = ({ name, title, type, value, placeholder, handleChange, required }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">{title}{required && ' *'}</label>
            <textarea
                className="form-textarea"
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                rows={5}
                onChange={handleChange}
            />
        </div>
    )
}

export default TextArea;
