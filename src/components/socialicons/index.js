import React from "react";
import "./style.css";
import {
  FaLinkedin,
  FaGithub,
  FaCircle,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { socialprofils } from "../../content_option";

const ICON_MAPPING = {
  default: FaCircle,
  github: FaGithub,
  gmail: SiGmail,
  linkedin: FaLinkedin
};

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofils).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
          return (
            <li key={platform}>
              <a href={url}>
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
