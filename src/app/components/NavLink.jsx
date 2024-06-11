import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="'block py-2 pl-3 pr-4 mb-8  bg-[#E2D6AF] text-[#1C5C2D] font-serif rounded-full sm-text-xl hover:bg-slate-200 place-content-center '"
    >
      {title}
    </Link>
  );
};

export default NavLink;