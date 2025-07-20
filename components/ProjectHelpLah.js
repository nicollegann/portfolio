import React, { useState } from "react";
import Image from "next/image";
import HelpLahScreenshot from "../public/images/helplah-screenshot.png";
import { SiGithub, SiReact, SiAntdesign } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";

function ProjectHelpLah() {
  const [showModal, setShowModal] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <div
        className="project-card"
        onClick={() => setShowModal(true)}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        {mouseOver ? (
          <>
            <div className="grid grid-cols-1 grid-rows-1">
              <div className="rounded-t-lg opacity-15 grayscale contrast-50 blur-xs">
                <Image
                  src={HelpLahScreenshot}
                  alt="tutor-manager"
                  layout="responsive"
                  className="rounded-t-lg"
                />
              </div>
              <div className="absolute self-center justify-self-center text-center">
                <p className="font-bold text-lg text-brown-300 bg-cream-100">
                  HelpLah!
                </p>
                <p className="font-semibold text-sm text-neutral-300 bg-brown-100">
                  View Project
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 grid-rows-1">
            <div className="rounded-t-lg">
              <Image
                src={HelpLahScreenshot}
                alt="tutor-manager"
                layout="responsive"
                className="rounded-t-lg"
              />
            </div>
          </div>
        )}

        <div className="project-card-description">
          <p>
            A centralized web-based platform for managing and discovering
            volunteer opportunites in Singapore.
          </p>
        </div>
        <div className="project-card-techstacks">
          <div className="project-label">
            <FaJava className="project-label-icon" />
            Java
          </div>
          <div className="project-label">
            <SiReact className="project-label-icon" />
            React
          </div>
          <div className="project-label">
            <SiAntdesign className="project-label-icon" />
            AntDesign
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-auto overscroll-contain fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-700 hover:bg-gray-700 hover:bg-opacity-20">
            <div className="w-5/6 md:w-2/3 h-screen">
              <div className="project-modal mt-10">
                <div className="project-modal-header">
                  <h3 className="sm:text-xl md:text-3xl font-semibold text-gray-900">
                    HelpLah!
                  </h3>
                  <button
                    type="button"
                    className="project-modal-button"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex gap-10">
                  <div className="w-2/5 mb-4 drop-shadow-md hidden md:block">
                    <Image
                      src={HelpLahScreenshot}
                      alt="tutor-manager"
                      layout="responsive"
                      className="rounded-md"
                    />
                  </div>
                </div>
                <div className="space-y-6 mb-12 leading-relaxed text-gray-700">
                  <p className="text-justify">
                    <span className="font-bold">HelpLah!</span> is a web-based
                    application that serves as a centralized hub for managing
                    and discovering volunteer opportunities in Singapore. The
                    platform facilitates both sides of the volunteering
                    equation: enabling users to browse and sign up for events,
                    while equipping event organisers with tools to create,
                    manage and track those events. This web application utilizes
                    Java Spring Boot on the back-end and React on the front-end.
                  </p>
                  <p>
                    <span className="font-semibold">Main features</span> include
                    <li>Role based user registration and login</li>
                    <li>Event discovery and sign up for volunteers</li>
                    <li>
                      Event creation, editing, and volunteer tracking for
                      organisers
                    </li>
                    <li>Notifications</li>
                  </p>
                  <p>
                    This project is part of{" "}
                    <a
                      href="https://www.iss.nus.edu.sg/stackable-certificate-programmes/graduate-certificate/smart-systems-platforms/graduate-certificate-in-designing-modern-software-systems"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold ml-0.5 hover:text-indigo-700"
                    >
                      {" "}
                      the Project Module for NUS-ISS Graduate Certificate in
                      Designing Modern Software Systems.
                    </a>
                    .
                  </p>
                </div>
                <div className="flex flex-wrap gap-5">
                  <a
                    href="https://github.com/nicollegann/HelpLah-NUSISS-SWE5006"
                    target="_blank"
                    rel="noreferrer"
                    className="project-modal-link-button"
                  >
                    <SiGithub className="mr-2 text-gray-700" />
                    Github
                  </a>
                  <a
                    href="https://drive.google.com/file/d/15I0r8e46du3tYa0A_1ILRsTIe48n9mGp/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="project-modal-link-button"
                  >
                    <GrDocument className="mr-2 text-gray-700" />
                    Slides
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default ProjectHelpLah;
