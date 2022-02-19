import { getRunningMeetups } from "../lib/sheets";
import styles from "../styles/Home.module.css";

const getMeetupsForADay = (day, meetups) => {
  const date = (time) => new Date(`01/01/2022 ${time}`);
  return meetups
    .filter((meetup) => meetup.day_of_the_week === day)
    .sort((a, b) => {
      return date(a.time) > date(b.time);
    });
};
function Meetups({ meetups }) {
  return (
    <ol className={styles.meetups}>
      {meetups.map((meetup) => {
        return (
          <li key={meetup.groupName + meetup.time} className={styles.meetup}>
            <div className={styles.timestamp}>{meetup.time}</div>
            <div>
              <div className={styles.groupName}>{meetup.running_group}</div>
              <p>{meetup.description}</p>
              <p>Location: {meetup.location}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function Home({ meetups }) {
  return (
    <main>
      <h2>Weekly Meetups</h2>
      <h3>Monday</h3>
      <Meetups meetups={getMeetupsForADay("Monday", meetups)} />
      <h3>Tuesday</h3>
      <Meetups meetups={getMeetupsForADay("Tuesday", meetups)} />
      <h3>Wednesday</h3>
      <Meetups meetups={getMeetupsForADay("Wednesday", meetups)} />
      <h3>Thursday</h3>
      <Meetups meetups={getMeetupsForADay("Thursday", meetups)} />
      <h3>Friday</h3>
      <Meetups meetups={getMeetupsForADay("Friday", meetups)} />
      <h3>Saturday</h3>
      <Meetups meetups={getMeetupsForADay("Saturday", meetups)} />
      <h3>Sunday</h3>
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
    // minute in dev, hour in prod
    revalidate: process.env.NODE_ENV === "development" ? 60 : 60 * 60,
  };
}
