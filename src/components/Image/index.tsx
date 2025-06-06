import { ImageContainer } from "./Image-container";
import { ImagePopup, ImagePopupLabel } from "./Image-popup";

export interface ImagePopupProps {
  imgSrc: string;
  modalRef: React.RefObject<HTMLDialogElement | null>;
  children?: React.ReactNode;
  popupLabel?: string;
}
export const ImageWPopup: React.FC<ImagePopupProps> = (
  props: ImagePopupProps,
) => {
  const { imgSrc, modalRef, popupLabel, children } = props;
  return (
    <>
      <ImageContainer>
        {children ?? (
          <img
            src={imgSrc}
            className="w-7xl cursor-pointer"
            onClick={() => {
              modalRef.current?.showModal();
            }}
          />
        )}
      </ImageContainer>
      <ImagePopupLabel ref={modalRef}>
        {popupLabel ?? "View Dashboard"}
      </ImagePopupLabel>

      <ImagePopup ref={modalRef}>
        {children ?? <img src={imgSrc} className="w-full" />}
      </ImagePopup>
    </>
  );
};
