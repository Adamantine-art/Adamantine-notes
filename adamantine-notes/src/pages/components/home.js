import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export const AdamantineNotes = () => {
    return (
        <div className={styles.homepageContainer}>
            <header>
                <div className={styles.headerTitle}>
                    <p className={styles.homeTitle}>✦ USERNAMEs NOTES ✦</p>
                </div>
                
                <div className={styles.headerIcons}>
                    <Image src="/img/account.png" alt="account " width={50} height={50} className={styles.accountIcon} />
                    <Image src="/img/logout.png" alt="log out" width={50} height={50} className={styles.logoutIcon} />
                </div>
            </header>

            {/* <footer>
                <Image src="/img/logohome.png" alt='logo' width={35} height={35} className={styles.logo} />
            </footer> */}

        </div>
    )
}
