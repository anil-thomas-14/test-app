import SocialIcons from './social-icons';
import { socialIconsFooter } from './utils';

const Footer = () => {
  return (
    <div className="footer">
      <SocialIcons render={socialIconsFooter} />
      <h6 className='footer-text'>Example@email.com</h6>
      <h6 className='footer-text'>Copyright © 2020 Name. All rights reserved.</h6>
    </div>
  )
}

export default Footer;