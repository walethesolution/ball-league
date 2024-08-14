import React from "react";

const VideoOfTheWeek = () => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Uploaded Video of the Week
      </h2>
      <div className="w-full md:w-3/4">
        <div
          className="relative"
          style={{ paddingBottom: "56.25%", height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/0vEDP8vzO-U"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoOfTheWeek;
