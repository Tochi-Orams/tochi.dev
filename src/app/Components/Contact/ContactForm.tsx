"use client";

import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { sendMessage } from "@/app/Server Actions/SendGrid";
import { PulseLoader } from "react-spinners";
import { modalStatus } from "@/app/Types/Types";
import { ChevronDown } from "lucide-react";

const options = [
  "Job Opportunity",
  "Freelance project proposal",
  "Tutoring",
  "Networking connection",
  "Other",
];

interface props {
  props: {
    notification: modalStatus;
    setNotification: Dispatch<SetStateAction<modalStatus>>;
  };
}

const ContactForm: FC<props> = ({ props }) => {
  const { setNotification } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Topic");
  const [message, setMessage] = useState("");
  const [formComplete, setFormComplete] = useState(false);
  const [select, setSelect] = useState(false);
  const [selectInDOM, setSelectInDOM] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blurs, setBlurs] = useState({
    name: false,
    email: false,
    message: false,
  });

  const selectOption = (i: number) => {
    setTopic(options[i]);
    setSelect(false);
  };

  useEffect(() => {
    if (selectInDOM) {
      setSelect(true);
    }
  }, [selectInDOM]);

  useEffect(() => {
    if (selectInDOM && !select) {
      setTimeout(() => {
        setSelectInDOM(false);
      }, 300);
    }
  }, [select]);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        setSelect(false);
      }
    });

    return () =>
      window.removeEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          setSelect(false);
        }
      });
  }, []);

  // Validation
  const emailMatch =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nameValid = name !== "" && name.includes(" ");
  const emailValid = email.match(emailMatch);
  const topicValid = topic !== "Topic";
  const messageValid = message !== "";
  useEffect(() => {
    if (nameValid && emailValid && topicValid && messageValid) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [name, email, topic, message]);

  // Form submission
  const submit = async (e: FormData) => {
    if (formComplete) {
      setLoading(true);

      const formName = e.get("name")?.toString();
      const formEmail = e.get("email")?.toString();
      const formMessage = e.get("message")?.toString();

      const contents = {
        name: formName!,
        email: formEmail!,
        topic,
        message: formMessage!,
      };

      await sendMessage(contents).then((res: any) => {
        if (res) {
          console.log(res[0]);

          setName("");
          setEmail("");
          setTopic("Topic");
          setMessage("");
          setBlurs({ name: false, email: false, message: false });

          setNotification("success");
        } else {
          setNotification("fail");
        }
        setLoading(false);
      });
    }
  };

  return (
    <form action={submit} className="h-fit xl:w-1/2 md:w-3/4 w-full">
      <div className="w-full">
        <input
          name="name"
          id="name"
          className="textbox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          onBlur={() => setBlurs({ ...blurs, name: true })}
        />
        {blurs.name && !nameValid && (
          <p
            className={`text-white text-sm mt-1 bg-red-700/50 px-2 py-1 rounded-md`}
          >
            Please enter your FULL name.
          </p>
        )}
      </div>

      <div className="w-full">
        <input
          name="email"
          id="email"
          className="textbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          onBlur={() => setBlurs({ ...blurs, email: true })}
        />
        {blurs.email && !emailValid && (
          <p
            className={`text-white text-sm mt-1 bg-red-700/50 px-2 py-1 rounded-md`}
          >
            Please enter your email address.
          </p>
        )}
      </div>

      <div
        className={`duration-300 rounded-md ${
          select ? "bg-white/15 p-2" : "bg-transparent p-0"
        }`}
      >
        <button
          type="button"
          role="option"
          className="textbox flex justify-between items-center cursor-pointer relative z-50 outline-none"
          onClick={select ? () => setSelect(false) : () => setSelectInDOM(true)}
        >
          <p
            className={`text-lg  text-black ${
              topic === "Topic" ? "opacity-40" : "opacity-100"
            }`}
          >
            {topic}
          </p>
          <ChevronDown
            className={`h-4 pb-[1px] pr-2 duration-300 ${
              select ? "rotate-180" : ""
            }`}
          />
        </button>
        {selectInDOM && (
          <div
            className={`glass mt-2 rounded-md flex flex-col duration-300 h-auto overflow-hidden ${
              select
                ? "pointer-events-auto max-h-64 p-2"
                : "pointer-events-none max-h-0 p-0"
            }`}
          >
            {options.map((option, i) => (
              <button
                key={i}
                type="button"
                role="option"
                className="select-option"
                onClick={() => selectOption(i)}
              >
                <p className="text-left">{option}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <textarea
          name="message"
          id="message"
          className={`textbox mt-1 duration-300 ${select ? "mt-0" : "-mt-2"}`}
          style={{ minHeight: select ? "10px" : "100px", zIndex: 0 }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          onBlur={() => setBlurs({ ...blurs, message: true })}
        />
        {blurs.message && !messageValid && (
          <p
            className={`text-white text-sm mt-1 bg-red-700/50 px-2 py-1 rounded-md`}
          >
            Please enter a message.
          </p>
        )}
      </div>
      <button
        type="submit"
        className={`py-2 border-white border-2 rounded-md w-2/3 mx-auto text-center hover:bg-white/30 duration-300 cursor-pointer ${
          formComplete
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-40"
        }`}
      >
        {loading ? (
          <div className="mx-auto w-fit">
            <PulseLoader size={8} color="#fff" className="py-[2px]" />
          </div>
        ) : (
          <p className="text-xl font-medium">Submit</p>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
