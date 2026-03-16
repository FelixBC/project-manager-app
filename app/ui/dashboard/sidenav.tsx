import Link from "next/link";

type linksProps = { href: string; label: string };

const links: linksProps[] = [
  { href: "/", label: "Dashboard" },
  { href: "/dashboard/projects", label: "Projects" },
  { href: "/dashboard/todos", label: "Todos" },
  { href: "/dashboard/reminders", label: "Reminders" },
];

const Sidenav = () => {
  return (
    <nav className="flex flex-col gap-2 p-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
    </nav>
  );
};

export default Sidenav;
