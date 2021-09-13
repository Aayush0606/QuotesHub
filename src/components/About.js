import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaReact,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import { SiSocketDotIo, SiMongodb } from "react-icons/si";

export default function About() {
  document.title = `About Me`;
  return (
    <>
      <div className="container">
        <div className="container">
          <h1 className="text-center">About Me</h1>
          <p className="text-center">
            Hello my name is Aayush Sharma and I created this site
          </p>
        </div>
        <div className="container">
          <h3 className="text-center">Technologies Used</h3>
          <div className="text-center">
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <p className="social-link">
                  <FaReact className="icon" />
                </p>
              </li>
              <li className="list-inline-item">
                <p className="social-link">
                  <FaNode className="icon" />
                </p>
              </li>
              <li className="list-inline-item">
                <p className="social-link">
                  <SiSocketDotIo className="icon" />
                </p>
              </li>
              <li className="list-inline-item">
                <p className="social-link">
                  <FaBootstrap className="icon" />
                </p>
              </li>
              <li className="list-inline-item">
                <p className="social-link">
                  <SiMongodb className="icon" />
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <h3 className="text-center">Connect with me</h3>
          <div className="text-center">
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a
                  rel="noreferrer"
                  href="https://github.com/Aayush0606"
                  className="social-link"
                  target="_blank"
                >
                  <FaGithub className="icon" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/aayush-sharma-344497216"
                  className="social-link"
                  target="_blank"
                >
                  <FaLinkedin className="icon" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/aayush0606/"
                  className="social-link"
                  target="_blank"
                >
                  <FaInstagramSquare className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
