import { IconList } from "./IconList";
import { IconThemes } from "./IconTheme";

export { IconThemes };

interface $Props {
  theme: any;
  name: string;
}

const getIcon = ({ theme, name }: $Props) => {
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
};
