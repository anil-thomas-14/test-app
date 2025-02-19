import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = ({ finalData }) => {
  return (
    <div className="slider-container mb-4">
      <Carousel controls indicators>
        {
          finalData.map(item => {
            return (
              <Carousel.Item key={item.name}>
                <div className="d-flex justify-content-center slider-image-container">
                  <img
                    className="d-block w-50"
                    src={item.flag}
                    alt={item.name}
                  />

                </div>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Slider;