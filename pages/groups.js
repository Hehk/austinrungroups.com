import { getRunningGroups, getRunningMeetups } from "../lib/sheets";
import { snakeCase, meetupId } from "../lib/utils";
import NextLink from "next/link";
import Link from "../components/link";
import H3 from "../components/h3";
import H2 from "../components/h2";
import Content from "../components/content";

// This could probably be made one line
const dayToNum = (day) => {
  switch (day) {
    case "Monday":
      return 0;
    case "Tuesday":
      return 1;
    case "Wednesday":
      return 2;
    case "Thursday":
      return 3;
    case "Friday":
      return 4;
    case "Saturday":
      return 5;
    case "Sunday":
      return 6;
    default:
      return -1;
  }
};

function MeetupLinks({ meetups }) {
  const days = [...Array(7)];
  meetups.forEach((meetup) => {
    const day = dayToNum(meetup.day_of_the_week);
    days[day] = meetup;
  });
  const MeetupLink = ({ meetup, children }) => {
    if (!meetup)
      return (
        <li className="rounded h-6 w-6 text-center bg-gray-400 mr-2">
          {children}
        </li>
      );

    return (
      <li>
        <NextLink
          href={`/#${meetupId(meetup)}`}
          className="rounded block bg-green-400 h-6 w-6 text-center mr-2"
        >
          {children}
        </NextLink>
      </li>
    );
  };

  return (
    <ol className="mb-4 flex">
      <MeetupLink meetup={days[0]}>M</MeetupLink>
      <MeetupLink meetup={days[1]}>T</MeetupLink>
      <MeetupLink meetup={days[2]}>W</MeetupLink>
      <MeetupLink meetup={days[3]}>T</MeetupLink>
      <MeetupLink meetup={days[4]}>F</MeetupLink>
      <MeetupLink meetup={days[5]}>S</MeetupLink>
      <MeetupLink meetup={days[6]}>S</MeetupLink>
    </ol>
  );
}

function Group({ group, meetups }) {
  const L = ({ link, text }) =>
    link ? (
      <Link className="mr-4" href={link}>
        {text}
      </Link>
    ) : null;
  return (
    <li className="mb-8" key={snakeCase(group.name)}>
      <H3 id={snakeCase(group.name)}>{group.name}</H3>
      <MeetupLinks meetups={meetups} />
      {group.description ? (
        <p className="leading-6 mb-2">{group.description}</p>
      ) : null}
      <div className="mb-2">
        <L link={group.instagram} text="Instagram" />
        <L link={group.twitter} text="Twitter" />
        <L link={group.strava} text="Strava" />
        <L link={group.website} text="Website" />
        <L link={group.facebook} text="Facebook" />
      </div>
    </li>
  );
}

export default function Groups({ groups, meetups }) {
  const meetupsByGroup = {};
  meetups.forEach((meetup) => {
    const id = snakeCase(meetup.running_group);
    if (!meetupsByGroup[id]) meetupsByGroup[id] = [];
    meetupsByGroup[id].push(meetup);
  });
  return (
    <Content>
      <H2>Groups</H2>
      <ul>
        {groups
          .sort((a, b) => a.name > b.name)
          .map((group) => (
            <Group
              key={group.name}
              meetups={meetupsByGroup[snakeCase(group.name)]}
              group={group}
            />
          ))}
      </ul>
    </Content>
  );
}

export async function getStaticProps() {
  const groups = await getRunningGroups();
  const meetups = await getRunningMeetups();
  return {
    props: {
      groups,
      meetups,
    },
    // minute in dev, hour in prod
    revalidate: process.env.NODE_ENV === "development" ? 60 : 60 * 60,
  };
}
