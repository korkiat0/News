// src/components/NewsDetailForm.js
import { useState } from "react";

const NewsDetailForm = ({ news, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(news);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusToggle = () => {
    setFormData({ ...formData, Status: !formData.Status });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">รายละเอียดข่าวประชาสัมพันธ์</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ชื่อเรื่อง:
            </label>
            <input
              type="text"
              name="NameNews"
              value={formData.NameNews}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              เนื้อหา:
            </label>
            <textarea
              name="Detail"
              value={formData.Detail}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-4">
              สถานะ:
            </label>
            <div
              className={`relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ${
                formData.Status ? "bg-green-400" : "bg-gray-400"
              }`}
              onClick={handleStatusToggle}
            >
              <span
                className={`absolute left-0 inline-block w-6 h-6 transform ${
                  formData.Status
                    ? "translate-x-full bg-green-500"
                    : "bg-gray-500"
                } rounded-full transition duration-200 ease-in-out`}
              ></span>
            </div>
            <span>{formData.Status ? "ใช้งาน" : "ไม่ใช้งาน"}</span>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsDetailForm;
