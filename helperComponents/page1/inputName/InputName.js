import usePageSelector from "../../../fluxStateManagementSetup/usePageSelector";
import {usePageDispatch} from "../../../fluxStateManagementSetup/usePageDispatch";
import {updateName} from "../../../pageStateManagement/page1/page1Actions";

const InputName = () => {

  const pageDispatch = usePageDispatch();

  const name = usePageSelector(pageState => pageState.name);

  const onInput = (e) => {

    const newName = e?.target?.value;
    //
    pageDispatch(updateName(newName));
  }

  return (
      <div>
        <label>Type in a name</label>
        <input type="text" value={name} onInput={onInput}/>
      </div>

  )
}

export default InputName;
