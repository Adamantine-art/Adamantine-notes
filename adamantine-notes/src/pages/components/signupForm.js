import Image from "next/image"

export const SignUpForm = () => {
    return (
        <div>
            <form action="">
                <h3>SIGN UP</h3>
                <div>
                    <Image src="/img/email.png" alt='logo' width={15} height={15} className={styles.logo} />
                    <input type="text" placeholder="email@example.com" />
                </div>
                <div>
                    <Image src="/img/lock.png" alt='logo' width={40} height={40} className={styles.logo} />
                    <input type="password" placeholder="**********" />
                </div>
                <button>Sign up with Google</button>
                <button>Sign up</button>
            </form>
        </div>
    )
}