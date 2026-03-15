import Link from "next/link";

type linksProps = { href: string; label: string };

const links: linksProps[] = [
  { href: "/dashboard", label: "Dashboard" },
  /* here goes the other links */
];

const Sidenav = () => {
  return (
    <nav>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Sidenav;
