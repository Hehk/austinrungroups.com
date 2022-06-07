import { SPREADSHEET_LINK, GITHUB_REPO } from "../lib/constants";
import Content from "../components/content";
import H2 from "../components/h2";
import P from "../components/p";
import A from "../components/a";

export default function Contact() {
  return (
    <Content>
      <H2>About</H2>
      <P>
        This website was created by{" "}
        <A href="https://www.strava.com/athletes/25975441">Kyle Henderson</A>. I
        am the guy with a border collie named Reg (He usually goes by Greg).
      </P>
      <H2>How to Help?</H2>
      <P>
        The main source of truth for this website is a{" "}
        <A href={SPREADSHEET_LINK}>spreadsheet</A>. If you see anything off feel
        free to reach out to me. If you REALLY want to help, I am open to giving
        out edit privileges.
      </P>
      <P>
        For people with some coding experience, the website is generated at this{" "}
        <A href={GITHUB_REPO}>repo</A>. The code is currently open and I will
        look through any pull requests, although I will not give any guarantees
        on a fast response time.
      </P>
    </Content>
  );
}
