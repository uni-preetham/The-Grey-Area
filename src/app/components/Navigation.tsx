import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

export default function Navigation() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/process", label: "Process" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 md:py-8"
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-xl md:text-2xl tracking-wide hover:opacity-70 transition-opacity duration-300"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          The Grey Area
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-widest hover:opacity-70 transition-opacity duration-300 ${
                location.pathname === link.path ||
                (link.path === "/projects" && location.pathname.startsWith("/projects"))
                  ? "opacity-100"
                  : "opacity-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
