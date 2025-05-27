import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-1/3 rounded-sm border border-slate-300">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">Michael Kramer</h1>
            <p className="py-6">
              Experienced Software Engineer with expertise in Full Stack
              development and a strong ability to learn and adapt to new
              technologies. Proven track record of building products from
              conception to implementation while evolving across platforms as
              technology advances. Passionate about leading teams, driving
              development, and mentoring junior engineers to foster growth.
            </p>
          </div>
        </div>
      </div>
      {/* <ul>
        <li>
          <Link to="/resume">View my resume</Link>
        </li>
        <li>
          <Link to="/rls">
            My first job was at RLS2000.com (2000–2016), which later merged into
            Elm Street Technology.
          </Link>
        </li>
        <li>
          <Link to="/notes">View my notes</Link>
        </li>
        <li>
          <Link to="/icons">Play with Icons</Link>
        </li>
      </ul> */}
    </>
  );
}
