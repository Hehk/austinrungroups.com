import H1 from "./h1";
import A from "./a";

export default function Header() {
  return (
    <header className="container max-w-3xl mx-auto px-4 pt-8">
      <H1>Austin Running</H1>
      <nav>
        <A className="mr-4" href="/">
          Home
        </A>
        <A className="mr-4" href="/groups">
          Groups
        </A>
        <A className="mr-4" href="/events">
          Events & Races
        </A>
        <A href="/about">About</A>
      </nav>
    </header>
  );
}
