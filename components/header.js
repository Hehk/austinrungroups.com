import H1 from "./h1";
import A from "./Link";
import NextLink from "next/link";

function Link({ href, text, route }) {
  if (href === route)
    return <span className="mr-4 underline underline-offset-4">{text}</span>;

  return (
    <A className="mr-4" href={href}>
      {text}
    </A>
  );
}

export default function Header({ route, ...rest }) {
  return (
    <header className="container max-w-3xl mx-auto px-4 pt-16 sm:flex justify-between">
      <H1>
        <NextLink href="/">Austin Running</NextLink>
      </H1>
      <nav>
        <Link href="/" text="Home" route={route} />
        <Link href="/groups" text="Groups" route={route} />
        <Link href="/events" text="Events & Races" route={route} />
        <Link href="/routes" text="Routes" route={route} />
        <Link href="/about" text="About" route={route} />
      </nav>
    </header>
  );
}
