import usePageSelector from "../../../fluxStateManagementSetup/usePageSelector";
import {usePageDispatch} from "../../../fluxStateManagementSetup/usePageDispatch";
import {useCallback, useEffect, useState} from "react";
import {updateSelectedDisplayOption} from "../../../pageStateManagement/page1/page1Actions";

const SelectOptionItem = ({ displayOption }) => {

  function getIsChecked() {
    return selectedDisplayOption === displayOption;
  }


  const pageDispatch = usePageDispatch();

  const selectedDisplayOption = usePageSelector(pageState => pageState?.selectedDisplayOption);

  const [isChecked, setIsChecked] = useState(getIsChecked());


  useEffect(() => {
    const newIsChecked = getIsChecked();

    setIsChecked(newIsChecked);
  })

  const onClick = useCallback(() => {

    pageDispatch(updateSelectedDisplayOption(displayOption));

  }, [displayOption]);


  return (
      <div onClick={onClick}>

        <input type="radio" value={displayOption} checked={isChecked}/>
        <label>{ displayOption }</label>
      </div>
  );
}

export default SelectOptionItem;