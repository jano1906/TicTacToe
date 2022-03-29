import { unnest, map, range, reduce, all, equals } from 'ramda';

import { BOARD_SIZE, PLAYERS, FIELD_VALUES } from './const';

const LINE_RANGE = range(0, BOARD_SIZE);
const LINES = unnest(
    map(
        (i) => [map((j) => [j, i], LINE_RANGE), map((j) => [i, j], LINE_RANGE)],
        LINE_RANGE
    )
);
LINES.push(map((i) => [i, i], LINE_RANGE));
LINES.push(map((i) => [i, BOARD_SIZE - 1 - i], LINE_RANGE));

export const calculateWinner = (board) =>
    reduce(
        (currentWinner, line) => {
            const firstElement = board.getIn(line[0]);
            const isLineConsistent = all(
                equals(firstElement),
                map((pos) => board.getIn(pos), line)
            );
            const isFirstElementEmpty = firstElement === FIELD_VALUES.EMPTY;

            return isLineConsistent && !isFirstElementEmpty
                ? firstElement
                : currentWinner;
        },
        PLAYERS.UNKNOWN,
        LINES
    );
