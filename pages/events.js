import { getEvents } from "../lib/sheets";
import { snakeCase } from "../lib/utils";
import A from "../components/a";
import Content from "../components/content";
import H3 from "../components/h3";
import H2 from "../components/h2";
import P from "../components/p";

function Event({ event }) {
  return (
    <li className="mb-4">
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
          Host: <A href={`/groups/#${snakeCase(event.host)}`}>{event.host}</A>
        </P>
      ) : null}
      <div className="flex">
        {event.website ? <A href={event.website}>Website</A> : null}
        {event.instagram ? <A href={event.instagram}>Instagram</A> : null}
        {event.facebook ? <A href={event.facebook}>Facebook</A> : null}
        {event.twitter ? <A href={event.twitter}>Twitter</A> : null}
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
      <H3>
        I have not done a thorough check of upcoming events, this is in no way a
        complete list!
      </H3>
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
