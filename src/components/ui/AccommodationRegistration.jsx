import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const loadRazorpayScript = () => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

export function AccommodationRegistration() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type') || 'boys';
    const isBoys = type === 'boys';
    
    // Temporarily set to 1 rs for testing. Change back to: isBoys ? 250.00 : 200.00;
    const accommodationFee = 1.00; 

    const [formData, setFormData] = useState({
        firstName: '',
        phone: '',
        email: '',
        aadhar: '',
        collegeName: '',
        collegeRollNo: '',
    });

    // To remove the preloader or global scroll issues
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        
        const res = await loadRazorpayScript();
        if (!res) {
            alert("Razorpay SDK failed to load. Please check your connection.");
            return;
        }

        // Generate Unique ID: First 3 Letters Name - Last 4 Phone - Last 4 Roll No
        const namePart = formData.firstName.substring(0, 3).toUpperCase().padEnd(3, 'X');
        const phonePart = formData.phone.slice(-4).padStart(4, '0');
        const rollPart = formData.collegeRollNo.slice(-4).padStart(4, '0');
        const uniqueId = `${namePart}-${phonePart}-${rollPart}`;

        const options = {
            key: "rzp_test_SPc9UFCKPIHMHB", // Added user's actual Test Key
            amount: accommodationFee * 100, // Amount in paise
            currency: "INR",
            name: "Sigmoid 2K26",
            description: `${isBoys ? 'Boys' : 'Girls'} Accommodation Fee`,
            handler: async function (response) {
                // Payment Success Handler - Show loader or saving state here if you build one
                console.log("Payment Successful!", response.razorpay_payment_id);
                
                try {
                    // Send data securely to your Google Sheet!
                    const sheetResponse = await fetch("https://script.google.com/macros/s/AKfycbwPcRF90zj6d9VWdT_SkHxR7j1Jg2dVxmpm4N6m-QqYumrcnY4K3PukoS7dOdZFEKsw/exec", {
                        method: "POST",
                        body: JSON.stringify({
                            uniqueId: uniqueId,
                            razorpayPaymentId: response.razorpay_payment_id,
                            firstName: formData.firstName,
                            phone: formData.phone,
                            email: formData.email,
                            aadhar: formData.aadhar,
                            collegeName: formData.collegeName,
                            collegeRollNo: formData.collegeRollNo,
                            amountPaid: accommodationFee,
                            accommodationType: isBoys ? 'Boys' : 'Girls'
                        }),
                        // text/plain prevents strict CORS preflight issues with Google Apps Script
                        headers: { "Content-Type": "text/plain;charset=utf-8" }
                    });
                    
                    if (sheetResponse.ok) {
                        alert(`Registration Successful!\nPayment ID: ${response.razorpay_payment_id}\nYour Unique ID: ${uniqueId}\n\nYour details have been securely saved!`);
                    } else {
                        throw new Error("Failed to save to sheets");
                    }
                    
                    // Reset form or Navigate to a 'Success' page here
                } catch (error) {
                    console.error("Error saving to database:", error);
                    // Tell user payment worked, but saving failed
                    alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}\nYour Unique ID: ${uniqueId}\n\n(Note: There was a slight issue saving your record, please screenshot this message!)`);
                }
            },
            prefill: {
                name: formData.firstName,
                email: formData.email,
                contact: formData.phone,
            },
            notes: {
                unique_student_id: uniqueId,
                accommodation_type: isBoys ? 'Boys' : 'Girls',
                aadhar_card: formData.aadhar,
                college_name: formData.collegeName,
                college_roll_no: formData.collegeRollNo
            },
            theme: {
                color: "#2D60FF"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row font-sans text-[#1a1a1a] bg-[#1d1e26]">
            
            {/* The background pattern for the dark side (large subtle chevrons) */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ width: '100%', height: '100%' }}>
                {/* SVG Chevron Pattern Background to match Image 1 */}
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.15 }}>
                    <defs>
                        <pattern id="chevron" width="200" height="200" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
                            <path d="M0,100 L100,0 L200,100 L200,150 L100,50 L0,150 Z" fill="#ffffff" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#chevron)" />
                </svg>
            </div>

            {/* LEFT COLUMN - White Panel */}
            <div className="w-full md:w-[450px] bg-white border-r border-gray-200 z-10 flex flex-col shrink-0 min-h-screen relative shadow-[4px_0_24px_rgba(0,0,0,0.05)]">
                
                {/* Back button */}
                <button 
                    onClick={() => navigate(-1)}
                    className="absolute top-4 left-4 z-50 flex items-center gap-1 text-gray-400 hover:text-black transition-colors text-sm"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    Back
                </button>

                <div className="p-10 lg:p-12 pt-16 flex-1 overflow-y-auto">
                    
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-[#2D60FF] rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-md shrink-0">
                            S
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 leading-none">Sigmoid 2k26</h2>
                            <p className="text-[11px] text-gray-500 font-semibold tracking-widest uppercase mt-1">Tech Fest</p>
                        </div>
                    </div>

                    <hr className="border-gray-200 mb-8" />

                    {/* Left Title */}
                    <h1 className="text-2xl font-black text-[#0d2366] mb-2 uppercase tracking-tight">
                        {isBoys ? "Boys Accommodation" : "Girls Accommodation"}
                    </h1>
                    <div className="w-10 h-[3px] bg-[#2D60FF] mb-8"></div>

                    {/* Desc */}
                    <p className="text-[#4b5563] text-sm leading-relaxed mb-8">
                        Pre-book your accommodation for Sigmoid 2K26. Whether you're staying for both days or just one, secure your spot in our premium campus hostels.
                    </p>

                    <h3 className="text-black font-bold text-sm mb-4">Included with Accommodation:</h3>
                    <ul className="space-y-3 text-sm text-[#4b5563]">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></span>
                            2 Days / 1 Night Stay
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></span>
                            Day 1: Breakfast & Dinner
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></span>
                            Day 2: Breakfast & Dinner
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></span>
                            24x7 Security & Basic Amenities
                        </li>
                    </ul>

                    {/* Integration Info */}
                    <div className="mt-10 pt-8 border-t border-gray-100">
                        <h3 className="text-[#0d2366] font-bold text-sm flex items-center gap-2 mb-3">
                            <svg className="w-4 h-4 text-[#2D60FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            About Razorpay Integration
                        </h3>
                        <p className="text-xs text-[#4b5563] mb-4">
                            To complete this frontend-only payment setup, the following Razorpay details are needed:
                        </p>
                        <div className="bg-[#f8fafd] border border-[#e5edff] rounded-lg p-4 text-xs text-[#4b5563] space-y-2">
                            <p className="font-semibold text-[#0d2366]">• Razorpay Key ID (rzp_test_... or rzp_live_...)</p>
                            <p>• The transaction amount (mapped to this form)</p>
                            <p>• Student Details (passed seamlessly to the checkout)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN - Dark Background & Form Card */}
            <div className="flex-1 relative flex items-center justify-center p-6 md:p-12 z-10 min-h-screen">
                
                {/* Center Form Card exactly matching Image 1 */}
                <div className="w-full max-w-[480px] bg-white rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden">
                    
                    <div className="p-8 pb-4">
                        <h2 className="text-[22px] font-bold text-[#1d1d1f]">Payment Details</h2>
                        <div className="w-8 h-[3px] bg-[#2D60FF] mt-3"></div>
                    </div>

                    <div className="px-8 pb-6 flex-1">
                        
                        {/* Fee Row */}
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-sm font-medium text-gray-600">Registration Fee</span>
                            <div className="bg-[#f9fafb] border border-gray-200 rounded px-4 py-2 text-right w-[140px]">
                                <span className="font-bold text-[#1d1d1f]">₹ {accommodationFee.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handlePayment} className="space-y-5">
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-[#4b5563] mb-1.5">First Name</label>
                                    <input 
                                        type="text" 
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#2D60FF] transition-colors" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#4b5563] mb-1.5">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Without +91"
                                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#2D60FF] placeholder:text-gray-300 transition-colors" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#4b5563] mb-1.5 flex gap-1">
                                    Email <span className="text-gray-400 font-normal">(For e-ticket)</span>
                                </label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#2D60FF] transition-colors" 
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#4b5563] mb-1.5">Aadhar Card Number</label>
                                <input 
                                    type="text" 
                                    name="aadhar"
                                    value={formData.aadhar}
                                    onChange={handleInputChange}
                                    placeholder="Enter all digits or last 4 digits"
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#2D60FF] placeholder:text-gray-300 transition-colors" 
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#4b5563] mb-1.5">College Name</label>
                                <input 
                                    type="text" 
                                    name="collegeName"
                                    value={formData.collegeName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#2D60FF] transition-colors" 
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#4b5563] mb-1.5">College Roll No.</label>
                                <input 
                                    type="text" 
                                    name="collegeRollNo"
                                    value={formData.collegeRollNo}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#2D60FF] transition-colors" 
                                />
                            </div>

                            <p className="text-[10px] text-gray-400 leading-tight pt-2">
                                By proceeding, you agree to the Terms & Conditions and Privacy Policy of the event. Data is handled securely.
                            </p>

                            {/* Hidden submit so we can use external button */}
                            <button id="submitFormBtn" type="submit" className="hidden"></button>
                        </form>
                    </div>

                    {/* Footer Payment Bar */}
                    <div className="flex items-stretch border-t border-gray-200 h-16 bg-[#fafafa]">
                        {/* Payment Logos Left */}
                        <div className="flex-1 flex items-center px-6 gap-3 pt-1 pb-1">
                            <span className="font-black italic text-[#4b5563] text-sm tracking-tight border border-gray-300 px-1.5 rounded bg-white shadow-sm">UPI</span>
                            <span className="font-sans font-bold text-[#1434CB] text-sm italic border border-gray-300 px-1.5 rounded bg-white shadow-sm">VISA</span>
                            <span className="font-bold text-[#FF5F00] text-sm border border-gray-300 px-1.5 rounded bg-white shadow-sm"><span className="text-[#EB001B]">O</span></span>
                            <span className="text-gray-400 text-xs font-medium ml-1 flex items-center">
                                <svg className="w-3 h-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                                Secured
                            </span>
                        </div>
                        
                        {/* Pay Button Right */}
                        <button 
                            type="button"
                            onClick={() => document.getElementById('submitFormBtn').click()}
                            className="bg-[#2D60FF] hover:bg-[#1a4eff] text-white font-bold text-lg w-[180px] h-full flex items-center justify-center transition-colors"
                        >
                            Pay ₹ {accommodationFee.toFixed(2)}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
