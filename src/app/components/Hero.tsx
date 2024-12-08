import React from 'react';

function Hero() {
    return (
        <>
            <div className="hero h-screen w-full">
                <div className="hero-content max-w-[65.5rem] mx-auto flex flex-col justify-start items-start text-white py-28 h-full gap-8 sm:gap-6 md:gap-10 px-4">
                    <div className="text-base font-bold">
                        <p>Summer 2020</p>
                    </div>
                    <div className="font-bold text-4xl md:text-6xl">
                        <h1>New Collection</h1>
                    </div>
                    <div className="text-sm md:text-lg">
                        <h3>{`We know how large objects act,`}</h3>
                        <h3>{`but think on a small scale`}</h3>
                    </div>
                    <div className="w-44 md:w-56 h-12 md:h-16 bg-[#2DC071] rounded flex justify-center items-center text-lg md:text-2xl font-bold">
                        <button className="w-full h-full">Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
