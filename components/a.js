import Link from 'next/link'


export default function A ({ className, children, ...rest }) {
  const cls = className ? ' ' + className : ''
  return <Link {...rest}>
    <a className={`underline decoration-indigo-400 hover:text-indigo-400${cls}`}>{children}</a>
  </Link>
}
