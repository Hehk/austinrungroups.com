import Head from "next/head";
import { getRunningMeetups } from "../lib/sheets";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const spreadsheetLink =
  "https://docs.google.com/spreadsheets/d/1cy2U3JYRbCHj-KI-eszUZH2b5ZKNB5IJ2awiAny2Y8g/edit?usp=sharing";

const getMeetupsForADay = (day, meetups) => {
  return meetups
    .filter((meetup) => meetup.day_of_the_week === day)
    .sort((a, b) => {
      return new Date(a.time) > new Date(b.time);
    });
};
function Meetups({ meetups }) {
  return (
    <ol>
      {meetups.map((meetup) => {
        return (
          <li>
            <div>{meetup.running_group}</div>
            <p>{meetup.time}</p>
            <p>{meetup.description}</p>
            <p>{meetup.location}</p>
          </li>
        );
      })}
    </ol>
  );
}

export default function Home({ meetups }) {
  return (
    <>
      <Head>
        <title>Austin Run Groups</title>
        <meta
          name="description"
          content="An index of all the running groups in austin"
        />
        <link rel="icon" href="/running.svg" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Austin Run Groups</h1>
        <nav>
          <Link href="/groups">
            <a className={styles.navLink}>Groups</a>
          </Link>
          <Link className={styles.navLink} href="/events">
            <a className={styles.navLink}>Events & Races</a>
          </Link>
          <Link className={styles.navLink} href="/contact">
            <a className={styles.navLink}>Contact</a>
          </Link>
          <Link className={styles.navLink} href={spreadsheetLink}>
            <a className={styles.navLink}>Spreadsheet</a>
          </Link>
        </nav>
        <p>
          Note: This is a work in progress, please reach out if anything is
          missing or wrong!
        </p>
      </header>
      <main className={styles.main}>
        <h2>Monday</h2>
        <Meetups meetups={getMeetupsForADay("Monday", meetups)} />
        <h2>Tuesday</h2>
        <Meetups meetups={getMeetupsForADay("Tuesday", meetups)} />
        <h2>Wednesday</h2>
        <Meetups meetups={getMeetupsForADay("Wednesday", meetups)} />
        <h2>Thursday</h2>
        <Meetups meetups={getMeetupsForADay("Thursday", meetups)} />
        <h2>Friday</h2>
        <Meetups meetups={getMeetupsForADay("Friday", meetups)} />
        <h2>Saturday</h2>
        <Meetups meetups={getMeetupsForADay("Saturday", meetups)} />
        <h2>Sunday</h2>
        <Meetups meetups={getMeetupsForADay("Sunday", meetups)} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const meetups = await getRunningMeetups();
  return {
    props: {
      meetups,
    },
    revalidate: 1,
  };
}
