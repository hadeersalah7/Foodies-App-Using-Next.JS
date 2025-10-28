import Link from "next/link";
import headerLogo from "@/assets/logo.png";
import styles from "./MainHeader.module.css"
import Image from "next/image";
const MainHeader = () => {
    return (
        <header className={styles.header}>
            {/*Main logo */}
            <Link href="/" className={styles.logo}>
                <Image src={headerLogo} alt="A plate with food on it" priority/>
                NextLevel Food
            </Link>

            {/* Navbar */}
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>

                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
