import {PageStateContext} from "./contexts";
import {useContext} from "react";

export default function usePageSelector(selectFromStateFunction) {

  const state = useContext(PageStateContext);

  return selectFromStateFunction(state);

}