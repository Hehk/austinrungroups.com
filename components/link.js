import NextLink from "next/link";

export default function Link({ className, children, ...rest }) {
  const cls = className ? " " + className : "";
  return (
    <NextLink
      {...rest}
      className={`underline decoration-green-400 hover:text-green-400 underline-offset-4 ${cls} leading-8`}
    >
      {children}
    </NextLink>
  );
}
