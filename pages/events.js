import { getEvents } from "../lib/sheets";
import styles from "../styles/Events.module.css";
import Link from "next/link";

function Event({ event }) {
  return (
    <li className={styles.event}>
      <div className={styles.title}>
        <h3 className={styles.name}>{event.name}</h3>
        <div className={styles.date}>{event.date.toDateString()}</div>
      </div>
      <p className={styles.description}>{event.description}</p>
      <p className={styles.distances}>{event.distances}</p>
      <div className={styles.footer}>
        {event.website ? <Link href={event.website}>Website</Link> : null}
        {event.instagram ? <Link href={event.instagram}>Instagram</Link> : null}
        {event.facebook ? <Link href={event.facebook}>Facebook</Link> : null}
        {event.twitter ? <Link href={event.twitter}>Twitter</Link> : null}
      </div>
    </li>
  );
}

export default function Events({ events }) {
  events = events
    .map((event) => {
      return {
        ...event,
        date: new Date(event.date),
      };
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <main>
      <h2>Races & Events</h2>
      <h3>
        This page is heavily WIP, don&apos;t expect anything here to be very
        trustworth!
      </h3>
      <ol className={styles.events}>
        {events.map((event) => (
          <Event key={event.name + event.date.toString()} event={event} />
        ))}
      </ol>
    </main>
  );
}

export async function getStaticProps() {
  const events = await getEvents();
  return {
    props: { events },
    // minute in dev, hour in prod
    revalidate: process.env.NODE_ENV === "development" ? 60 : 60 * 60,
  };
}
