import { ResumeHtml } from "../assets/Michael_Kramer-Software_Engineer";

export default function Resume() {
  return (
    <>
      <div className="text-right mb-4">
        <a
          className="btn btn-soft"
          target="_blank"
          rel="noopener noreferrer"
          href="public/Michael_Kramer-Software_Engineer.pdf"
        >
          Download as PDF
        </a>
      </div>
      <ResumeHtml />
    </>
  );
}
