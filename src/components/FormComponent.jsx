import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = ({ setFormData }) => {
    const [form, setForm] = useState({
        husbandNameEng: "",
        husbandNameMar: "",
        wifeNameEng: "",
        wifeNameMar: "",
        marriageDate: "",
        addressEng: "",
        addressMar: "",
        date: "",
        remarksEng: "",
        remarksMar: "",
        placeEng: "",
        placeMar: "",
        husbandImage: null,
        wifeImage: null
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const name = e.target.name;

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm((prevForm) => ({ ...prevForm, [name]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ form })
        setFormData(form);
        localStorage.setItem("latest_form", JSON.stringify(form))
        navigate("/certificate"); // Navigate to Certificate Page
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">विवाह तपशील फॉर्म / Marriage Details Form</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Husband Name */}
                <label className="block font-semibold">Husband Name / पतीचे नाव:</label>
                <input type="text" name="husbandNameEng" placeholder="Enter in English" onChange={handleChange} required className="w-full p-2 border rounded" />
                <input type="text" name="husbandNameMar" placeholder="मराठीत टाका" onChange={handleChange} required className="w-full p-2 border rounded" />

                {/* Husband Image Upload */}
                <label className="block font-semibold">Husband's Photo / पतीचे फोटो :</label>
                <input type="file" name="husbandImage" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />

                {/* Wife Name */}
                <label className="block font-semibold">Wife Name / पत्नीचे नाव:</label>
                <input type="text" name="wifeNameEng" placeholder="Enter in English" onChange={handleChange} required className="w-full p-2 border rounded" />
                <input type="text" name="wifeNameMar" placeholder="मराठीत टाका" onChange={handleChange} required className="w-full p-2 border rounded" />
                {/* Wife Image Upload */}
                <label className="block font-semibold">Wife's Photo / पत्नीचे फोटो :</label>
                <input type="file" name="wifeImage" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />

                {/* Marriage Date */}
                <label className="block font-semibold">Marriage Date / यांचा विवाह दिनांक:</label>
                <input type="date" name="marriageDate" onChange={handleChange} required className="w-full p-2 border rounded" />

                {/* Address */}
                <label className="block font-semibold">Address / पत्ता:</label>
                <input type="text" name="addressEng" placeholder="Enter in English" onChange={handleChange} required className="w-full p-2 border rounded" />
                <input type="text" name="addressMar" placeholder="मराठीत टाका" onChange={handleChange} required className="w-full p-2 border rounded" />

                {/* Date */}
                <label className="block font-semibold">Date / दिनांक:</label>
                <input type="date" name="date" onChange={handleChange} required className="w-full p-2 border rounded" />

                {/* Remarks */}
                <label className="block font-semibold">Remarks (If any) / शेरा (जर असेल तर):</label>
                <input type="text" name="remarksEng" placeholder="Enter in English" onChange={handleChange} className="w-full p-2 border rounded" />
                <input type="text" name="remarksMar" placeholder="मराठीत टाका" onChange={handleChange} className="w-full p-2 border rounded" />

                {/* Place */}
                <label className="block font-semibold">Place / ठिकाण:</label>
                <input type="text" name="placeEng" placeholder="Enter in English" onChange={handleChange} required className="w-full p-2 border rounded" />
                <input type="text" name="placeMar" placeholder="मराठीत टाका" onChange={handleChange} required className="w-full p-2 border rounded" />

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    प्रमाणपत्र तयार करा / Generate Certificate
                </button>
            </form>
        </div>
    );
};

export default FormComponent;