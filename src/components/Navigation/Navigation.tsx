import React from "react";
import { NavLink } from "react-router-dom";
import { config } from "../../config";
import styles from "./styles.module.scss";

const Navigation = () => {
    return (
        <ul className={styles["navigation"]}>
            <li className={styles["navigation__item"]}>
                <NavLink
                    to={config.routes.homepage}
                    activeClassName={styles["navigation__item--active"]}
                    exact
                >
                    Home
                </NavLink>
            </li>
            <li className={styles["navigation__item"]}>
                <NavLink
                    to={config.routes.posts}
                    activeClassName={styles["navigation__item--active"]}
                    exact
                >
                    Posts
                </NavLink>
            </li>
            <li className={styles["navigation__item"]}>
                <NavLink
                    to={config.routes.about}
                    activeClassName={styles["navigation__item--active"]}
                    exact
                >
                    About us
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;
