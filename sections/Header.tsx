import Link from "next/link";

export const Header = () => {
  return (
    <div className="fixed top-3 z-10 flex w-full items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
        <Link className="nav-item" href="#">
          Home
        </Link>
        <Link className="nav-item" href="#">
          Projects
        </Link>
        <Link className="nav-item" href="#">
          About
        </Link>
        <Link
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
