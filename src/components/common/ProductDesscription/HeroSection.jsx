"use client";

import React, { useState } from "react";

const SweeperComponent = ({ sweeperData }) => {
  const [selectedMedia, setSelectedMedia] = useState(
    sweeperData.youtubeVideoId
      ? { type: "video", src: sweeperData.youtubeVideoId }
      : { type: "image", src: sweeperData.images[0] }
  );

  const getDriveFileId = (url) => {
    if (!url) return null;
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const fileId = getDriveFileId(sweeperData.catalogLink);

  const youtubeVideoId = sweeperData.youtubeVideoId;

  return (
    <section className="bg-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="md:pl-10 mb-12">
          <h1 className="text-3xl md:text-4xl">{sweeperData.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Media Gallery */}
          <div className="flex flex-col items-center">
            {/* Main Display Area */}
            <div className="w-full max-w-md h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-md mb-4 bg-gray-50 flex justify-center items-center relative">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt="Selected"
                  className="object-contain h-full w-full"
                />
              ) : (
                <iframe
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedMedia.src}?autoplay=1&rel=0&modestbranding=1&controls=1&disablekb=1`}
                  title="Product Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 flex-wrap justify-center">
              {/* YouTube Thumbnail */}
              {youtubeVideoId && (
                <div
                  onClick={() =>
                    setSelectedMedia({ type: "video", src: youtubeVideoId })
                  }
                  className={`relative h-16 w-20 rounded border-2 cursor-pointer overflow-hidden group transition duration-300 hover:border-gray-500 ${selectedMedia.type === "video"
                    ? "border-gray-600"
                    : "border-gray-300"
                    }`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${youtubeVideoId}/0.jpg`}
                    alt="Video Thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4l12 6-12 6V4z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Image Thumbnails */}
              {sweeperData.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`h-16 w-20 object-cover rounded border-2 cursor-pointer transition duration-300 hover:border-gray-500 ${selectedMedia.type === "image" && selectedMedia.src === img
                    ? "border-gray-600"
                    : "border-gray-300"
                    }`}
                  onClick={() => setSelectedMedia({ type: "image", src: img })}
                />
              ))}
            </div>
          </div>

          {/* Specifications Section */}
          <aside className="space-y-8">
            <div className="text-2xl text-gray-700">Specification</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sweeperData.specifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition duration-300"
                >
                  <table className="w-full text-sm lg:text-base">
                    <tbody>
                      {spec.map((item, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-gray-200 last:border-none"
                        >
                          <th className="text-left py-2 pr-4 text-gray-800 font-medium w-1/2">
                            {item.label}
                          </th>
                          <td className="text-right py-2 pl-4 text-gray-900 font-semibold w-1/2">
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-8 items-center">
              {/* Enquire Now */}
              <a
                href={sweeperData.contactLink}
                target="_blank"
                className="inline-block py-3 px-8 text-gray-900 bg-transparent border-2 border-gray-900 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:bg-gray-900 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                <span className="uppercase tracking-wider">Enquire Now</span>
              </a>

              {/* Download Catalogue */}
              <a
                href={sweeperData.catalogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-3 px-8 text-gray-900 bg-transparent border-2 border-gray-900 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:bg-gray-900 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                <span className="uppercase tracking-wider">
                  Download Catalogue
                </span>
              </a>
            </div>
          </aside>
        </div>

        {/* Product Description */}
        <div className="mt-16 px-4 mb-10">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-base md:text-lg text-gray-700 leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: sweeperData.description }}
            />
            <h2 className="text-2xl md:text-3xl text-gray-900 mt-12 mb-4 text-center md:text-left">
              Key Features of the {sweeperData.title}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 text-justify">
              {sweeperData.keyFeatures.map((feature, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl text-gray-900 mt-12 mb-4 text-center md:text-left">
              {sweeperData.choose_title}
            </h2>

            <p
              className="text-base md:text-lg text-gray-700 leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: sweeperData.why_choose_us }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SweeperComponent;
