interface ICounterState {
    count: number;
}

const state: ICounterState = {
    count: 0,
};

const mutations = {
    increment(currentState: ICounterState) {
        currentState.count++;
    },
    decrement(currentState: ICounterState) {
        currentState.count--;
    },
    setCount(currentState: ICounterState, value: number) {
        currentState.count = value;
    }
};

const getters = {
    currentCount(state: ICounterState): number {
        return state.count;
    }
};

// Define namespace (optional, for use with vuex-facing-decorator)
import { namespace as createNamespace } from 'vuex-facing-decorator';
export const namespace = 'counter';
export const vuexNamespace = createNamespace(namespace);

export const VuexModuleDefinition = {
    namespaced: true,
    state,
    mutations,
    getters
};

type Increment = () => void;
type Decrement = () => void;
type SetCount = (value: number) => void;

export type {
  ICounterState,
  Increment,
  Decrement,
  SetCount
};
