import React, { useEffect } from 'react';

function Container() {
    useEffect(() => {
        const video = document.getElementById('myVideo');

        if (video) {
            // Ensure the video is muted and plays automatically
            video.muted = true;
            video.play().catch(error => {
                console.error('Autoplay was prevented:', error);
            });

            // Add event listener for when the video ends
            video.addEventListener('ended', () => {
                video.currentTime = 0;
                video.play().catch(error => {
                    console.error('Autoplay was prevented:', error);
                });
            });
        }

        // Cleanup function to remove event listener when component unmounts
        return () => {
            if (video) {
                video.removeEventListener('ended', () => {
                    video.currentTime = 0;
                    video.play().catch(error => {
                        console.error('Autoplay was prevented:', error);
                    });
                });
            }
        };
    }, []);

    return (
        <>
            <div className="container">
                <div className="forecast">
                    <div className="tempHead">
                        {/* Ensure the src is a valid video URL */}
                        <video
                            width="100px"
                            id="myVideo"
                            src="./src/assets/sunny.webm" // Replace with a valid video source
                            alt="No Video"
                            loop
                        ></video>
                        <h1 className="temperature"></h1>
                    </div>

                    <div className="weatherDetail">
                        <div className="feelsLike"></div>
                        <div className="description"></div>
                        <div className="humidity"></div>
                        <div className="wind-speed"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Container;
