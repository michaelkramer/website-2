import { ReactNode } from "react";

export const ImagePopup: React.FC<{
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

export const ImagePopupLabel: React.FC<{
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
