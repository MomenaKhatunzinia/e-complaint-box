
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

// const slider = (
//   <AwesomeSlider>
//     <div>1</div>
//     <div>2</div>
//     <div>3</div>
//     <div>4</div>
//   </AwesomeSlider>
// );

const Banner = () => {
    return (
        <div>
            {/* <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/4VdfsXw/download-1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}
<AwesomeSlider animation="cubeAnimation">
    <div data-src="/public/Images/download (1).jpeg" />
  </AwesomeSlider>
        </div>
    );
};

export default Banner;