import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Status, Board } from './components';
import { History } from '../history';
import {
    isGameFinishedSelector,
    winnnerSelector,
    isGameAHistorySnapshotSelector,
    gameStateSelector
} from './selectors';
import { setFieldValue as setFieldValueAction } from './actions';
import { updateHistory } from '../history/actions';

export const Game = () => {
    const gameState = useSelector(gameStateSelector);
    const isGameFinished = useSelector(isGameFinishedSelector);
    const winner = useSelector(winnnerSelector);
    const isGameAHistorySnapshot = useSelector(isGameAHistorySnapshotSelector);

    const dispatch = useDispatch();
    const onFieldClick = (x, y) => {
        if (!isGameFinished) {
            dispatch(setFieldValueAction(x, y, gameState.get('currentPlayer')));
        }
    };

    // This part is a bit hacky but we'll fix it using technology
    // introduced in the next lesson
    useEffect(() => {
        if (isGameAHistorySnapshot) {
            return;
        }

        dispatch(updateHistory(gameState.get('moveNumber'), gameState));
    }, [dispatch, gameState, isGameAHistorySnapshot]);

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    board={gameState.get('board')}
                    onFieldClick={onFieldClick}
                />
            </div>
            <div className="game-info">
                <Status
                    isGameFinished={isGameFinished}
                    currentPlayer={gameState.get('currentPlayer')}
                    winner={winner}
                />

                <History />
            </div>
        </div>
    );
};
