import {UPDATE_SELECTED_DISPLAY_OPTION, UPDATE_NAME} from "./page1Actions";

export default function page1Reducer(state, action) {

  const { selectedDisplayOption, name, type } = action;

  switch(type) {
    case UPDATE_NAME:
      return {...state, name};
    case UPDATE_SELECTED_DISPLAY_OPTION:
      return { ...state, selectedDisplayOption };
  }

  return {...state};
}