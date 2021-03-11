import NavPiece from "../helperComponents/shared/navPiece/NavPiece";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section>
      <NavPiece />
      <section className={styles.container}>

        <h1>Home Page</h1>

        <div>
          Choose either Page 1 or Page 2 on the navbar
        </div>
      </section>
    </section>
  );
}
