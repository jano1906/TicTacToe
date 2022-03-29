import { SET_FIELD_VALUE } from './const';

export const setFieldValue = (x, y, value) => ({
    type: SET_FIELD_VALUE,
    x,
    y,
    value
});
