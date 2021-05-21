import { createReducer, on } from "@ngrx/store";
import { addCustomValue, decrement, increment, reset } from "./counter.actions";
import { initialState } from "./counter.state";
const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }),
    on(decrement, (state) => {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }),
    on(reset, (state) => {
      return {
        ...state,
        counter: 0,
      };
    }),
    on(addCustomValue, (state, action) => {
      return {
        ...state,
        counter: state.counter+action.value
      };
    })
)
export function counterReducer(state, action) {
    return _counterReducer(state, action);
  }