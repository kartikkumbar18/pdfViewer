import React, { useState, useRef } from 'react';
import PdfViwerComponent from '../PdfViwerComponent';

function TermsAndCondition() {
  const [showPdf, setShowPdf] = useState(false);
  
  
  const pdfViewerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    console.log("Clicked");
    setShowPdf(true);
    document.addEventListener('mousedown', handleClickOutside);
  };

  const handleClickOutside = (event: MouseEvent) => {
    
    if (pdfViewerRef.current && !pdfViewerRef.current.contains(event.target as Node)) {
      setShowPdf(false);
      document.removeEventListener('mousedown', handleClickOutside); 
    }
  };

  return (
    <>
      <div className="mx-auto mt-2">
  <h1 className="mx-auto cursor-pointer text-2xl font-bold" onClick={handleClick}>
    Terms And Condition
  </h1>
  {showPdf && (
    <div ref={pdfViewerRef}>
      <PdfViwerComponent />
    </div>
  )}
</div>

    </>
  );
}

export default TermsAndCondition;
