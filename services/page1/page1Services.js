import {BACKWARDS, LOWER_CASE, REGULAR, UPPER_CASE} from "../../miscellaneous/page1/displayOptions/displayOptions";
import {getStringBackwards, getStringLowerCase, getStringUpperCase} from "../shared/stringTransformServices";

export const getDisplayName = ({selectedDisplayOption = '', name}) => {
  switch (selectedDisplayOption) {
    case BACKWARDS:
      return getStringBackwards(name);
    case REGULAR:
      return name;
    case LOWER_CASE:
      return getStringLowerCase(name);
    case UPPER_CASE:
      return getStringUpperCase(name);
    default:
      return name;
  }
}