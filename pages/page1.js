import PageStateContainer from "../fluxStateManagementSetup/PageStateContainer";
import styles from "../styles/Home.module.css";
import InputName from "../helperComponents/page1/inputName/InputName";
import SelectHowToDisplayName from "../helperComponents/page1/selectHowToDisplayName/SelectHowToDisplayName";
import DisplayNamePiece from "../helperComponents/page1/displayNamePiece/DisplayNamePiece";
import NavPiece from "../helperComponents/shared/navPiece/NavPiece";
import {getPage1InitialState} from "../pageStateManagement/page1/page1InitialState";
import page1Reducer from "../pageStateManagement/page1/page1Reducer";
import PageHeader from "../helperComponents/shared/pageHeader/PageHeader";

export default function Page1() {

  return (
      <PageStateContainer initialState={getPage1InitialState()} reducer={page1Reducer}>
        <NavPiece />
        <section className={styles.container}>
          <PageHeader headerText="Page 1" />
          <InputName />
          <SelectHowToDisplayName />
          <DisplayNamePiece />
        </section>
      </PageStateContainer>
  )
}
