import "./scrambler.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";
import w5 from "../../assets/w5.png";

const logos = [
  { src: w1, left: "-2%", rotate: -8 },
  { src: w2, left: "20%", rotate: 5 },
  { src: w3, left: "40%", rotate: -5 },
  { src: w4, left: "58%", rotate: 8 },
  { src: w5, left: "72%", rotate: -6 },
];

const Scrambler = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className='Scrambler' ref={ref}>
      <div className='heading'>
        Driven by <span>curiosity.</span>
        <br />
        Defined by solutions.
      </div>

      <div className='logos'>
        {logos.map((logo, i) => (
          <motion.img
            key={i}
            src={logo.src}
            alt={`logo-${i}`}
            className='logo'
            style={{ left: logo.left, transform: `rotate(${logo.rotate}deg)` }}
            initial={{ y: "-100vh", opacity: 0 }}
            animate={
              inView
                ? {
                    y: "0vh",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 40,
                      damping: 5,
                      delay: i * .3,
                    },
                  }
                : {}
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Scrambler;
