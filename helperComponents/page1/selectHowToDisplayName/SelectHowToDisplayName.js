import SelectOptionItem from "../selectOptionItem/SelectOptionItem";
import {displayOptions} from "../../../miscellaneous/page1/displayOptions/displayOptions";


const SelectHowToDisplayName = () => {



  return (
      <div>
        {
          displayOptions.map((displayOption, key) => (
            <SelectOptionItem displayOption={displayOption} key={key}/>
          ))
        }
      </div>
  )

};

export default SelectHowToDisplayName;    