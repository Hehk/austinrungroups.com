import Link from "next/link";

export default function A({ className, children, ...rest }) {
  const cls = className ? " " + className : "";
  return (
    <Link
      {...rest}
      className={`underline decoration-green-400 hover:text-green-400 underline-offset-4 ${cls} leading-8`}
    >
      {children}
    </Link>
  );
}
