import { useState } from "react";
import { workExperiences } from "../constants/index.js";

const WorkExperience = () => {
  const [active, setActive] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          {/* LEFT SIDE (Video instead of Developer Canvas) */}
          <div className="work-canvas flex items-center justify-center relative overflow-hidden">
            {!activeVideo  ? (
              <img
                src="assets/logo-black-nobg.png" // 👉 replace with your logo file path
                alt="Placeholder Logo"
                className="w-full h-full object-contain p-6 cursor-pointer"
                
              />
            ) : (
              <video
                src={activeVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain rounded-lg"
              />
            )}
          </div>

          {/* RIGHT SIDE (Experience Details) */}
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveVideo(item.video)} // 👈 play video on hover
                  onMouseLeave={() => setActiveVideo(null)}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img
                        className="w-full h-full rounded-[50%]"
                        src={item.icon}
                        alt={`${item.name} logo`}
                      />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} — <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
