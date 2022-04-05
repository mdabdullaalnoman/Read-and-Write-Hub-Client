import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero-warp grid md:grid-rows-2 grid-flow-col bg-black p-3 md:p-10">
                 <div className="imgThree row-span-2 col-span-2">
                    <img className='w-full' src="https://i.ibb.co/TbgyddX/hero-watch.png" alt="wealth" />
                </div>
                <div className="imageOne row-span-1">
                    <img className='w-full' src="https://i.ibb.co/9yNHdw1/hero-rock.png" alt="music" />
                </div>
                <div className="imgTwo col-span-1">
                    <img className='w-full' src="https://i.ibb.co/j3Lx6Ts/hero-car.png" alt="health" />
                </div>
               
            </div>
        </div>
    );
};

export default Hero;