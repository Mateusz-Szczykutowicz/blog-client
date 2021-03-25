import { Link } from "react-router-dom";
import styles from "../styles/Login.module.scss";

import hamburgerMenu from "../img/hamburger.svg";
import arrow from "../img/arrow.svg";

const Login = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <main className={styles.content}>
                    <h2>Logowanie</h2>
                    <form action="#" method="post">
                        <input
                            type="text"
                            name="login"
                            id="login"
                            placeholder="Login"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Hasło"
                        />
                        <button type="submit">Zaloguj</button>
                    </form>
                    <div className={styles.linkWrapper}>
                        <Link to="/register">Zarejestruj się</Link>
                        <Link to="/recover">Zapomniałem hasła</Link>
                    </div>
                </main>
                <aside>
                    <div className={styles.back}>
                        <img src={arrow} alt="Powrót" />
                    </div>
                    <div className={styles.menu}>
                        <img src={hamburgerMenu} alt="Menu" />
                    </div>
                </aside>
            </div>
        </>
    );
};

export default Login;
