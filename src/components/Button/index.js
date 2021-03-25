import React from 'react';
import classNames from 'classnames';
import './index.scss'

const Button = (props) => {
    const {
        className,
        children,
        size,
        modifier = 'filled',
        href,
        type = "button",
        fullWidth,
        onClick } = props;


    const classes = classNames(
        'button',
        modifier && `button--${modifier}`,
        fullWidth && `button--full_width`,
        className,
        size === 'small' && 'button--small',
    );

    const content = (
        <span className="button__content">
            {children}
        </span>
    );

    return href ? (
        <React.Fragment>
            <a
                role="button"
                href={href}
                className={classes}
                onClick={onClick}
            >{content}</a>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <button
                type={type}
                className={classes}
                onClick={onClick}
            >{content}</button>
        </React.Fragment>
    );
}

Button.defaultProps = {
    href: null
};

export default Button;