import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
  return (
    <div className='relative'>
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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black text-3xl font-bold"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>

  rfdfgs

    </div>
    </div>
  );
};

export default Banner;
