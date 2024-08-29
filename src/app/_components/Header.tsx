"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMyArmRising, setIsMyArmRising] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX } = e;
      if (clientX < 500) {
        setIsMyArmRising(true);
      } else {
        setIsMyArmRising(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos < 430) {
        setActiveSection("about");
      } else if (scrollPos >= 430 && scrollPos < 2700) {
        setActiveSection("projects");
      } else if (scrollPos >= 2700) {
        setActiveSection("skills");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative mt-10 lg:sticky lg:top-0 lg:mt-0 lg:flex lg:max-h-[600px] lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="self-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Yoann Bonge
          </h1>
        </Link>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Développeur web frontend junior
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          En reconversion dans le domaine du web
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <Image
          src={"/me.webp"}
          alt="Une photo de moi"
          width={200}
          height={200}
          priority={true}
          quality={100}
          className="hidden lg:block"
        />
        <Image
          className={`bottom-0 left-[22%] hidden transition-transform duration-500 lg:absolute lg:block xl:left-[17%] 2xl:left-[14%] ${
            isMyArmRising ? "rotate-0" : "translate-y-44 -rotate-45"
          }`}
          src={"/my-arm.webp"}
          alt="Mon bras"
          width={80}
          height={80}
        />
        <ul className="mb-2 mt-8 flex h-6 gap-5 lg:ml-32 lg:self-end">
          <li>
            <a
              className="group block"
              href="https://github.com/yoannBonge"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Github (s'ouvre dans un nouvel onglet)"
              title="Github"
            >
              <span className="sr-only">Github</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#94A3B8"
                className="h-6 w-6 transition-colors duration-200 group-hover:fill-white"
                aria-hidden="true"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="group block"
              href="https://www.linkedin.com/in/yoann-bonge/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn (s'ouvre dans un nouvel onglet)"
              title="LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#94A3B8"
                className="h-6 w-6 transition-colors duration-200 group-hover:fill-white"
                aria-hidden="true"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="group block"
              href="https://twitter.com/Yoann_Bonge"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="X anciennement Twitter (s'ouvre dans un nouvel onglet)"
              title="X anciennement Twitter"
            >
              <span className="sr-only">X anciennement Twitter</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#94A3B8"
                className="h-6 w-6 transition-colors duration-200 group-hover:fill-white"
                aria-hidden="true"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="group block"
              href="mailto:yoannbonge@live.fr"
              aria-label="Contacter par email (s'ouvre dans un nouvel onglet)"
              title="Contacter par email"
            >
              <span className="sr-only">Contacter par email</span>
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="2"
                className="-ml-1 -mt-1 h-8 w-8 transition-colors duration-200 group-hover:stroke-white"
                aria-hidden="true"
              >
                <title>Email</title>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <hr className="hidden h-[2px] border-none bg-gradient-to-r from-slate-200 to-transparent lg:block" />
      <nav
        className="hidden w-[316px] self-center lg:flex lg:h-10"
        aria-label="Ancres vers les sections"
      >
        <ul className="mt-16 w-max">
          <li>
            <Link className="group flex items-center py-3" href="#about">
              <span
                className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                  activeSection === "about"
                    ? "w-16 bg-slate-200"
                    : "w-8 bg-slate-600"
                } group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200`}
              ></span>
              <span
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSection === "about"
                    ? "text-slate-100"
                    : "text-slate-500"
                } group-hover:text-slate-200 group-focus-visible:text-slate-200`}
              >
                À propos
              </span>
            </Link>
          </li>
          <li>
            <Link className="group flex items-center py-3" href="#projects">
              <span
                className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                  activeSection === "projects"
                    ? "w-16 bg-slate-200"
                    : "w-8 bg-slate-600"
                } group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200`}
              ></span>
              <span
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSection === "projects"
                    ? "text-slate-100"
                    : "text-slate-500"
                } group-hover:text-slate-200 group-focus-visible:text-slate-200`}
              >
                Mes projets
              </span>
            </Link>
          </li>
          <li>
            <Link className="group flex items-center py-3" href="#skills">
              <span
                className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                  activeSection === "skills"
                    ? "w-16 bg-slate-200"
                    : "w-8 bg-slate-600"
                } group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200`}
              ></span>
              <span
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSection === "skills"
                    ? "text-slate-100"
                    : "text-slate-500"
                } group-hover:text-slate-200 group-focus-visible:text-slate-200`}
              >
                Mes compétences
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
