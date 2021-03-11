import {PageDispatchContext} from "./contexts";
import {useContext} from "react";

export function usePageDispatch() {

  const dispatch = useContext(PageDispatchContext);

  return dispatch;
}
