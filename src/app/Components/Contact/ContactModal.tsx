"use client";

import { modalStatus } from "@/app/Types/Types";
import React, { FC } from "react";

interface props {
  props: {
    modal: boolean;
    notification: modalStatus;
  };
}

const ContactModal: FC<props> = ({ props }) => {
  const { modal, notification } = props;

  return (
    <div className={`notification ${modal ? "active" : ""}`}>
      <p className="text-lg text-center">
        {notification === "success"
          ? "Your message has been sent!"
          : notification === "fail"
          ? "An error occurred. Please try again."
          : ""}
      </p>
    </div>
  );
};

export default ContactModal;
