import Link from "next/link";
import styles from './NavPiece.module.css';

const NavPiece = () => {
  return (
      <nav className={styles.nav}>

        <Link href="/">
          <a>
            Home Page
          </a>
        </Link>

        <Link href="page1">
          <a >
            Page 1
          </a>
        </Link>

        <Link href="page2">
          <a >
            Page 2
          </a>
        </Link>

      </nav>
  )
}

export default NavPiece;
