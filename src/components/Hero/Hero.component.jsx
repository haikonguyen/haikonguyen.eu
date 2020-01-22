import React from 'react';

const videoSrc = '';

const Hero = () => {
  return (
    <div>
      <video
        src='http://thenewcode.com/assets/videos/polina.mp4'
        autoPlay
        muted
        loop
        id='myVideo'
      />

      <div class='content'>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
          phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
          maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore
          latine molestiae, ad mutat oblique delicatissimi pro.
        </p>
      </div>
    </div>
  );
};

export default Hero;
