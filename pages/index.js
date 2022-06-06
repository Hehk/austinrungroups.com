import { getRunningMeetups, getEvents } from "../lib/sheets";
import { meetupId, snakeCase } from "../lib/utils";
import { Events } from "./events";
import A from '../components/a'
import H2 from '../components/h2'
import H3 from '../components/h3'
import Content from '../components/content'

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
    <ol className="mb-4">
      {meetups.map((meetup) => {
        const key = meetupId(meetup);
        return (
          <li key={key} className="flex mb-4" id={key}>
            <div className="w-24 flex-none">{meetup.time}</div>
            <div>
              <A href={`/groups/#${snakeCase(meetup.running_group)}`}>
                {meetup.running_group}
              </A>
              <p>{meetup.description}</p>
              <p>Location: {meetup.location}</p>
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
      <H2>Weekly Meetups</H2>
      <H3>Monday</H3>
      <Meetups meetups={getMeetupsForADay("Monday", meetups)} />
      <H3>Tuesday</H3>
      <Meetups meetups={getMeetupsForADay("Tuesday", meetups)} />
      <H3>Wednesday</H3>
      <Meetups meetups={getMeetupsForADay("Wednesday", meetups)} />
      <H3>Thursday</H3>
      <Meetups meetups={getMeetupsForADay("Thursday", meetups)} />
      <H3>Friday</H3>
      <Meetups meetups={getMeetupsForADay("Friday", meetups)} />
      <H3>Saturday</H3>
      <Meetups meetups={getMeetupsForADay("Saturday", meetups)} />
      <H3>Sunday</H3>
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
