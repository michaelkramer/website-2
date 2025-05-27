import { groupBy } from "../components/common/groupBy";
import { Icon, IconThemes } from "../components/icons";
import { IconList } from "../components/icons/IconList";

export default function Icons() {
  const list = groupBy(IconList, "name");

  return (
    <>
      <h1 className="text-2xl font-bold">Icons</h1>
      <div>
        <div className="text-lg">
          This page is for testing the icons. The icons are grouped by name and
          theme. The icons are from the{" "}
          <a
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            react-icons
          </a>{" "}
          library.
        </div>
        <div className="text-lg">
          My code for making the icons dynamic for use to change icon themes.
        </div>
        <div className="text-xl font-bold mt-4">Icon List</div>
        <pre
          data-theme="light"
          className="font-mono text-sm bg-gray-100 p-4 rounded-sm border border-slate-300 shadow-md"
        >
          <code>
            {`export const IconList: $Icon[] = [
  { name: "User", theme: IconTheme.antd, component: AI.AiOutlineUser },
  { name: "User", theme: IconTheme.bi, component: BI.BiUser },
  { name: "User", theme: IconTheme.fc, component: FC.FcBusinessman },

  { name: "Tools", theme: IconTheme.antd, component: AI.AiFillTool },
  { name: "Tools", theme: IconTheme.bi, component: BS.BsTools },
  { name: "Tools", theme: IconTheme.fc, component: RI.RiToolsFill },
];`}
          </code>
        </pre>
        <div className="text-xl font-bold mt-4">Icon Component</div>
        <pre
          data-theme="light"
          className="font-mono text-sm bg-gray-100 p-4 rounded-sm border border-slate-300 shadow-md"
        >
          <code>
            {`const getIcon = ({ theme, name }: $Props) => {
  const newIcon = IconList.find(
    (item) => item.name === name && item.theme === theme,
  );
  if (newIcon && newIcon.component) {
    return <newIcon.component />;
  }
  return null;
};

export const Icon = (props: $Props) => {
  const icon = getIcon(props);
  return icon && <span>{icon}</span>;
};`}
          </code>
        </pre>
      </div>
      <div className="text-xl font-bold mt-4">Usage</div>
      <pre
        data-theme="light"
        className="font-mono text-sm bg-gray-100 p-4 rounded-sm border border-slate-300 shadow-md"
      >
        <code>{`const { iconTheme } = useAppContext();
return (<Icon name="Moon" theme={iconTheme} />)`}</code>
      </pre>

      <div className="mt-4">
        <div className="grid grid-cols-4 gap-4 text-xl">
          <div>&nbsp;</div>
          {IconThemes.map((theme) => (
            <div key={theme.label} className="font-bold">
              {theme.label}
            </div>
          ))}
        </div>

        {Object.values(list).map((group) => (
          <div
            className="grid grid-cols-4 gap-4 text-xl border-b-1 border-gray-300 p-4"
            key={group[0].name}
          >
            <div className="font-bold">{group[0].name}</div>
            {group.map((icon) => (
              <div>
                <Icon name={icon.name} theme={icon.theme} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
