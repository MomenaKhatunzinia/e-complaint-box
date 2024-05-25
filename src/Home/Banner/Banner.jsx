import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Tilt from 'react-parallax-tilt';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <div className='relative'>
      <div className='opacity-85
      
      '>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={3000}
        >
          <div
         className=' lg:max-h-[400px] '
          data-src="/public/Images/download (1).jpeg" 
          
          />
          <div data-src="/public/Images/569009aa-c00f-462f-9e1a-08accaf85e9d.jpg" />
          <div data-src="/public/Images/istockphoto-1145037784-612x612.jpg" />
          <div data-src="/public/Images/UndergroundWaterLine-Broken-717c87cffc3c4903988fe0dfaca72809.jpg" />
        </AutoplaySlider>
      </div>
     
      <div className='absolute lg:bottom-5 w-2/4 h-1/4 lg:ml-64 
      bottom-3
      ml-32
     
      '>
        <Tilt className='bg-white
        opacity-70
        rounded-md
        shadow-md
        h-full w-full flex justify-center items-center'>
          <div className=''>
            <h1 className='lg:text-5xl text-black font-bold'>Fill your complain here</h1>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Banner;
