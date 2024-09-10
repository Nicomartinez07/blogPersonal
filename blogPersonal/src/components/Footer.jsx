import React from "react";
import "/home/nicolas/Documentos/blogPersonal/blogPersonal/src/index.css"

// Terminal: npm i react-icons
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp, FaGithub, FaDiscord } from "react-icons/fa";
import { CiDark } from "react-icons/ci";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={isDarkMode ? "dark-footer" : "light-footer"}>
      <nav>
          <h2>Contact me</h2>
          <ul>
            <li>
              <a
                className="animated-button"
                href="mailto:nicolasmartinezalfonso@gmail.com"
              >
                <IoIosMail color="red" />
              </a>
            </li>
            <li>
              <a
                className="animated-button"
                href="https://wa.me/541151220207/?text=Hola%20te%20quiera%20contactar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp color="green" />
              </a>
            </li>
            <li>
              <a
                className="animated-button"
                href="https://github.com/Nicomartinez07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub color="black" />
              </a>
            </li>
            <li>
              <a
                className="animated-button"
                href="https://discordapp.com/users/spectreskill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord color="black" />
              </a>
            </li>
          </ul>
        </nav>
    </footer>
  );
};

export default Footer;
