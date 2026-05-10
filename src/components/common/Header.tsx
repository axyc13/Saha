"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/", id: "nav-btn-home", label: "Home" },
  { href: "/whoweare", id: "nav-btn-wwa", label: "Who We Are" },
  { href: "/services", id: "nav-btn-svc", label: "Services" },
  { href: "/careers", id: "nav-btn-careers", label: "Careers" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const showBack = pathname !== "/";

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navClass = (href: string) => `nav-link${isActive(href) ? " active" : ""}`;

  return (
    <nav id="main-nav">
      <div className="nav-blur" />
      <Link className="nav-logo" href="/" id="global-nav-logo">
        saha.
      </Link>
      <div className="nav-center" id="nav-center">
        {navItems.map((item) => (
          <Link
            className={navClass(item.href)}
            href={item.href}
            id={item.id}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="nav-right">
        <button
          className={`nav-back-btn${showBack ? " visible" : ""}`}
          id="global-nav-back"
          onClick={() => router.back()}
          type="button"
        >
          Back
        </button>
        <Link className="nav-work-btn" href="/contactus" id="nav-btn-wuw">
          Work with us
        </Link>
      </div>
    </nav>
  );
}
