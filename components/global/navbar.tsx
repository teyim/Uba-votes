import Link from 'next/link';

function Navbar() {
  return (
    <nav className="max-w-screen-2xl text-2xl font-unbounded px-20">
      <ul>
        <Link href="/" passHref>
          <li>
            <span className="font-semibold text-orange-300">U</span>ba-votes
          </li>
        </Link>
      </ul>
    </nav>
  );
}
export default Navbar;
