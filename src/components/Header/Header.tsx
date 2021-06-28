import Navigation from "../Navigation/Navigation";
import UserNav from "../UserNav";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { config } from "../../config";

const Header = () => {
    return (
        <header className={styles["header"]}>
            <Link
                to={config.routes.homepage}
                className={styles["header__logo"]}
            >
                My Blog
            </Link>
            <Navigation />
            <UserNav />
        </header>
    );
};

export default Header;
