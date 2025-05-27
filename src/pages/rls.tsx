import AgentWebsite from "../assets/rls/agent-website.svg";
import MLSPropertyfinderDashboard from "../assets/rls/MLSPropertyfinder-dashboard.svg";
import rls from "../assets/rls/rls.png";
import mls from "../assets/rls/mls.png";
import { ReactNode, useContext, useRef } from "react";
import { Icon } from "../components/icons";
import { IconTheme } from "../components/icons/IconTheme";
import { AppContext } from "../layout/provider";

const ImageContainer: React.FC<{ children: ReactNode; bgColor?: string }> = ({
  children,
  bgColor,
}) => {
  return (
    <div
      className={
        (bgColor ?? "bg-slate-50") + " border border-slate-300 rounded-sm p-4"
      }
    >
      {children}
    </div>
  );
};

const ListItem: React.FC<{ children: ReactNode; iconTheme?: IconTheme }> = ({
  children,
  iconTheme = IconTheme.antd,
}) => {
  return (
    <li className="flex items-center gap-3">
      <Icon name={"Home"} theme={iconTheme} />
      {children}
    </li>
  );
};

const ImagePopup: React.FC<{
  children: ReactNode;
  ref: React.RefObject<HTMLDialogElement | null>;
}> = ({ children, ref }) => {
  return (
    <dialog className="modal" ref={ref}>
      <div className="modal-box w-[80dvw] max-w-5xl rounded-sm">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button
          onClick={() => {
            ref.current?.close();
          }}
        >
          close
        </button>
      </form>
    </dialog>
  );
};

