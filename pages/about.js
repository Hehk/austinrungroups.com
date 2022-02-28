import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <h2>About</h2>
      <p>
        This website was created by{" "}
        <Link href="https://www.strava.com/athletes/25975441">
          Kyle Henderson
        </Link>
        . I am the guy with a border collie named Reg (He usually goes by Greg).
      </p>
      <p>
        This whole website builds off the spreadsheet linked above. I am going
        to setup a{" "}
        <Link href="mailto:kyle@austinrungroups.com">
          kyle@austinrungroups.com
        </Link>{" "}
        email but if you need to get in contact with me quickly, I am usually at
        ESBR and sometimes are Morning Jo&apos;s.
      </p>
    </main>
  );
}
