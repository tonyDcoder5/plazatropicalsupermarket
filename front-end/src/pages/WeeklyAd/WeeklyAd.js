import React, { useState } from "react";
import { Document, Page } from 'react-pdf';

import adPDF from "../../assets/docs/110322_weeklyad.pdf#toolbar=0";

export default function WeeklyAd() {
  const blockOne = {
    title: "Weekly Ad Full View",
    description:
      "stretch scroll animation to view full ad and embedded link for downloadable version",
    image: "",
  };

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="weekly-ad">
      <iframe
        title="weekly-ad-1103"
        type="application/pdf"
        src={`${adPDF}`}
        width="100%"
        height="500vmin"
        view="fit"
      ></iframe>
      <a
        href="https://drive.google.com/file/d/11u82ONrWlgO2SFHELeIBBRKeDL_Nmr6L/view"
        target="_blank"
      >
        PDF View
      </a>
      {/* <Document file={`https://drive.google.com/file/d/11u82ONrWlgO2SFHELeIBBRKeDL_Nmr6L/view`} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}

    </div>
  );
}
