import { ReactNode } from "react";

export const ImageContainer: React.FC<{
  children: ReactNode;
  bgColor?: string;
}> = ({ children, bgColor }) => {
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
