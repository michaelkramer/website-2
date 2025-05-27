import{w as a}from"./with-props-Cri17Z5P.js";import{o as e}from"./chunk-KNED5TY2-BKNaqtJA.js";import{a as m,I as i,c as l}from"./index-BwnUwgLG.js";function d(c,s){return c.reduce((n,o)=>{const r=o[s],t=String(r);return n[t]=n[t]||[],n[t].push(o),n},{})}const I=a(function(){const s=d(l,"name");return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Icons"}),e.jsxs("div",{children:[e.jsxs("div",{className:"text-lg",children:["This page is for testing the icons. The icons are grouped by name and theme. The icons are from the"," ",e.jsx("a",{href:"https://react-icons.github.io/react-icons/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline",children:"react-icons"})," ","library."]}),e.jsx("div",{className:"text-lg",children:"My code for making the icons dynamic for use to change icon themes."}),e.jsx("div",{className:"text-xl font-bold mt-4",children:"Icon List"}),e.jsx("pre",{"data-theme":"light",className:"font-mono text-sm bg-gray-100 p-4 rounded-sm border border-slate-300 shadow-md",children:e.jsx("code",{children:`export const IconList: $Icon[] = [
  { name: "User", theme: IconTheme.antd, component: AI.AiOutlineUser },
  { name: "User", theme: IconTheme.bi, component: BI.BiUser },
  { name: "User", theme: IconTheme.fc, component: FC.FcBusinessman },

  { name: "Tools", theme: IconTheme.antd, component: AI.AiFillTool },
  { name: "Tools", theme: IconTheme.bi, component: BS.BsTools },
  { name: "Tools", theme: IconTheme.fc, component: RI.RiToolsFill },
];`})}),e.jsx("div",{className:"text-xl font-bold mt-4",children:"Icon Component"}),e.jsx("pre",{"data-theme":"light",className:"font-mono text-sm bg-gray-100 p-4 rounded-sm border border-slate-300 shadow-md",children:e.jsx("code",{children:`const getIcon = ({ theme, name }: $Props) => {
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
};`})})]}),e.jsx("div",{className:"text-xl font-bold mt-4",children:"Usage"}),e.jsx("pre",{"data-theme":"light",className:"font-mono text-sm bg-gray-100 p-4 rounded-sm border border-slate-300 shadow-md",children:e.jsx("code",{children:`const { iconTheme } = useAppContext();
return (<Icon name="Moon" theme={iconTheme} />)`})}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-xl",children:[e.jsx("div",{children:" "}),m.map(n=>e.jsx("div",{className:"font-bold",children:n.label},n.label))]}),Object.values(s).map(n=>e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-xl border-b-1 border-gray-300 p-4",children:[e.jsx("div",{className:"font-bold",children:n[0].name}),n.map(o=>e.jsx("div",{children:e.jsx(i,{name:o.name,theme:o.theme})}))]},n[0].name))]})]})});export{I as default};
//# sourceMappingURL=icons-pEr2w730.js.map
