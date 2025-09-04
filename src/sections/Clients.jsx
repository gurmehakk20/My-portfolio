import { useState } from "react";
import { clientReviews } from "../constants/index.js";
import emailjs from "emailjs-com";

// EmailJS env variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const FEEDBACK_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_FEEDBACK_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Cloudinary env variables
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const Clients = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    review: "",
    img: null,
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img" && files.length > 0) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, img: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const uploaded = await res.json();
    return uploaded.secure_url; // Cloud-hosted image URL
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      if (formData.img) {
        imageUrl = await uploadImageToCloudinary(formData.img);
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        position: formData.position,
        review: formData.review,
        linkedin: formData.linkedin || "",
        image_url: imageUrl || "",
        to_name: "Gurmehak",
        to_email: "gurmehak.codes@gmail.com",
      };

      await emailjs.send(
        SERVICE_ID,
        FEEDBACK_TEMPLATE_ID, // ✅ Feedback-specific template
        templateParams,
        PUBLIC_KEY
      );

      alert("✅ Feedback sent successfully!");
      setIsOpen(false);
      setFormData({
        name: "",
        email: "",
        linkedin: "",
        review: "",
        img: null,
      });
      setPreview(null);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Failed to send feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20">
      <h3 className="head-text">What People Say</h3>

      {/* Existing Reviews */}
      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{item.review}</p>
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt="reviewer"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800 flex items-center gap-1">
                      {item.name}
                      {item.linkedin && (
                        <a
                          href={item.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 inline-block"
                          aria-label="LinkedIn Profile"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 
                              5v14c0 2.761 2.239 5 5 5h14c2.761 
                              0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 
                              19h-3v-10h3v10zm-1.5-11.268c-.966 
                              0-1.75-.784-1.75-1.75s.784-1.75 
                              1.75-1.75 1.75.784 1.75 
                              1.75-.784 1.75-1.75 1.75zm13.5 
                              11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 
                              0-2.154 1.459-2.154 
                              2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 
                              1.379-1.563 2.841-1.563 3.039 0 
                              3.6 2.001 3.6 4.601v5.595z" />
                          </svg>
                        </a>
                      )}
                    </p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Feedback Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 rounded-lg bg-blue-300 text-blue hover:bg-blue-700 transition"
        >
          Share Your Thoughts
        </button>
      </div>

      {/* Feedback Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-4">Submit Your Feedback</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded-lg p-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border rounded-lg p-2"
              />
              <input
                type="text"
                name="position"
                placeholder="Your Designation/Position (optional)"
                value={formData.position}
                onChange={handleChange}
                
                className="border rounded-lg p-2"
              />
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile (optional)"
                value={formData.linkedin}
                onChange={handleChange}
                className="border rounded-lg p-2"
              />
              <textarea
                name="review"
                placeholder="Your Feedback"
                value={formData.review}
                onChange={handleChange}
                required
                className="border rounded-lg p-2"
              />
              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={handleChange}
                className="border rounded-lg p-2"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Clients;
