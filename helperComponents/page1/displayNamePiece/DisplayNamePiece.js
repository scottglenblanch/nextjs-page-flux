import usePageSelector from "../../../fluxStateManagementSetup/usePageSelector";
import {useEffect, useState} from "react";
import {getDisplayName} from "../../../services/page1/page1Services";


const DisplayNamePiece = () => {


  const name = usePageSelector(pageState => pageState?.name );

  const selectedDisplayOption = usePageSelector(pageState => pageState?.selectedDisplayOption);

  const [displayName, setDisplayName] = useState(getDisplayName({selectedDisplayOption, name}));

  useEffect(() => {

    const newDisplayName = getDisplayName({selectedDisplayOption, name});

    setDisplayName(newDisplayName);

  },[name, selectedDisplayOption])

  return (
      <div>
        {displayName}
      </div>
  )
};

export default DisplayNamePiece;
