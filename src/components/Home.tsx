//? styles
import styles from "../styles/Home.module.scss";

//? images
import LogoWhite from "../img/logo-white.svg";
import hamburgerMenu from "../img/hamburger.svg";
import blogHero from "../img/blog-hero.svg";
import message from "../img/message.svg";
import clock from "../img/clock.svg";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";
import linkedin from "../img/linkedin.svg";
import mail from "../img/mail.svg";
import logout from "../img/logout.svg";
import search from "../img/search.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <header>
                    <img src={LogoWhite} alt="Logo" />
                    <img
                        src={hamburgerMenu}
                        alt="Hamburger Menu"
                        className={styles.hamburger}
                        id="HamburgerManu"
                    />
                </header>
                <main>
                    <section className={styles.header}>
                        <h1>Blog</h1>
                        <h2>Tutaj poznasz PWA i SPA</h2>
                        <img src={blogHero} alt="Blog Hero" />
                    </section>
                    <section className={styles.topArticles}>
                        <h2>Popularne wpisy</h2>
                        <TopArticle />
                        <div className={styles.articleWrapper}>
                            <TopArticle />
                            <TopArticle />
                            <TopArticle />
                            <TopArticle />
                        </div>
                        <TopArticle />
                        <div className={styles.articleWrapper}>
                            <TopArticle />
                            <TopArticle />
                        </div>
                    </section>
                    <section className={styles.newArticles}>
                        <h2>Najnowsze</h2>
                        <NewArticle />
                        <NewArticle />
                        <NewArticle />
                        <NewArticle />
                        <NewArticle />
                    </section>
                </main>
                <footer>
                    <div className={styles.media}>
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={linkedin} alt="linkedin" />
                        <img src={mail} alt="mail" />
                    </div>
                    <h3>All rights reserved | Delta Storm</h3>
                </footer>
                <aside>
                    <Menu />
                </aside>
            </div>
        </>
    );
};

const TopArticle = () => {
    return (
        <>
            <article className={styles.topArticle}>
                <div className={styles.content}>
                    <div className={styles.tag}>
                        <p>News</p>
                        <span className={styles.background}></span>
                    </div>
                    <div className={styles.time}>
                        <img src={clock} alt="Zegar" />
                        <span>5 min</span>
                    </div>
                    <div className={styles.comments}>
                        <img src={message} alt="Komentarz" />
                        <span>3</span>
                    </div>
                </div>
                <p>Placeholder Article</p>
            </article>
        </>
    );
};

const NewArticle = () => {
    return (
        <>
            <div className={styles.newArticleWrapper}>
                <div className={styles.content}>
                    <div className={styles.tag}>
                        <p>News</p>
                        <span className={styles.background}></span>
                    </div>
                    <div className={styles.time}>
                        <img src={clock} alt="Zegar" />
                        <span>5 min</span>
                    </div>
                    <div className={styles.comments}>
                        <img src={message} alt="Komentarz" />
                        <span>3</span>
                    </div>
                </div>
                <p>At vero eos et accusamus</p>
            </div>
        </>
    );
};

const Menu = () => {
    //!
    // [tmp]
    const [active, setActive] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 1000);
        setTimeout(() => {
            setActive(false);
        }, 6000);
    }, []);
    return (
        <>
            <div
                className={`${styles.asaidWrapper} ${
                    active ? styles.active : ""
                }`}
            >
                <div className={styles.content}>
                    {false ? (
                        <Link to="#">Moje konto</Link>
                    ) : (
                        <Link to="#">Zaloguj</Link>
                    )}
                    <Link to="#">Strona Główna</Link>
                    <Link to="#">Kontakt</Link>
                    <form action="#" method="get">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Szukaj..."
                        />
                        <button type="submit">
                            <img src={search} alt="Wyszukaj" />
                        </button>
                    </form>
                </div>
                <button className={styles.logout}>
                    <img src={logout} alt="Wyloguj" />
                </button>
            </div>
        </>
    );
};

export default Home;
