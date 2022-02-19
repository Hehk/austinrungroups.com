import { getRunningGroups } from "../lib/sheets";
import styles from "../styles/Groups.module.css";
import NextLink from "next/link";

function Group({ group }) {
  const Link = ({ link, text }) =>
    link ? (
      <NextLink href={link}>
        <a className={styles.link}>{text}</a>
      </NextLink>
    ) : null;
  return (
    <li className={styles.group}>
      <h3>{group.name}</h3>
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

export default function Groups({ groups }) {
  return (
    <main>
      <h2>Groups</h2>
      <ul className={styles.groupList}>
        {groups
          .sort((a, b) => a.name > b.name)
          .map((group) => (
            <Group key={group.name} group={group} />
          ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const groups = await getRunningGroups();
  return {
    props: {
      groups,
    },
    // minute in dev, hour in prod
    revalidate: process.env.NODE_ENV === "development" ? 60 : 60 * 60,
  };
}
