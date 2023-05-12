import Image from "next/image"

export const SignUpHeader = () => {
    return (
        <div>
            <h1>✦ ADAMANTINE</h1>
            <h1>NOTES ✦</h1>
            <Image src="/img/logohome.png" alt='logo' width={40} height={40} className={styles.logo} />
        </div>
    )
}
