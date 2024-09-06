import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { getpdfViwer } from '../redux/Slice/PdfViwer';

const PdfViwerComponent = () => {
  const dispatch = useDispatch<AppDispatch>();


  const { pdfviwerInfo } = useSelector((state: any) => state.pdfViwer);
  console.log(pdfviwerInfo,"dewfewfwe");
  

 
  useEffect(() => {
    dispatch(getpdfViwer());
  }, [dispatch]);

  return (
    <div className="w-[50%] h-[300px] flex justify-center items-center mx-auto mt-72">

   <iframe
  className="w-[70%] h-[700px] border-none transition-transform duration-300 ease-in-out hover:scale-110"
  src={pdfviwerInfo.pdfURL}
  onMouseEnter={(e) => {
    const target = e.target as HTMLIFrameElement; 
    target.style.transform = 'scale(1.2)'; 
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLIFrameElement;
    target.style.transform = 'scale(1)';
  }}
  title="PDF Viewer"
></iframe>


  </div>
  
  


  );
};

export default PdfViwerComponent;
