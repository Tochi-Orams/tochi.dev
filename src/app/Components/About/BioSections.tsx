"use client";

import { ArrowLeft, CircleQuestionMark } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";

interface props {
  displaySection: number;
}

export const Overview: FC<props> = ({ displaySection }) => {
  const [fade, setFade] = useState(false);
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [render, setRender] = useState(true);

  const nameRef = useRef<HTMLHeadingElement>(null);

  const name = "Tochi Oramasionwu";
  const pronounce = "(TOE·chee Oh·RAH·ma·see·on·woo)";

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()<>_+";

  const assignLetter = (input: string) => {
    if (input === input.toUpperCase()) {
    }

    if (input === " ") {
      return " ";
    } else {
      if (input === input.toLowerCase()) {
        return letters[Math.floor(Math.random() * 50)].toLowerCase();
      } else {
        return letters[Math.floor(Math.random() * 50)];
      }
    }
  };

  const encrypt = () => {
    setIsChanging(true);
    nameRef.current?.classList.add("text-3xl");

    if (nameRef.current && !isChanging) {
      let i = 0;
      let len = name.length;

      const interval = setInterval(() => {
        const encrypted: string[] = [];

        for (let x = 0; x < pronounce.length; x++) {
          if (x === name.length - 1 && x < pronounce.length) {
            len += 1 / 4;
          }

          if (x < i) {
            encrypted.push(pronounce[x]);
          } else {
            encrypted.push(assignLetter(pronounce[x]));
          }
        }

        nameRef.current!.innerText = encrypted
          .slice(0, Math.floor(len - 1))
          .join("");

        if (i >= pronounce.length) {
          clearInterval(interval);
          setIsChanging(false);
        }

        i += 1 / 2;
      }, 20);
    }
  };

  const decrypt = () => {
    setIsChanging(true);
    nameRef.current?.classList.remove("text-3xl");
    let i = 0;
    let len = 31;

    if (nameRef.current && !isChanging) {
      const interval2 = setInterval(() => {
        const encrypted: string[] = [];

        len -= 0.8;

        nameRef.current!.innerText.split("").forEach((letter, index) => {
          if (index < i) {
            encrypted.push(name[index]);
          } else {
            encrypted.push(assignLetter(letter));
          }
        });

        nameRef.current!.innerText = encrypted
          .slice(0, Math.ceil(len - 1) >= 17 ? Math.ceil(len - 1) : 17)
          .join("");

        if (i >= pronounce.length) {
          clearInterval(interval2);
          setIsChanging(false);
        }

        i += 1;
      }, 45);
    }
  };

  useEffect(() => {
    if (isEncrypted) {
      encrypt();
    } else if (!render) {
      decrypt();
    }
    setRender(false);
  }, [isEncrypted]);

  useEffect(() => {
    if (displaySection === 0) {
      setTimeout(() => {
        setFade(true);
      }, 500);
    } else {
      setFade(false);
    }
  }, [fade]);

  return (
    <div className="bio-section flex flex-col sm:gap-6 gap-2">
      <h2
        ref={nameRef}
        className="w-full h-12 pointer-events-none duration-1000 lg:block hidden"
      >
        {name}
      </h2>

      <h2 className="md:text-4xl sm:text-2xl text-lg lg:hidden block">
        Tochi Oramasionwu
      </h2>

      <div className="bio_text flex flex-col gap-4">
        <p>
          Hey! I'm Tochi, a passionate Full-Stack developer with a flair for
          creativity and a strong engineering background. I combine my love for
          design and coding to bring visually stunning and highly functional
          websites and apps to life.
        </p>
        <p>
          I aim to deliver seamless user experiences that captivate and inspire,
          while ensuring the highest standards of usability and accessibility.
        </p>
        <p>
          Outside of website and app development, I have substantial experience
          using code for task automation, computational problem-solving, and for
          data science and machine learning.
        </p>
      </div>

      <img
        src="/Nzu.png"
        alt="Tochi"
        className={`block h-full lg:w-3/5 w-full object-cover absolute top-0 xm:-right-36 right-0 -z-10 duration-1000 ${
          !fade ? "opacity-0" : "xm:opacity-40 opacity-25"
        }`}
      />

      <button
        type="button"
        aria-label="Toggle phonetic spelling"
        title="Toggle phonetic spelling"
        className={`lg:flex hidden cursor-pointer h-7 w-7 absolute top-4 left-4 rounded-full bg-white/15 duration-300 items-center hover:bg-white/30 ${
          isChanging
            ? "opacity-30 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
        onClick={() => setIsEncrypted(!isEncrypted)}
      >
        <div className="mx-auto">
          {isEncrypted ? <ArrowLeft /> : <CircleQuestionMark />}{" "}
        </div>
      </button>
    </div>
  );
};

export const Education: FC<props> = ({ displaySection }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (displaySection === 1) {
      setTimeout(() => {
        setFade(true);
      }, 500);
    } else {
      setFade(false);
    }
  }, [fade]);

  return (
    <div className="bio-section flex flex-col sm:gap-6 gap-2">
      <h2 className="w-full h-12 pointer-events-none duration-1000 lg:block hidden">
        My Education
      </h2>

      <h2 className="md:text-4xl sm:text-2xl text-lg lg:hidden block">
        My Education
      </h2>

      <div className="bio_text flex flex-col gap-4">
        <p>
          I graduated from the University of Exeter, in England, in 2019 with an
          MEng (Master of Engineering) degree in mechanical engineering, with
          1st Class Honours (4.0 GPA equivalent). I went on to get a second MEng
          degree in mechanical engineering with an emphasis in "ELITE"
          (Entrepreneurship, Leadership, Innovation, and Technology in
          Engineering) from the University of Toronto, in Canada, which I
          completed in 2022.
        </p>
        <p>
          Shortly after I completed my second Master's I made the decision to
          transition into tech and completed the{" "}
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7057125539773300736/"
            target="_blank"
          >
            Meta Front-End Developer
          </a>{" "}
          professional certification course, which helped me hone my
          problem-solving skills in the field of software development.
        </p>
      </div>

      <img
        src="/grad.png"
        alt="Grad"
        className={`block h-full lg:w-2/3 w-full object-cover absolute top-0 -right-36 -z-10 duration-1000 ${
          !fade ? "opacity-0" : "xm:opacity-40 opacity-20"
        }`}
      />
    </div>
  );
};

export const Hobbies: FC<props> = ({ displaySection }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (displaySection === 2) {
      setTimeout(() => {
        setFade(true);
      }, 500);
    } else {
      setFade(false);
    }
  }, [fade]);

  return (
    <div className="bio-section flex flex-col gap-6">
      <h2 className="w-full h-12 pointer-events-none duration-1000 lg:block hidden">
        My Hobbies
      </h2>

      <h2 className="md:text-4xl text-2xl lg:hidden block">My Hobbies</h2>

      <div className="bio_text flex flex-col gap-4">
        <p>
          Coding and problem-solving aren't the only ways I like to apply my
          creativity. When I'm not working, you'll often find me producing{" "}
          <a href="https://linktr.ee/orasmus" target="_blank">
            music
          </a>{" "}
          or creating{" "}
          <a href="https://www.artstation.com/tochiorams" target="_blank">
            3D art
          </a>
          .
        </p>
        <p>
          I also enjoy being active and some of my more active hobbies include
          going to the gym, playing golf, volleyball or ping-pong, and
          occasionally going for a hike.
        </p>
        <p>
          Otherwise, when I just feel like taking it easy, you might find me
          playing video games or board games, watching movies or tv series,
          learning new recipes, or hanging out with my friends... I also just be
          coding for fun sometimes lol
        </p>
      </div>

      <div
        className={`absolute bottom-1/2 -right-5 -z-10 duration-1000 block h-full lg:w-2/3 w-full scale-125 ${
          !fade ? "opacity-0" : "xm:opacity-40 opacity-20"
        }`}
      >
        <img
          src="/headphones.png"
          alt="Music"
          className="object-cover w-[30%] aspect-square absolute bottom-10 right-40 -z-10 duration-1000 -rotate-[20deg]"
        />

        <img
          src="/ball.png"
          alt="Ball"
          className="object-cover w-1/3 aspect-square absolute -bottom-40 right-64 -z-10 duration-1000"
        />

        <img
          src="/game.png"
          alt="Game"
          className="object-cover w-1/3 aspect-square absolute -bottom-32 right-10 -z-10 duration-1000 rotate-[15deg]"
        />
      </div>
    </div>
  );
};
