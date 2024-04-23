import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Tilt from 'react-parallax-tilt';

const Banner = () => {
  return (
    <div className='relative '>
      <div className='opacity-85'>
        <AwesomeSlider
          media={[
            {
              source: '/public/Images/download (1).jpeg',
            },
            {
              source: '/public/Images/569009aa-c00f-462f-9e1a-08accaf85e9d.jpg',
            },
            {
              source: '/public/Images/istockphoto-1145037784-612x612.jpg',
            },
            {
              source: '/public/Images/UndergroundWaterLine-Broken-717c87cffc3c4903988fe0dfaca72809.jpg',
            },
          ]}
        />
      </div>
      <div className='absolute bottom-0 w-full h-1/4  bg-stone-400'>
        <Tilt 
        tiltMaxAngleX={0} tiltMaxAngleY={30} className='bg-stone-400  h-full w-full flex justify-center items-center'>
          <div
         
          >
            <h1 className='text-3xl text-black font-bold'>React Parallax Tilt</h1>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Banner;
