import { getEvents } from "../lib/sheets";
import { snakeCase } from "../lib/utils";
import Link from "../components/Link";
import Content from "../components/Content";
import H3 from "../components/H3";
import H2 from "../components/H2";
import P from "../components/P";

function Event({ event }) {
  return (
    <li className="mb-8">
      <div className="flex justify-between">
        <H3>{event.name}</H3>
        <div>
          {event.date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
          {event.time ? ` at ${event.time}` : null}
        </div>
      </div>
      <P>{event.description}</P>
      {event.distances ? <P>{event.distances}</P> : null}
      {event.host ? (
        <P>
          Host:{" "}
          <Link href={`/groups/#${snakeCase(event.host)}`}>{event.host}</Link>
        </P>
      ) : null}
      <div className="flex">
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
    <ol>
      {events.map((event) => (
        <Event key={event.name + event.date.toString()} event={event} />
      ))}
    </ol>
  );
}

export default function EventsPage({ events }) {
  return (
    <Content>
      <H2>Races & Events</H2>
      <Events events={events} />
    </Content>
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
