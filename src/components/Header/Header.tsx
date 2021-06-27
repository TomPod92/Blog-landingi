import React from "react";
import { User } from "../../types";

interface Props {
    user: User;
    login: () => void;
    logout: () => void;
}

const Header = ({ user, login, logout }: Props) => {
    const test = () => login();
    const test1 = () => logout();
    return (
        <>
            <header>My blog</header>
            <button onClick={test}>Login</button>
            <button onClick={test1}>Logout</button>
        </>
    );
};

export default Header;
