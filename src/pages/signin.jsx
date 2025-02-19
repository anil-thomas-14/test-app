import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SignInForm from '../components/sign-in-form'
import SocialIcons from '../components/social-icons';
import { socialIconsSignin } from '../components/utils';
import Image from 'react-bootstrap/Image';
import SignInImage from '../assets/sign-in-2.jpg'

const SignIn = () => {
  return (
    <Container className='sign-in-container'>
      <Row className='sign-in-div'>
        <Col md={12} lg={6}>
          <div className='form-wrapper'>
            <SignInForm />
            <SocialIcons render={socialIconsSignin} />
          </div>
        </Col>
        <Col lg={6} className='d-none d-lg-block image-container'>
          <Image className='sign-in-image' src={SignInImage} />
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn;