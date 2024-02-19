import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex gap-3">
      <Link href={"/"}>Home</Link>
      <Link href={"/pages/dashboard"}>Dashboards</Link>
      <Link href={"/pages/settings"}>Settings</Link>
    </div>
  );
};

export default Navbar;
