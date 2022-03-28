import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('Reducer should change value to opposite value', () => {
    //data  1
    const state: StateType = {
        collapsed: false
    }

    //action  2
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection  3
    expect(newState.collapsed).toBe(true)

})