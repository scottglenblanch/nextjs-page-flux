import usePageSelector from "../../../fluxStateManagementSetup/usePageSelector";
import {usePageDispatch} from "../../../fluxStateManagementSetup/usePageDispatch";
import {updatePhrase} from "../../../pageStateManagement/page2/page2Actions";
import {useCallback} from "react";

const InputPhrase = () => {

  const pageDispatch = usePageDispatch();

  const phrase = usePageSelector(pageState => pageState?.phrase);

  const onInput = useCallback((e) => {

    const newPhrase = e?.target?.value;

    pageDispatch(updatePhrase(newPhrase));
  }, [phrase])

  return (
      <div>
        <label>Type in a phrase to see if it is a palindrome</label>
        <input type="text" onInput={onInput} value={phrase} />
      </div>

  )

};

export default InputPhrase;
