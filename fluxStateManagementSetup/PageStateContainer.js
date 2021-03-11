import {PageDispatchContext, PageStateContext} from "./contexts";
import usePageStateContainerHook from "./usePageStateContainerHook";

const PageStateContainer = ({ children, reducer, initialState }) => {

  const {state, dispatch} = usePageStateContainerHook({ reducer, initialState });

  return (
      <PageStateContext.Provider value={state}>
        <PageDispatchContext.Provider value={dispatch}>
          {children}
        </PageDispatchContext.Provider>
      </PageStateContext.Provider>
  )


}

export default PageStateContainer;
