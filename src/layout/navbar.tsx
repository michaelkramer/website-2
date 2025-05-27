import icon from "../assets/me.svg";
import { Icon, IconThemes } from "../components/icons";
import { useAppContext } from "./provider";

export const navItems = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Resume",
    route: "/resume",
  },
  {
    name: "RLS2000",
    route: "/rls",
  },
  {
    name: "Notes",
    route: "/notes",
  },
  {
    name: "Icons",
    route: "/icons",
  },
  // {
  //   name: "Contact",
  //   route: "/contact",
  // },
];

export function Navbar() {
  const { iconTheme, toggleTheme } = useAppContext();
  const [icon_theme, setIconTheme] = iconTheme;

  return (
    <div data-theme="light" className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.route}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="text-xl">
          <img src={icon} width={64} height={64} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex md:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.route}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="navbar-end flex flex-col
"
      >
        <div>
          <label className="flex cursor-pointer gap-2 items-center">
            <Icon name="Sun" theme={iconTheme[0]} />
            <input
              type="checkbox"
              onClick={toggleTheme}
              className="toggle theme-controller"
            />
            <Icon name="Moon" theme={iconTheme[0]} />
          </label>
        </div>

        <div className="join pt-1">
          {IconThemes.map((theme) => (
            <button
              className={
                "btn btn-xs join-item" +
                (icon_theme === theme.value ? " btn-active" : "")
              }
              onClick={() => setIconTheme(theme.value)}
              key={theme.label}
            >
              <theme.icon />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
