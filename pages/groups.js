import { getRunningGroups, getRunningMeetups } from "../lib/sheets";
import { snakeCase, meetupId } from "../lib/utils";
import styles from "../styles/Groups.module.css";
import NextLink from "next/link";

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
    if (!meetup) return <li className={styles.groupMeetup}>{children}</li>;

    return (
      <li className={styles.groupMeetup}>
        <NextLink href={`/#${meetupId(meetup)}`}>
          <a className={styles.groupMeetupLink}>{children}</a>
        </NextLink>
      </li>
    );
  };

  return (
    <ol className={styles.groupMeetups}>
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
  const Link = ({ link, text }) =>
    link ? (
      <NextLink href={link}>
        <a className={styles.link}>{text}</a>
      </NextLink>
    ) : null;
  return (
    <li key={snakeCase(group.name)} className={styles.group}>
      <h3 id={snakeCase(group.name)}>{group.name}</h3>
      <MeetupLinks meetups={meetups} />
      <p>{group.description}</p>
      <div className={styles.links}>
        <Link link={group.instagram} text="Instagram" />
        <Link link={group.twitter} text="Twitter" />
        <Link link={group.strava} text="Strava" />
        <Link link={group.website} text="Website" />
        <Link link={group.facebook} text="Facebook" />
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
    <main>
      <h2>Groups</h2>
      <ul className={styles.groupList}>
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
    </main>
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
