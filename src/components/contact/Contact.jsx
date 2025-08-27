import "./contact.scss";
import linkedinLogo from "../../assets/linkedIn.png";
import githubLogo from "../../assets/github.png";
import resumeLogo from "../../assets/resume.png";
import starSmall from "../../assets/girl.png";
import starBig from "../../assets/decoration.png";

const Contact = () => {
  return (
    <section className='contact' id="contact">
      <div className='contact-left'>
        <h1 className='contact-title'>Let's keep in touch!!</h1>

        <div className='contact-box'>
          <div className='input-wrapper'>
            <div className='label'>Name</div>
            <input type='text' placeholder='Type your name here..' />
          </div>

          <div className='input-wrapper'>
            <div className='label'>Email</div>
            <input type='email' placeholder='Type your mail here..' />
          </div>

          <div className='message-wrapper'>
            <textarea placeholder='Write your message...' />
            <button className='send-btn'>Send</button>
          </div>
        </div>

        <div className='socials'>
          <a
            href='https://www.linkedin.com/in/sherinann'
            target='_blank'
            rel='noopener noreferrer'
            className='social-item'
          >
            <div className='logo'>
              <img src={linkedinLogo} alt='LinkedIn' />
            </div>
            <span>Linked In</span>
          </a>

          <a
            href='https://github.com/stwhello'
            target='_blank'
            rel='noopener noreferrer'
            className='social-item'
          >
            <div className='logo'>
              <img src={githubLogo} alt='GitHub' />
            </div>
            <span>GitHub</span>
          </a>

          <a
            href='https://drive.google.com/file/d/1K0zpx16X94JarBQ7aWAaTCCq2P4wVPxX/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='social-item'
          >
            <div className='logo'>
              <img src={resumeLogo} alt='Resume' />
            </div>
            <span>Resume</span>
          </a>
        </div>
      </div>

      <div className='contact-right'>
        <img src={starSmall} alt='star' className='star-small' />
        <img src={starBig} alt='star' className='star-big' />
      </div>
    </section>
  );
};

export default Contact;
