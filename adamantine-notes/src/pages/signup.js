import Head from 'next/head'
import { SignUpHeader } from './components/adamantineNotes'
import { SignUpForm } from './components/signupForm'

export default function Signup() {
    return (
      <>
        <Head>
          <title>✦ Adamantine Notes ✦</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.mainSignUp}>
        <div className={styles.signUpHeader}>
          <SignUpHeader />
        </div>
        <div className={styles.signUpForm}>
            <SignUpForm />
        </div>
        </main>
      </>
    )
  }
  // De acá usar enrutador para redireccionar a pág principal -index-