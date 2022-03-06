import { getEvents } from "../lib/sheets";
import { snakeCase } from "../lib/utils";
import styles from "../styles/Events.module.css";
import Link from "next/link";

function Event({ event }) {
  return (
    <li className={styles.event}>
      <div className={styles.title}>
        <h3 className={styles.name}>{event.name}</h3>
        <div className={styles.date}>
          {event.date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
          {event.time ? ` at ${event.time}` : null}
        </div>
      </div>
      <p className={styles.description}>{event.description}</p>
      {event.distances ? (
        <p className={styles.distances}>{event.distances}</p>
      ) : null}
      {event.host ? (
        <p className={styles.host}>
          Host:{" "}
          <Link href={`/groups/#${snakeCase(event.host)}`}>{event.host}</Link>
        </p>
      ) : null}
      <div className={styles.footer}>
        {event.website ? <Link href={event.website}>Website</Link> : null}
        {event.instagram ? <Link href={event.instagram}>Instagram</Link> : null}
        {event.facebook ? <Link href={event.facebook}>Facebook</Link> : null}
        {event.twitter ? <Link href={event.twitter}>Twitter</Link> : null}
      </div>
    </li>
  );
}

export function Events({ events }) {
  events = events
    .map((event) => {
      return {
        ...event,
        date: new Date(event.date),
      };
    })
    .filter((event) => event.date > new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <ol className={styles.events}>
      {events.map((event) => (
        <Event key={event.name + event.date.toString()} event={event} />
      ))}
    </ol>
  );
}

export default function EventsPage({ events }) {
  return (
    <main>
      <h2>Races & Events</h2>
      <h3>
        I have not done a thorough check of upcoming events, this is in no way a
        complete list!
      </h3>
      <Events events={events} />
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
