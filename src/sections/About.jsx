import Globe from "react-globe.gl";
import { color } from "three/webgpu";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy =()=>{
        navigator.clipboard.writeText("https://www.linkedin.com/in/kailaashjeevan/");
        setHasCopied(true)

        setTimeout(()=>{
            setHasCopied(false)
        },2000)
    }

  return (
    <section className="c-space my-20" id="about">
      <div
        className="grid xl:grid-cols-3 xl:grid-rows-6 
        md:grid-cols-2 grid-cols-1 gap-5 h-full"
      >
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I'm Kailaash Rithu!</p>
              <p className="grid-subtext">
                {" "}
                With 7 years of Experience, I've honed my skills in Full Stack
                Development on WebApps and Mobile Apps. I'm also an expert at
                AI, AR, VR and Mixed Reality.
              </p>
            </div>
          </div>
        </div>

        {
          //Second Element
        }
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I'm proficient in a wide range of technologies, including Web & Mobile
                Applications, Backend Development, Game Development, AI, ML, AR, AR, MR, XR and IoT
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div
              className="rounded-3xl w-full sm:h-[326px] h-fit flex 
              justify-center items-center"
            >
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div >
              <p className="grid-headtext">
                I work remotely across any timezone!
              </p>
              <p className="grid-subtext">I'm from India!</p>
              <Button
                name={"Contact Me"}
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-fill sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Codind</p>
              <p className="grid-subtext">
                Coding is a cup of coffee, except its Black Coffee and not Latte
                or Mocha!
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
              <img
                src="assets/grid4.png"
                alt="gridd4"
                className="w-full m:h-[126px] s:h-[276px] h-fit object-cover sm:object-top"
              />
              <div className="space-y-2">
                <p className="grid-headtext text-center">
                    Contact Me!
                </p>
                <div className="copy-container" onClick={handleCopy}>
<img src={hasCopied? 'assets/tick.svg' : 'assets/copy.svg'} alt="" srcset="" />
<p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white ">Copy LinkedIn Id</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;
