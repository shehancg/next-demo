import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/dist/client/link';

export default function Home({ formattedDate }: { formattedDate: string }) {
  return (
    <>
      <h1>Static page</h1>
      <p>This page is static. It was built on {formattedDate}.</p>
      <p>
      <Link href="./ssr">
          <a>About Page</a>
        </Link>
      </p>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}
