import Link from 'next/link';

export default function Timeline() {
  return (
    <>
      <h1>This is the timeline</h1>
      <Link href='/'>
        <a>Go home</a>
      </Link>
      <style jsx>{`
        h1 {
          font-size: 2rem;
          color: #888;
        }
      `}</style>
    </>
  );
}
