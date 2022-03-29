import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { HistoryItem } from './components';
import { historySelector, currentItemSelector } from './selectors';
import { loadSnapshot } from './actions';

export const History = () => {
    const history = useSelector(historySelector);
    const currentItem = useSelector(currentItemSelector);

    const dispatch = useDispatch();
    const goToSnapshot = (snapshot) => dispatch(loadSnapshot(snapshot));

    return (
        <ul>
            {history.map((historyItem) => (
                <HistoryItem
                    key={`history-item-${historyItem.get('moveNumber')}`}
                    moveNumber={historyItem.get('moveNumber')}
                    emph={currentItem === historyItem.get('moveNumber')}
                    onClick={() => goToSnapshot(historyItem.get('snapshot'))}
                />
            ))}
        </ul>
    );
};
