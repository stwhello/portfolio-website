import "./ribbon.scss";
import flower from "../../assets/flower.png"; 

const Ribbon = () => {
  const texts = [
    "VERSATILE DEVELOPER",
    "AI - ENTHUSIAST",
    "CRAFTING FUTURE-READY SOLUTIONS",
  ];

  return (
    <div className="ribbon-section">
      <div className="strip strip-one">
        <div className="marquee">
          {[...Array(10)].map((_, i) => (
            <div className="marquee-item" key={i}>
              {texts.map((t, idx) => (
                <span key={idx}>
                  {t} <img src={flower} alt="flower" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="strip strip-two">
        <div className="marquee">
          {[...Array(10)].map((_, i) => (
            <div className="marquee-item" key={i}>
              {texts.map((t, idx) => (
                <span key={idx}>
                  {t} <img src={flower} alt="flower" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
