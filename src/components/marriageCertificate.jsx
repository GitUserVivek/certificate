import React, { useEffect, useRef, useState } from 'react';
import satyamevJayte from "../assets/satyamevjayte.png"
import stamp1 from "../assets/stamp1.png"
import stamp2 from "../assets/stamp2.png"
import qr from "../assets/qr.png"
import { useNavigate } from "react-router-dom";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QRCode from "react-qr-code";




const MarriageCertificate = ({ formData }) => {
    const navigate = useNavigate();
    const [data, setData] = useState(formData)
    const [pdfUrl, setPdfUrl] = useState(null);
    const certificateRef = useRef();

    // Function to Capture Page & Generate PDF
    const generatePDF = async () => {
        const certificateElement = certificateRef.current;
        const canvas = await html2canvas(certificateElement, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0); // Auto-scale

        // Convert PDF to Blob & URL
        const pdfBlob = pdf.output("blob");
        const pdfURL = URL.createObjectURL(pdfBlob);
        console.log(pdfURL)
        setPdfUrl(pdfURL);
    };
    useEffect(() => {
        if (!formData?.husbandNameEng) {
            if (!localStorage.getItem("latest_form")) {
                alert("please fill the form first .. !")
                navigate("/")
            }
            setData(JSON.parse(localStorage.getItem("latest_form")))

        }
        generatePDF()
    }, [data?.husbandNameEng, pdfUrl?.length])
    console.log(formData)
    let {
        husbandNameEng,
        husbandNameMar,
        wifeNameEng,
        wifeNameMar,
        marriageDate,
        addressEng,
        addressMar,
        date,
        remarksEng,
        remarksMar,
        placeEng,
        placeMar,
        husbandImage,
        wifeImage,
    } = data


    return (
        <div className="font-serif p-7 m-2 h-fit border border-black max-w-2xl mx-auto" ref={certificateRef}>
            <div className='header mb-4 border border-black flex items-stretch  justify-between'>
                <div className=' flex flex-1 justify-center shadow-[0_0_0_0.5px_black]  '>
                    <img src={husbandImage} alt='husbandImg' className='h-24 ' />
                    <img src={stamp2} alt="Stamp 2" className="h-20 relative -bottom-14 right-10" />
                </div>
                <div className=' flex flex-1 justify-center shadow-[0_0_0_0.5px_black] '>
                    <img src={satyamevJayte} className='h-24 ' />
                </div>
                <div className=' flex flex-1 justify-center shadow-[0_0_0_0.5px_black] '>
                    <img src={stamp2} alt="Stamp 2" className="h-20 relative -bottom-14 -right-16" />
                    <img src={wifeImage} alt='wifeImg' className='h-24 ' />

                </div>
            </div>

            <div className="text-center mt-3">
                <p className="text-sm marathi-text">महाराष्ट्र शासन</p>
                <p className="text-xs  marathi-text">
                    (भाग चार-व) महाराष्ट्र शासन राजपत्र, में 20,1999/वैशाख 30, शके 1921
                </p>
                <p className="mt-1   marathi-text">नमूना - ई FORM -E</p>
                <p className="mt-1   marathi-text">विवाह नोंदणीचे प्रमाणपत्र</p>
                <p className="mt-1 text-xs   english-text">CERTIFICATE OF REGISTRATION OF MARRIAGE</p>
                <p className="text-xs marathi-text">(पहा कलम 6 (1) आणि नियम 5)</p>
                <p className="text-xs english-text">(See Section 6(1) and Rule 5)</p>
            </div>

            <div className="mt-6">
                <p className="marathi-text">प्रमाणित करण्यात येते की-</p>
                <p className="english-text">Certified that the marriage between-</p>
            </div>

            <div className="mt-4">
                <p className="marathi-text">
                    पतीचे नाव / Husband Name: <span className=" ">{husbandNameMar}</span> / <span className="english-text">{husbandNameEng}</span>
                </p>
                <p className="marathi-text">
                    रा. {addressMar} येथील रहिवासी आहेत आणि,
                </p>
                <p className="english-text">
                    Is a resident of {addressEng} and
                </p>
            </div>

            <div className="mt-4">
                <p className="marathi-text">
                    पत्नीचे नाव / Wife Name: <span className=" ">{wifeNameMar}</span> / <span className="english-text">{wifeNameEng} </span>
                </p>

            </div>

            <div className="mt-4">
                <p className="marathi-text">
                    यांचा विवाह दिनांक : <span className=" ">{marriageDate}</span> {addressMar}  येथे (ठिकाणी)
                </p>
                <p className="english-text">
                    Solemnized on Village {addressEng} at: <span className=" ">{marriageDate}</span>
                </p>
            </div>

            <div className="mt-4">
                <p className="marathi-text">
                    विवाह विधी संपन्न झाला. त्यांची महाराष्ट्र विवाह मंडळाचे विनियमन आणि विवाह नोंद विधेयक, 1998
                </p>
                <p className="english-text">
                    Registered of Marriages maintained under the Maharashtra Regulation of
                    Marriage Bureaus and Registration of Marriages Act 1998.
                </p>
            </div>

            <div className="mt-4">
                <p className="marathi-text">
                    अन्वये ठेवण्यात आलेल्या नोंदवहीच्या खंड क्रमांक <span className=" ">01</span> च्या अनुक्रमांक <span className=" ">05</span> वर
                </p>
                <p className="english-text">
                    Of Volume <span className=" ">05</span> at Serial No. <span className=" ">01</span>
                </p>
            </div>

            <div className="mt-4">
                <p className="marathi-text">
                    दिनांक: <span className=" ">{date}</span> रोजी माझ्‌याकडून नौदणी करण्यात आली आहे.
                </p>
                <p className="english-text">On <span className=" ">{date}</span> registered by me.</p>
            </div>

            <div className="mt-4">
                <p className="marathi-text">शेरा / Remarks (If any):</p> <span>{remarksMar}</span> / <span>{remarksEng}</span>
            </div>

            <div className="mt-4 flex justify-between">
                <p className="marathi-text">Place / ठिकाण: <span className=" ">{placeEng} ({placeMar})</span></p>
                <div className="text-right">
                    <p className="marathi-text">निबंधक</p>
                    <p className="marathi-text">जन्म-मृत्यु व विवाह नोंदणी</p>
                    <p className="marathi-text">जि. {placeMar} </p>
                </div>
            </div>

            {/* <div className="mt-1 flex justify-between">
                    <p className="marathi-text relative bottom-5">{placeMar}</p>
                    <p className="marathi-text">सन</p>
                </div> */}

            <div className="mt-8 flex justify-between  relative bottom-28">
                <div className="h-28 min-w-26 flex-auto relative bottom-[-40px]">
                    {pdfUrl && (
                        <a href={pdfUrl}>
                            <div className="mt-4 text-center">
                                <QRCode value={pdfUrl} size={150} />
                            </div>

                        </a>
                    )}
                    {/* <img src={pdfUrl ? pdfUrl : qr} alt="QR" className="h-28" /> */}
                </div>
                <div className="h-28 w-auto min-w-60 p-3 ">
                    <img src={stamp2} alt="Stamp 2" className="h-28 flex-1" />
                </div>
                <div className="h-28 w-auto p-3">
                    <img src={stamp1} alt="Stamp 1" className="h-28 scale-150 flex-1" />
                </div>
            </div>
        </div>

    );
};

export default MarriageCertificate;
