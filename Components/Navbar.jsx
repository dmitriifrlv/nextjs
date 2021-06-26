import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image width="40" height="40" src="/People.svg" alt="clients logo" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/clients">Client Listing</Link>
    </nav>
  );
};

export default Navbar;