const ImagePopupLabel: React.FC<{
  children: ReactNode;
  ref: React.RefObject<HTMLDialogElement | null>;
}> = ({ children, ref }) => {
  return (
    <div className="text-center">
      <button
        className="btn btn-link no-underline text-current text-xs"
        onClick={() => {
          ref.current?.showModal();
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default function Component() {
  const appContext = useContext(AppContext);
  const [iconTheme] = appContext?.iconTheme ?? [IconTheme.antd];
  const modalDashboard = useRef<HTMLDialogElement>(null);
  const modalWebsite = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex-auto">
          <h2 className="text-3xl font-bold">RLS2000.com</h2>
        </div>
        <div>
          <ImageContainer>
            <img src={rls} alt="RLS2000.com" />
          </ImageContainer>
        </div>
      </div>
      <h4 className="text-2xl font-bold mb-4">
        2000 to 2016 M&A Elm Street Technology
      </h4>

      <div>
        RLS2000.com (RLS) was a company specializing in real estate listing
        services. The company offered various tools to support real estate
        professionals and their clients, including:
      </div>
      <ul className="list-none ml-3 mb-4">
        <ListItem iconTheme={iconTheme}>Property Messenger</ListItem>

        <ListItem iconTheme={iconTheme}>Property Finder</ListItem>

        <ListItem iconTheme={iconTheme}>Estimates</ListItem>

        <ListItem iconTheme={iconTheme}>Property History</ListItem>
      </ul>

      <h3 className="text-xl font-bold">
        Flagship Product: MLSPropertyfinder.com
      </h3>

      <div className="flex">
        <div>
          RLS's flagship product, MLSPropertyfinder.com, was a Client Management
          System designed specifically for real estate agents. This platform
          enabled agents to:
          <ul className="list-none ml-3 mb-4">
            <ListItem iconTheme={iconTheme}>
              Grant their clients (homeowners and potential homeowners) access
              to the open market of houses for sale.
            </ListItem>

            <ListItem iconTheme={iconTheme}>
              Manage and streamline client interactions and property searches
              effectively.
            </ListItem>
          </ul>
        </div>
        <div>
          <ImageContainer bgColor="bg-white">
            <img src={mls} alt="MLSPropertyfinder.com" />
          </ImageContainer>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-4">Market Coverage</h3>
      <div>
        RLS serviced 4 of the 6 Multiple Listing Services (MLS) within New
        England, establishing a significant footprint in the regional real
        estate market.
      </div>

      <h3 className="text-xl font-bold mt-4">Company Overview</h3>
      <ul className="list-none ml-3 mb-4">
        <ListItem iconTheme={iconTheme}>Industry: Real Estate</ListItem>

        <ListItem iconTheme={iconTheme}>Employees: 8 to 25</ListItem>

        <ListItem iconTheme={iconTheme}>
          Reported Revenues: $3 million to $10 million
        </ListItem>
      </ul>
      <h3 className="text-xl font-bold">Technology Overview</h3>
      <div style={{ display: "flex" }}>
        <div className="mr-4">
          <ImageContainer>
            <img
              src={MLSPropertyfinderDashboard}
              className="w-7xl cursor-pointer"
              onClick={() => {
                modalDashboard.current?.showModal();
              }}
            />
          </ImageContainer>
          <ImagePopupLabel ref={modalDashboard}>View Dashboard</ImagePopupLabel>

          <ImagePopup ref={modalDashboard}>
            <img src={MLSPropertyfinderDashboard} className="w-full" />
          </ImagePopup>
        </div>
        <div>
          <div>
            With over 2,000 clients, RLS2000.com leveraged robust technology
            solutions to provide real-time data access, seamless integration
            with MLS systems, and user-friendly interfaces. Their proprietary
            platforms were built to enhance efficiency for real estate
            professionals by:
          </div>
          <ul className="list-none ml-3 mb-4">
            <ListItem iconTheme={iconTheme}>
              Automating listing updates and client notifications.
            </ListItem>

            <ListItem iconTheme={iconTheme}>
              Offering secure and scalable infrastructure to support thousands
              of users simultaneously.
            </ListItem>

            <ListItem iconTheme={iconTheme}>
              Providing mobile and desktop compatibility for ease of access.
            </ListItem>
          </ul>
          <div>
            Additionally, RLS developed custom websites tailored to meet the
            branding and functional needs of individual real estate agents and
            agencies. These custom sites featured:
          </div>
          <ul className="list-none ml-3 mb-4">
            <ListItem iconTheme={iconTheme}>
              Integration with MLS data for real-time property updates.
            </ListItem>

            <ListItem iconTheme={iconTheme}>
              Responsive design to ensure usability on all devices.
            </ListItem>

            <ListItem iconTheme={iconTheme}>
              Customizable templates and branding options to reflect the unique
              identity of each client.
            </ListItem>
          </ul>
        </div>
      </div>
      <h3 className="text-xl font-bold">Database Technology</h3>

      <div>
        RLS utilized Microsoft SQL Server (MSSQL) as its primary database
        system, leveraging Data Transformation Services (DTS) for efficient data
        migration and processing. This robust database infrastructure supported:
      </div>
      <ul className="list-none ml-3 mb-4">
        <ListItem iconTheme={iconTheme}>
          Real-time synchronization of MLS data.
        </ListItem>

        <ListItem iconTheme={iconTheme}>
          Scalable storage for extensive property listings and client records.
        </ListItem>

        <ListItem iconTheme={iconTheme}>
          High-performance querying and reporting capabilities.
        </ListItem>
      </ul>
      <h3 className="text-xl font-bold">Website Technology</h3>
      <div style={{ display: "flex" }}>
        <div>
          <div>
            Initially, client websites were developed using classic ASP. Over
            time, RLS transitioned to .NET using the MVC model, which allowed
            for a templated design. This approach enabled:
          </div>
          <ul className="list-none ml-3 mb-4">
            <ListItem iconTheme={iconTheme}>
              Consistent underlying code to display information across multiple
              sites.
            </ListItem>

            <ListItem iconTheme={iconTheme}>
              Client-specific customization within a unified framework.
            </ListItem>
          </ul>
          <div>
            The front-end development utilized early libraries such as Angular,
            Ember, React, and jQuery to build dynamic, interactive user
            experiences. This combination of technologies ensured:
          </div>
          <ul className="list-none ml-3 mb-4">
            <ListItem iconTheme={iconTheme}>
              Modern, responsive design for improved user engagement.
            </ListItem>

            <ListItem iconTheme={iconTheme}>
              Efficient development processes while maintaining high
              customization potential.
            </ListItem>
          </ul>
          <div>
            The company's technology offerings ensured reliable performance and
            streamlined workflows, empowering agents to focus on client
            relationships and sales.
          </div>
        </div>
        <div className="ml-4">
          <ImageContainer>
            <img
              src={AgentWebsite}
              className="w-7xl cursor-pointer"
              onClick={() => {
                modalWebsite.current?.showModal();
              }}
            />
          </ImageContainer>
          <ImagePopupLabel ref={modalWebsite}>View Website</ImagePopupLabel>

          <ImagePopup ref={modalWebsite}>
            <img src={AgentWebsite} className="w-7xl cursor-pointer" />
          </ImagePopup>
        </div>
      </div>
      <h3 className="text-xl font-bold">Conclusion</h3>

      <div>
        RLS2000.com played a pivotal role in modernizing real estate listing
        services in New England. By combining innovative technology with
        user-centric design, the company empowered real estate professionals to
        enhance client relationships, streamline operations, and navigate a
        competitive market. Although RLS2000.com's operational scale was modest,
        its impact on the industry demonstrated how targeted solutions and
        effective tools can create lasting value for both agents and their
        clients.
      </div>
    </div>
  );
}
