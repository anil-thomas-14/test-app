import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaGoogle } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

// export const apiUrl = "https://restcountries.com/v2/all?fields=name,region,flag";
export const apiUrl = import.meta.env.VITE_API_URL;
export const limit = 10;

export const socialIconsSignin = () => (
  <div className="social-icons d-flex flex-wrap justify-content-center">
    <Button variant="link" className="rounded-circle p-2" href="https://google.com" target="_blank" aria-label="Google">
      <FaGoogle className="social-icon" size={40} />
    </Button>
    <Button variant="link" className="rounded-circle p-2" href="https://facebook.com" target="_blank" aria-label="Facebook">
      <FaFacebook className="social-icon" size={40} />
    </Button>
    <Button variant="link" className="rounded-circle p-2" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
      <FaLinkedin className="social-icon" size={40} />
    </Button>
    <Button variant="link" className="rounded-circle p-2" href="https://twitter.com" target="_blank" aria-label="Twitter">
      <FaTwitter className="social-icon" size={40} />
    </Button>
  </div>
);

export const socialIconsFooter = () => (
  <div className="social-icons d-flex flex-wrap justify-content-center">
    <Button variant="link" className="rounded-circle p-2" href="https://facebook.com" target="_blank" aria-label="Facebook">
      <FaFacebook className="social-icon" size={40} />
    </Button>
    <Button variant="link" className="rounded-circle p-2" href="https://twitter.com" target="_blank" aria-label="Twitter">
      <FaTwitter className="social-icon" size={40} />
    </Button>
    <Button variant="link" className="rounded-circle p-2" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
      <FaLinkedin className="social-icon" size={40} />
    </Button>
    <Button variant="link" className="rounded-circle p-2" href="https://youtube.com" target="_blank" aria-label="Youtube">
      <FaYoutube className="social-icon" size={40} />
    </Button>
  </div>
);

export const getApiData = async ({ region }) => {
  try {
    const apiResponse = await fetch(apiUrl);

    if (!apiResponse.ok) {
      throw new Error(`HTTP error! Status: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();

    return { data, error: null, total: data.length };
  } catch (err) {
    console.error("Fetch error:", err);
    return { data: [], error: err.message || "Failed to load countries" }; // ✅ Fix: Return `null` instead of error object
  }
};


