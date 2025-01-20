import { Github } from "lucide-react";

const Footer = () => {
    return (
      <footer className="footer pt-5 flex items-center justify-center text-center bg-base-200">
        <a href="https://github.com/LLENTTO" target="_blank" className="flex">
          <h1 className="text-1xl font-bold">Made By LLENTTO</h1>
          <Github className="size-6" />
        </a>
      </footer>
    );
};

export default Footer;
