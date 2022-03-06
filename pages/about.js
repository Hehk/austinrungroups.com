import Link from "next/link";
import { SPREADSHEET_LINK, GITHUB_REPO } from "../lib/constants";

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
      <h2>How to Help?</h2>
      <p>
        The main source of truth for this website is a{" "}
        <Link href={SPREADSHEET_LINK}>spreadsheet</Link>. If you see anything
        off feel free to reach out to me. If you REALLY want to help, I am open
        to giving out edit privileges.
      </p>
      <p>
        For people with some coding experience, the website is generated at this{" "}
        <Link href={GITHUB_REPO}>repo</Link>. The code is currently open and I
        will look through any pull requests, although I will not give any
        guarantees on a fast response time.
      </p>
    </main>
  );
}
