import React from 'react';

export let Square = ({ value, onClick, disabled }) => (
    <button className="square" onClick={onClick} disabled={disabled}>
        {value}
    </button>
);
