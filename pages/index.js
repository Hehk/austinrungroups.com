import { getRunningMeetups, getEvents } from "../lib/sheets";
import { meetupId, snakeCase } from "../lib/utils";
import { Events } from "./events";
import Link from "../components/Link";
import H2 from "../components/H2";
import Content from "../components/Content";

const getMeetupsForADay = (day, meetups) => {
  const date = (time) => new Date(`01/01/2022 ${time}`);
  return meetups
    .filter((meetup) => meetup.day_of_the_week === day)
    .sort((a, b) => {
      return date(a.time) - date(b.time);
    });
};
function Meetups({ meetups }) {
  return (
    <ol className="mb-16">
      {meetups.map((meetup) => {
        const key = meetupId(meetup);
        return (
          <li
            key={key}
            className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-4"
            id={key}
          >
            <div className="w-24 flex-none col-span-1 leading-8">
              {meetup.time}
            </div>
            <div className="col-span-2 sm:col-span-5">
              <Link
                className="mb-2 block"
                href={`/groups/#${snakeCase(meetup.running_group)}`}
              >
                {meetup.running_group}
              </Link>
              <p className="leading-6 mb-2">{meetup.description}</p>
              <p className="leading-6 mb-2">Location: {meetup.location}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function Home({ meetups, events }) {
  // next 14 days
  const later = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
  events = events.filter((event) => {
    const date = new Date(event.date);
    if (date < new Date()) {
      return false;
    } else if (date > later) {
      return false;
    } else {
      return true;
    }
  });

  return (
    <Content>
      {events.length > 0 ? (
        <>
          <H2>Upcoming Events</H2>
          <Events events={events} />
        </>
      ) : null}
      <H2>Monday</H2>
      <Meetups meetups={getMeetupsForADay("Monday", meetups)} />
      <H2>Tuesday</H2>
      <Meetups meetups={getMeetupsForADay("Tuesday", meetups)} />
      <H2>Wednesday</H2>
      <Meetups meetups={getMeetupsForADay("Wednesday", meetups)} />
      <H2>Thursday</H2>
      <Meetups meetups={getMeetupsForADay("Thursday", meetups)} />
      <H2>Friday</H2>
      <Meetups meetups={getMeetupsForADay("Friday", meetups)} />
      <H2>Saturday</H2>
      <Meetups meetups={getMeetupsForADay("Saturday", meetups)} />
      <H2>Sunday</H2>
      <Meetups meetups={getMeetupsForADay("Sunday", meetups)} />
    </Content>
  );
}

export async function getStaticProps() {
  const events = await getEvents();
  const meetups = await getRunningMeetups();
  return {
    props: {
      meetups,
      events,
    },
    // minute in dev, hour in prod
    revalidate: process.env.NODE_ENV === "development" ? 60 : 60 * 60,
  };
}
