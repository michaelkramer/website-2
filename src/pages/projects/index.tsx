import { useContext, useRef } from "react";
import users from "../../assets/projects/echo/users.png";
import { ImageWPopup } from "../../components/Image";
import { Icon } from "../../components/icons";
import { IconTheme } from "../../components/icons/IconTheme";
import { AppContext } from "../../layout/provider";

export default function Projects() {
  const modalDashboard = useRef<HTMLDialogElement>(null);
  const appContext = useContext(AppContext);
  const [iconTheme] = appContext?.iconTheme ?? [IconTheme.antd];
  return (
    <div>
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-4">
        With most of my project they are proprietary and I cannot share the
        code. But I can share some of these.
      </div>
      <div className="mt-4">
        <ul className="list-disc pl-6 item-spacing">
          <li>
            <div>
              <h3 className="text-xl font-bold">VividCloud - Project 1</h3>
            </div>
            <div className="mt-2">
              We built an app for a company which builds autonomous forklift
              vehicles. With these vehicles in warehouses which are very large
              with these vehicles having to travel several miles to different
              sections. They needed a product which would allow them to view
              where these vehicles are that would allow Engineers or floor
              workers.
            </div>
            <div className="flex flex-row justify-center items-center mt-4">
              <div className="bg-slate-50 border border-slate-300 rounded-sm p-4 w-[560]">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/DlFCQ2sd_9U?si=5C2qSWpe_4rKO06U"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </li>
          {/* <li>
            <div>
              <h3 className="text-xl font-bold">VividCloud - Project 2</h3>
            </div>
            <div className="mt-2">Place holder</div>
          </li> */}
          <li>
            <div>
              <h3 className="text-xl font-bold">Mission Model - ECHO</h3>
            </div>
            <div>
              <a
                className="link"
                href="https://www.missionmodel.org/"
                target="_blank"
              >
                https://www.missionmodel.org/
              </a>
            </div>
            <div className="mt-2">
              ECHO - Enhancing Care and Health, I'm building the clinical view
              of their new client app.
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div>
                <Icon name={"UnderConstruction"} theme={iconTheme} />
              </div>
              <div>This is a work in progress</div>
              <div>
                <Icon name={"UnderConstruction"} theme={iconTheme} />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-4">
              <div className="w-xl">
                <ImageWPopup imgSrc={users} modalRef={modalDashboard} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
