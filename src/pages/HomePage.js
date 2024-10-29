import React from 'react';

import futureImage from '../images/hero-image.png';

const HomePage = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="container mx-auto flex justify-center items-center mt-24">
        <h1 className="flex flex-col gap-4 text-5xl text-center"><span>We're going places <i>fast</i>.</span><span className="text-8xl font-bold text-neutral-300">There's no time to wait.</span></h1>
      </div>
      <img src={futureImage} alt="Futuristic space suit" className="-mt-80 w-full" />
    </div>
  );
}

export default HomePage;