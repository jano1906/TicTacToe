import { fromJS } from 'immutable';
import { repeat } from 'ramda';

import {
    PLAYERS,
    STARTING_PLAYER,
    FIELD_VALUES,
    BOARD_SIZE
} from '../../game-logic/const';

import { SET_FIELD_VALUE } from './const';
import { LOAD_SNAPSHOT } from '../history/const';

export const GAME_REDUCER_NAME = 'Game';

const initialBoardState = fromJS(
    repeat(repeat(FIELD_VALUES.EMPTY, BOARD_SIZE), BOARD_SIZE)
);
const initialState = fromJS({
    gameState: {
        currentPlayer: STARTING_PLAYER,
        board: initialBoardState,
        moveNumber: 0
    },
    isRecordedState: false
});

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIELD_VALUE:
            return state
                .updateIn(['gameState', 'board'], (board) =>
                    boardReducer(board, action)
                )
                .updateIn(['gameState', 'currentPlayer'], (currentPlayer) =>
                    currentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X
                )
                .updateIn(
                    ['gameState', 'moveNumber'],
                    (moveNumber) => moveNumber + 1
                )
                .set('isRecordedState', false);
        case LOAD_SNAPSHOT: {
            const { snapshot } = action;
            return state
                .set('gameState', snapshot)
                .set('isRecordedState', true);
        }
        default:
            return state;
    }
};

const boardReducer = (state = initialBoardState, action) => {
    switch (action.type) {
        case SET_FIELD_VALUE: {
            const { x, y, value } = action;
            return state.setIn([y, x], value);
        }
        default:
            return state;
    }
};
