import PageStateContainer from "../fluxStateManagementSetup/PageStateContainer";
import NavPiece from "../helperComponents/shared/navPiece/NavPiece";
import {getPage2InitialState} from "../pageStateManagement/page2/page2InitialState";
import page2Reducer from "../pageStateManagement/page2/page2Reducer";
import InputPhrase from "../helperComponents/page2/inputPhrase/InputPhrase";
import styles from "../styles/Home.module.css";
import PageHeader from "../helperComponents/shared/pageHeader/PageHeader";
import MessagePiece from "../helperComponents/page2/messagePiece/MessagePiece";

const Page2 = () => {
  return (
      <PageStateContainer initialState={getPage2InitialState()} reducer={page2Reducer}>
        <NavPiece />
        <section className={styles.container}>
          <PageHeader headerText="Page 2" />
          <InputPhrase />
          <MessagePiece />
        </section>

      </PageStateContainer>
  )
};

export default Page2;
