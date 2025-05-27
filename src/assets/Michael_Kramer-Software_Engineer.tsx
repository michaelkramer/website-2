import { ReactNode, useContext } from "react";
import { Icon } from "../components/icons";
import { IconTheme } from "../components/icons/IconTheme";
import { AppContext } from "../layout/provider";

const Company: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h4>
    <div className="font-bold text-xl">{children}</div>
  </h4>
);

const Section: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="mb-4 ml-6">{children}</div>
);

const SectionTitle: React.FC<{
  iconName: string;
  iconTheme: IconTheme;
  title: string;
}> = ({ iconName, iconTheme, title }) => (
  <h3>
    <div className="flex items-center font-bold text-xl mb-3">
      <div className="pr-1">
        <Icon name={iconName} theme={iconTheme} />
      </div>
      {title}
    </div>
  </h3>
);

export const ResumeHtml = () => {
  const appContext = useContext(AppContext);
  const [iconTheme] = appContext?.iconTheme ?? [IconTheme.antd];
  return (
    <>
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <td>
              <h1 className="text-3xl font-bold">Michael Kramer</h1>
              <div>Software Engineer</div>
            </td>
            <td className="text-right">
              Lancaster, MA <br />
              978.337.7711 <br />
              <a href="mailto:michaelrkramer@gmail.com">
                michaelrkramer@gmail.com
              </a>
            </td>
          </tr>

          <tr>
            <td colSpan={2} className="text-right">
              <a href="https://www.linkedin.com/in/michael-kramer-10154028">
                https://www.linkedin.com/in/michael-kramer-10154028
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <SectionTitle iconName="User" iconTheme={iconTheme} title="Profile" />
      <Section>
        Experienced Software Engineer with expertise in Full Stack development
        and a strong ability to learn and adapt to new technologies. Proven
        track record of building products from conception to implementation
        while evolving across platforms as technology advances. Passionate about
        leading teams, driving development, and mentoring junior engineers to
        foster growth.
      </Section>
      <SectionTitle iconName="Tools" iconTheme={iconTheme} title="Code" />
      <Section>
        <div>
          <span className="font-bold">Languages:</span> Typescript, JavaScript,
          C#, HTML, CSS, SQL
        </div>
        <div>
          <span className="font-bold">Frameworks:</span> React, Angular, NextJS,
          Tailwinds, jQuery, ASP.NET MVC
        </div>
        <div>
          <span className="font-bold">Databases:</span> MSSQL, Postgres, MySQL,
          MariaDb, NoSQL
        </div>
        <div>
          <span className="font-bold">Cloud Platforms:</span> Google Cloud,
          Azure, Amazon AWS, Docker, Kubernetes, WASM
        </div>
      </Section>
      <SectionTitle
        iconName="Briefcase"
        iconTheme={iconTheme}
        title="Employment History"
      />
      <Section>
        <Company>VividCloud, Brunswick, ME (Remote)</Company>
        <h5>
          <div className="flex">
            <div className="flex-auto font-bold">Senior Software Engineer</div>
            <div className="flex-auto text-right">
              November 2020 — February 2025
            </div>
          </div>
        </h5>
        <div>
          VividCloud is a software services company partnering with clients
          across diverse industries to deliver cutting-edge solutions.
        </div>
        <ul className="list-disc list-outside mb-4 ml-3">
          <li>
            Led full-stack development across multiple projects, leveraging
            React, Angular, WebGL, Playwright, Java, Kubernetes, WASM and
            Node.js to build high-performance applications.
          </li>
          <li>
            Collaborated closely with clients to translate business needs into
            actionable development plans, ensuring successful project execution.
          </li>
          <li>
            Designed and developed an intuitive UX for warehouse automation
            management, enhancing efficiency and usability.
          </li>
          <li>
            Mentored junior engineers, accelerating their growth and enabling
            them to quickly adapt to new technologies.
          </li>
        </ul>
        <Company>Elm Street Technology, Greensboro, NC (Remote)</Company>
        <h5>
          <div className="flex">
            <div className="flex-auto font-bold">Senior Software Engineer</div>
            <div className="flex-auto text-right">
              September 2016 — April 2020
            </div>
          </div>
        </h5>
        <div>
          Elm Street Technology acquired and integrated multiple products,
          including MLSPropertyFinder.com, Agent Jet, E-Merge, and Elevate—its
          flagship subscription service for real estate professionals, offering
          CRM, lead generation, email &amp; text marketing, social media
          marketing, and web presence solutions.
        </div>
        <ul className="list-disc list-outside mb-4 ml-3">
          <li>
            Drove feature development by collaborating with project managers,
            clients, and stakeholders to plan roadmaps and implement new
            functionality.
          </li>
          <li>
            Led and contributed in an agile team environment, ensuring efficient
            development cycles and seamless feature rollouts.
          </li>
          <li>
            Developed and maintained core products, including
            MLSPropertyFinder.com and legacy versions of Elevate, ensuring
            continued functionality and optimization.
          </li>
          <li>
            Built a dynamic website customization tool using ReactJS, JSS, and a
            custom UI library (Elevate UI), empowering users with seamless
            design flexibility.
          </li>
          <li>
            Engineered a scalable template website system serving over 10,000
            custom sites, leveraging ReactJS for both server-side and
            client-side rendering to enhance SEO.
          </li>
          <li>
            Deployed applications across cloud platforms (Heroku, Google Cloud),
            ensuring stability and scalability.
          </li>
          <li>
            Maintained a robust full-stack codebase using Node.js, React, HTML5,
            CSS3, and PostgreSQL.
          </li>
          <li>
            Provided Tier II support and on-call assistance, resolving escalated
            customer issues with urgency and expertise.
          </li>
        </ul>
        <h4>
          <span className="font-bold text-xl">
            RLS2000.com Inc, Spencer, MA
          </span>{" "}
          (Acquired by Elm Street Technology, valued at $10 million)
        </h4>
        <h5>
          <div className="flex">
            <div className="flex-auto font-bold">Director of Engineering</div>
            <div className="flex-auto text-right">
              June 2008 — September 2016
            </div>
          </div>
        </h5>
        <div>
          Led the development and innovation of RLS2000, a Real Estate Web
          Software company providing CRM, lead generation, and social media
          distribution tools for real estate professionals.
        </div>
        <ul className="list-disc list-outside mb-4 ml-3">
          <li>
            Managed a cross-functional team of 3–5 engineers, support staff, and
            project managers.
          </li>
          <li>
            Led Agile processes, including Sprint Planning, Daily Stand-ups, and
            Sprint Retrospectives.
          </li>
          <li>
            Oversaw infrastructure, maintaining 10 servers across VMware, Linux,
            and Windows Server.
          </li>
          <li>
            Spearheaded the migration of platform components to Azure Cloud
            Services.
          </li>
          <li>
            Collaborated closely with stakeholders and project managers to shape
            product direction.
          </li>
          <li>
            Developed and maintained software using ASP.NET, SQL, C#,
            JavaScript, Angular, and Node.js.
          </li>
          <li>Managed over 5,000 custom website and promoting SEO</li>
        </ul>
        <h5>
          <div className="flex">
            <div className="flex-auto font-bold">
              Principal Software Engineer
            </div>
            <div className="flex-auto text-right">June 2004 — June 2008</div>
          </div>
        </h5>
        <div>
          Played a key role in transforming RLS2000 into a leading real estate
          web software provider, developing essential tools like template
          websites, CRM systems, and MLS data aggregation.
        </div>
        <ul className="list-disc list-outside mb-4 ml-3">
          <li>
            Designed and built MLSPropertyfinder.com, a premier CRM for real
            estate agents.
          </li>
          <li>
            Worked closely with stakeholders to align technical execution with
            business vision.
          </li>
          <li>
            Implemented MSSQL Distribution Database and MongoDB for MLS data ETL
            and website content management.
          </li>
          <li>Provided expertise in software design and architecture.</li>
          <li>
            Served as the primary support lead, assisting clients and internal
            teams.
          </li>
        </ul>
        <h5>
          <div className="flex">
            <div className="flex-auto font-bold">Software Engineer</div>
            <div className="flex-auto text-right">June 2001 — June 2004</div>
          </div>
        </h5>
        <div>
          Joined RLS2000 in its early stages, contributing to its foundation as
          a real estate marketing platform.
        </div>
        <ul className="list-disc list-outside mb-4 ml-3">
          <li>
            Developed and designed template-based websites for real estate
            agents.
          </li>
          <li>
            Worked directly with clients to create custom website designs.
          </li>
          <li>
            Assisted customers with marketing strategies, platform navigation,
            and technical support.
          </li>
          <li>Utilized ASP.NET and Classic ASP for development.</li>
        </ul>
      </Section>
      <SectionTitle
        iconName="Graduation"
        iconTheme={iconTheme}
        title="Education"
      />
      <Section>
        <h4>
          <strong>
            Bachelors of Science in Sports Management, University of
            Massachusetts, Amherst
          </strong>
        </h4>
        <h4>
          <strong>
            Web Development Certification, Clark University, Framingham, MA
          </strong>
        </h4>
        <h4>
          <strong>Certified Scrum Master, scrumalliance.org</strong> September
          2020 — September 2020
        </h4>
        <h4>
          <strong>AWS Certified Solutions Architect - Associate</strong> August
          2025
        </h4>
      </Section>
    </>
  );
};
