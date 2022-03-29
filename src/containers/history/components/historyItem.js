import React from 'react';

export let HistoryItem = ({ moveNumber, emph, onClick }) => (
    <li>
        <button
            onClick={onClick}
            style={{ fontWeight: emph ? 'bold' : 'normal' }}>
            {moveNumber > 0 ? `Go to move #${moveNumber}` : 'Go to game start'}
        </button>
    </li>
);
