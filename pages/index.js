import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> الفقه الشافعية</title>
        <meta name="description" content=" قسم الفقه وأصوله" />
        
      </Head>

      <main className={styles.main}>
        
<h1>bismi</h1>
<Link href="/fatwa/ask">
<button >Ask </button>
</Link>
        
 

         
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
