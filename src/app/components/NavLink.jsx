import Link from 'next/link'

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block rounded py-2 pr-4 text-[#ADB7BE] hover:text-white sm:text-xl md:p-0"
    >
      {title}
    </Link>
  )
}

export default NavLink
