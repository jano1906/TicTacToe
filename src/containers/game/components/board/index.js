import React from 'react';
import { Square } from './square';
import { FIELD_VALUES } from '../../../../game-logic/const';

export const Board = ({ board, onFieldClick }) => (
    <div>
        {board.map((row, y) => (
            <div key={`row-${y}`} className="board-row">
                {row.map((fieldValue, x) => (
                    <Square
                        key={`field-${x}-${y}`}
                        value={fieldValue}
                        onClick={() => onFieldClick(x, y)}
                        disabled={fieldValue !== FIELD_VALUES.EMPTY}
                    />
                ))}
            </div>
        ))}
    </div>
);
