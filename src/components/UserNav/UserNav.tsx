import { User } from "../../types";
import styles from "./styles.module.scss";

interface Props {
    user: User;
    login: () => void;
    logout: () => void;
}

const UserNav = ({ user, login, logout }: Props) => {
    const handleAuthentication = () => {
        user.id ? logout() : login();
    };

    return (
        <div className={styles["usernav"]}>
            {user.id && (
                <p className={styles["usernav__user"]}>Hello {user.name}</p>
            )}

            <button
                className={styles["usernav__button"]}
                onClick={handleAuthentication}
            >
                {user.id ? "Logout" : "Login"}
            </button>
        </div>
    );
};

export default UserNav;
