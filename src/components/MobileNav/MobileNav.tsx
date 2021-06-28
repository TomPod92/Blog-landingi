import { NavLink } from "react-router-dom";
import { config } from "../../config";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as PostsIcon } from "../../assets/icons/posts.svg";
import { ReactComponent as AboutIcon } from "../../assets/icons/about.svg";
import styles from "./styles.module.scss";

const MobileNav = () => {
    return (
        <ul className={styles["mobile-nav"]}>
            <li className={styles["mobile-nav__item"]}>
                <NavLink
                    to={config.routes.homepage}
                    activeClassName={styles["mobile-nav__item--active"]}
                    exact
                >
                    <HomeIcon />
                </NavLink>
            </li>
            <li className={styles["mobile-nav__item"]}>
                <NavLink
                    to={config.routes.posts}
                    activeClassName={styles["mobile-nav__item--active"]}
                    exact
                >
                    <PostsIcon />
                </NavLink>
            </li>
            <li className={styles["mobile-nav__item"]}>
                <NavLink
                    to={config.routes.about}
                    activeClassName={styles["mobile-nav__item--active"]}
                    exact
                >
                    <AboutIcon />
                </NavLink>
            </li>
        </ul>
    );
};

export default MobileNav;
