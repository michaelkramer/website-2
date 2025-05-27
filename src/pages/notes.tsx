import { Link, Outlet } from "react-router";

export default function Component() {
  return (
    <>
      <ul className="menu menu-horizontal bg-base-200 rounded-box">
        <li>
          <Link to="/notes/grpccode">gRpc Client</Link>
        </li>
        <li>
          <Link to="/notes/git">git tricks</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
