import {UPDATE_PHRASE} from "./page2Actions";

export default function page2Reducer(state, action) {

  const { phrase, type } = action;

  switch(type) {
    case UPDATE_PHRASE:
      return {...state, phrase};
  }

  return {...state};
}