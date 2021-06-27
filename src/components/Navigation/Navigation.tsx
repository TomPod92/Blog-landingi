import React from "react";
import { NavLink } from "react-router-dom";
import { config } from "../../config";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as PostsIcon } from "../../assets/icons/posts.svg";
import { ReactComponent as AboutIcon } from "../../assets/icons/about.svg";
import styles from "./styles.module.scss";

const Navigation = () => {
    return (
        <ul className={styles["navigation"]}>
            <li className={styles["navigation__item"]}>
                <NavLink to={config.routes.homepage}>
                    Home
                    {/* <HomeIcon /> */}
                </NavLink>
            </li>
            <li className={styles["navigation__item"]}>
                <NavLink to={config.routes.posts}>
                    Posts
                    {/* <PostsIcon /> */}
                </NavLink>
            </li>
            <li className={styles["navigation__item"]}>
                <NavLink to={config.routes.about}>
                    About us
                    {/* <AboutIcon /> */}
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;
