import React, { useEffect } from 'react'

function Container() {
    useEffect(() => {
        const video = document.getElementById('myVideo');

        if (video) {
            video.addEventListener('ended', () => {
                video.currentTime = 0;
                video.play();
            });

            // Ensure video is played and muted for autoplay policies
            video.muted = true;
            video.play();
        }
    }, []);

    return (
        <>
            <div className="container">
                <div className="forecast">
                    <video width="100px" id='myVideo' src="./src/assets/sunny.webm" loop ></video>

                    {/* <div className="location-not-found">
                        <h3>Sorry, Location not found!!!</h3>
                        <img id='error' src="./src/assets/error-404.png" alt="404 Error"/>
                    </div> */}

                    <div className="temperature"></div>
                    <div className="description"></div>
                    <div className="humidity"></div>
                    <div className="wind-speed"></div>
                </div>
            </div>
        </>
    )
}

export default Container