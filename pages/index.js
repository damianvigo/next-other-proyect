import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>devter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href='https://nextjs.org'>devter</a>
        </h1>
        <nav>
          <Link href='/timeline'>
            <a>timeline</a>
          </Link>
        </nav>
      </main>

      <style jsx>{`
        nav {
          font-size: 3rem;
          text-align: center;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
