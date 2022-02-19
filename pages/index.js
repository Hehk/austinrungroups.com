import Head from "next/head";
import { getRunningMeetups } from "../lib/sheets";
import styles from "../styles/Home.module.css";

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
