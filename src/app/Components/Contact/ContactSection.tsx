"use client";

import { useEffect, useState } from "react";
import { useSidebarContext } from "../../Context/SidebarContext";
import { useHomeSectionContext } from "../../Context/HomeSectionContext";
import ContactForm from "./ContactForm";
import Sidebar from "../Sidebar";
import ContactModal from "./ContactModal";
import { modalStatus } from "@/app/Types/Types";

const ContactSection = () => {
  const [notification, setNotification] = useState<modalStatus>("");
  const [modal, setModal] = useState(false);

  const { currentSection } = useHomeSectionContext();
  const { setSidebar } = useSidebarContext();

  useEffect(() => {
    if (notification !== "") {
      setModal(true);
    }

    setTimeout(() => {
      setModal(false);
      setTimeout(() => {
        setNotification("");
      }, 600);
    }, 6000);
  }, [notification]);

  const formProps = {
    notification,
    setNotification,
    modal,
  };

  const modalProps = {
    modal,
    notification,
  };

  return (
    <section
      id="contact-section"
      className="w-full h-screen flex justify-center overflow-hidden relative"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full section-padding flex justify-around items-center">
        <ContactForm props={formProps} />

        <button
          type="button"
          className="glass px-6 py-10 w-fit h-fit hover:bg-white/60 cursor-pointer duration-300 xl:block hidden"
          onClick={() => setSidebar(true)}
        >
          <p className="h2Size font-medium">Get In Touch</p>
        </button>
      </div>

      {currentSection === "contact" && <Sidebar />}

      <ContactModal props={modalProps} />
    </section>
  );
};

export default ContactSection;
