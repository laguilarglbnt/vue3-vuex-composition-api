import { state } from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
export * from './types';

export const todo = {
    state,
    actions,
    mutations,
    getters
};