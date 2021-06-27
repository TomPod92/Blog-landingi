import Navigation from "../Navigation/Navigation";
import UserNav from "../UserNav";
import styles from "./styles.module.scss";

const Header = () => {
    return (
        <header className={styles["header"]}>
            <span className={styles["header__logo"]}>My Blog</span>
            <Navigation />
            <UserNav />
        </header>
    );
};

export default Header;
