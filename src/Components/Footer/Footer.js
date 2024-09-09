import { SectionPrimary } from "../Section/Section";
import { FcIdea } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
        <SectionPrimary>
            <div className="flex flex-col items-start gap-5">
                <span className="font-eloquiabold text-2xl text-wisteria-500 md:text-4xl">
                    Let's <span className="stroke1 font-eloquiabold text-fantasy-50">Connect</span> for <br /> Something Special
                </span>
                <span className="font-eloquialight text-xl md:text-3xl text-emperor-500 flex flex-row ">
                <FcIdea />
                <a href="mailto:nhadoan1212.com">nhadoan1212@gmail.com</a>
                <FcIdea />
                </span>
                <div className="flex flex-row gap-5">
                    <a href="https://www.linkedin.com/in/doantran12/">
                        <FaLinkedin className="text-5xl text-wisteria-500" />
                    </a>
                    <a href="https://github.com/doan1212">
                        <FaSquareGithub className="text-5xl text-wisteria-500" />
                    </a>
                </div>
         
                <span className="font-eloquialight text-lg text-emperor-500 md:text-base">
                    © 2023 by Doan Tran.
                </span>
            </div>
            
        </SectionPrimary>
        </footer>
    );
    }
export default Footer;