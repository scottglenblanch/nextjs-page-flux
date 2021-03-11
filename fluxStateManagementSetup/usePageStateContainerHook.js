import {useReducer} from "react";

export default function usePageStateContainerHook({ reducer, initialState }) {

  const [state, dispatch] = useReducer(reducer, initialState);


  return {
    state,
    dispatch,
  }
}