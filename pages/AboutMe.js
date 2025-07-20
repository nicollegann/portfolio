import { Element } from "react-scroll";
import Loader from "../components/Loader.js";
import Image from "next/image";
import profilePic from "../public/images/profilepic.png";
import {
  DiJava,
  DiJavascript1,
  DiPython,
  DiReact,
  DiPostgresql,
} from "react-icons/di";
import { SiNextdotjs, SiHtml5, SiCss3, SiDjango } from "react-icons/si";

function AboutMe() {
  return (
    <Element id="about" name="about">
      <Loader>
        <div className="w-3/4 mx-auto my-36 flex flex-col justify-center items-center">
          <p className="text-md uppercase text-brown-200 select-none">
            values and passion
          </p>
          <h1 className="text-brown-300 text-6xl font-bold text-center select-none">
            About Me
          </h1>

          <div className="w-full">
            {/* for medium and small screens*/}
            <div className="w-1/2 mx-auto mt-14 mb-10 lg:hidden">
              <div className="mx-auto drop-shadow-xl">
                <Image
                  src={profilePic}
                  alt="profileImage"
                  layout="responsive"
                  className="rounded-full brightness-105"
                />
              </div>
            </div>

            <div className="flex justify-center items-center text-left">
              {/* for large and bigger screens*/}
              <div className="w-1/4 mr-16 hidden lg:block drop-shadow-xl">
                <Image
                  src={profilePic}
                  alt="profileImage"
                  layout="intrinsic"
                  className="rounded-full hidden lg:block brightness-105"
                />
              </div>
              <div className="flex flex-col lg:mt-28 lg:mb-20">
                <h1 className="mb-10 text-xl font-semibold">
                  Hey there! My name is{" "}
                  <span className="text-white bg-brown-100">
                    &nbsp;Nicolle Gan&nbsp;
                  </span>{" "}
                  (yes, with double Ls!)
                </h1>
                <div className="text-left text-lg mb-5 flex-wrap sm:max-w-xl xl:max-w-2xl leading-loose">
                  <p>
                    I&apos;m passionate about building things for the web and
                    have an interest in exploring various technologies. I&apos;m
                    always keen on learning new things and like to remain
                    adaptable in my work. I hope to be able to use technology to
                    create meaningful applications for the community and the
                    world.
                  </p>
                  <p className="mt-6">
                    My current interests include software engineering and cyber
                    security.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-auto mt-4 flex flex-col justify-center items-center">
              <h1 className="text-brown-300 text-xl font-bold text-center">
                Technologies I have worked with
              </h1>
            </div>
            <div className="sm:w-11/12 lg:w-2/3 flex flex-wrap justify-center items-center gap-10 mx-auto mt-10">
              <div className="icon-label-set">
                <DiJava className="icon" />
                <h2 className="icon-label">Java</h2>
              </div>
              <div className="icon-label-set">
                <DiJavascript1 className="icon" />
                <h2 className="icon-label">JavaScript</h2>
              </div>
              <div className="icon-label-set">
                <DiPython className="icon" />
                <h2 className="icon-label">Python</h2>
              </div>
              <div className="icon-label-set">
                <DiPostgresql className="icon" />
                <h2 className="icon-label">SQL</h2>
              </div>
              <div className="icon-label-set">
                <DiReact className="icon" />
                <h2 className="icon-label">React</h2>
              </div>
              <div className="icon-label-set">
                <SiNextdotjs className="icon" />
                <h2 className="icon-label">NextJS</h2>
              </div>
              <div className="icon-label-set">
                <SiDjango className="icon" />
                <h2 className="icon-label">Django</h2>
              </div>
              <div className="icon-label-set">
                <SiHtml5 className="icon" />
                <h2 className="icon-label">HTML</h2>
              </div>
              <div className="icon-label-set">
                <SiCss3 className="icon" />
                <h2 className="icon-label">CSS</h2>
              </div>
            </div>
          </div>
        </div>
      </Loader>
    </Element>
  );
}

export default AboutMe;
