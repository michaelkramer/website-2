import * as AI from "react-icons/ai";
import * as BI from "react-icons/bi";
import * as BS from "react-icons/bs";
import * as FA from "react-icons/fa";
import * as FC from "react-icons/fc";
import { IconType } from "react-icons/lib";
import * as LU from "react-icons/lu";
import * as MD from "react-icons/md";
import * as RI from "react-icons/ri";
import { IconTheme } from "./IconTheme";

interface $Icon {
  name: string;
  theme: IconTheme;
  component?: IconType;
}

export const IconList: $Icon[] = [
  { name: "User", theme: IconTheme.antd, component: AI.AiOutlineUser },
  { name: "User", theme: IconTheme.bi, component: BI.BiUser },
  { name: "User", theme: IconTheme.fc, component: FC.FcBusinessman },

  { name: "Tools", theme: IconTheme.antd, component: AI.AiFillTool },
  { name: "Tools", theme: IconTheme.bi, component: BS.BsTools },
  { name: "Tools", theme: IconTheme.fc, component: RI.RiToolsFill },

  { name: "PDF", theme: IconTheme.antd, component: AI.AiOutlineFilePdf },
  { name: "PDF", theme: IconTheme.bi, component: BI.BiFile },
  { name: "PDF", theme: IconTheme.fc, component: FC.FcDocument },

  { name: "Home", theme: IconTheme.antd, component: AI.AiOutlineHome },
  { name: "Home", theme: IconTheme.bi, component: BI.BiHome },
  { name: "Home", theme: IconTheme.fc, component: FC.FcHome },

  { name: "Idea", theme: IconTheme.antd, component: AI.AiOutlineBulb },
  { name: "Idea", theme: IconTheme.bi, component: BI.BiBulb },
  { name: "Idea", theme: IconTheme.fc, component: FC.FcIdea },

  { name: "Note", theme: IconTheme.antd, component: AI.AiOutlineFileText },
  { name: "Note", theme: IconTheme.bi, component: BI.BiNotepad },
  { name: "Note", theme: IconTheme.fc, component: FC.FcRules },

  { name: "Copy", theme: IconTheme.antd, component: AI.AiOutlineCopy },
  { name: "Copy", theme: IconTheme.bi, component: BI.BiCopy },
  { name: "Copy", theme: IconTheme.fc, component: FA.FaCopy },

  { name: "Cross", theme: IconTheme.antd, component: AI.AiOutlineClose },
  { name: "Cross", theme: IconTheme.bi, component: BI.BiX },
  { name: "Cross", theme: IconTheme.fc, component: FA.FaTimes },

  { name: "Check", theme: IconTheme.antd, component: AI.AiOutlineCheck },
  { name: "Check", theme: IconTheme.bi, component: BI.BiCheck },
  { name: "Check", theme: IconTheme.fc, component: FA.FaCheck },

  { name: "Bot", theme: IconTheme.fc, component: FA.FaRobot },
  { name: "Bot", theme: IconTheme.antd, component: AI.AiOutlineRobot },
  { name: "Bot", theme: IconTheme.bi, component: BS.BsRobot },

  { name: "Graduation", theme: IconTheme.fc, component: FA.FaGraduationCap },
  {
    name: "Graduation",
    theme: IconTheme.antd,
    component: LU.LuGraduationCap,
  },
  { name: "Graduation", theme: IconTheme.bi, component: BI.BiSolidGraduation },

  { name: "Briefcase", theme: IconTheme.fc, component: FA.FaSuitcase },
  { name: "Briefcase", theme: IconTheme.antd, component: AI.AiFillShopping },
  {
    name: "Briefcase",
    theme: IconTheme.bi,
    component: BI.BiBriefcaseAlt,
  },

  { name: "Sun", theme: IconTheme.fc, component: FA.FaRegSun },
  { name: "Sun", theme: IconTheme.antd, component: AI.AiOutlineSun },
  { name: "Sun", theme: IconTheme.bi, component: MD.MdSunny },

  { name: "Moon", theme: IconTheme.fc, component: FA.FaMoon },
  { name: "Moon", theme: IconTheme.antd, component: AI.AiOutlineMoon },
  { name: "Moon", theme: IconTheme.bi, component: RI.RiMoonFill },
];
