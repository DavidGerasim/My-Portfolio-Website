import { Item } from "@radix-ui/react-select";
import { icons } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DavidGerasim" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/david-gerasim" },
  //   { icon: <FaInstagram />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((Item, index) => {
        return (
          <Link key={index} href={Item.path} className={iconStyles}>
            {Item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
