import './contact.scss';
import girl from "../../assets/girl.png"
import decortaion from "../../assets/decoration.png"
import github from "../../assets/github.png"
import linkedIn from "../../assets/linkedIn.png"
import resume from "../../assets/resume.png"

function Contact() {
  return (
    <section className="contact">
      <div className="contact-left">
        <h2>Let's keep<br/>in touch!!</h2>

        <div className="contact-box">
          <div className="field">
            <div className="label">Name</div>
            <input type="text" placeholder="Type your name here.." />
          </div>

          <div className="field">
            <div className="label">Email</div>
            <input type="email" placeholder="Type your mail here.." />
          </div>

          <div className="message-box">
            <textarea placeholder="Write your message..."></textarea>
            <button className="send-btn">Send</button>
          </div>
        </div>

        <div className="social-links">
          <div className="social-item">
            <div className="icon-circle">
              <img src={linkedIn} alt="LinkedIn" />
            </div>
            <span>LinkedIn</span>
          </div>

          <div className="social-item">
            <div className="icon-circle">
              <img src={github} alt="GitHub" />
            </div>
            <span>GitHub</span>
          </div>

          <div className="social-item">
            <div className="icon-circle">
              <img src={resume} alt="Resume" />
            </div>
            <span>Resume</span>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <img src={girl} alt="Girl" />
        <img src={decortaion} alt="Decoration" />
      </div>
    </section>
  );
}

export default Contact;
