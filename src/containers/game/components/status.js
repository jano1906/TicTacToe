import React from 'react';
import { PLAYERS } from '../../../game-logic/const';

export const Status = ({ isGameFinished, currentPlayer, winner }) => {
    let message = `Next player: ${currentPlayer}`;

    if (isGameFinished) {
        message = winner !== PLAYERS.UNKNOWN ? `Winner: ${winner}` : 'A draw';
    }

    return <div className="status">{message}</div>;
};
