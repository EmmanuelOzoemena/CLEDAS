"use client"
import Image from "next/image";
import React, { useState } from "react";

function ImageUploadComponent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setUploadSuccess(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleClose = () => {
    setSelectedImage(null);
    setUploadSuccess(false);
  };

  return (
    <div className="image-upload-container">
      {uploadSuccess && (
        <div className="upload-success">
          <div className="success-message">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="64"
                height="64"
                rx="10.6667"
                fill="#00B368"
                fill-opacity="0.1"
              />
              <path
                d="M32 47C33.9698 47 35.9204 46.612 37.7403 45.8582C39.5601 45.1044 41.2137 43.9995 42.6066 42.6066C43.9995 41.2137 45.1044 39.5601 45.8582 37.7403C46.612 35.9204 47 33.9698 47 32C47 30.0302 46.612 28.0796 45.8582 26.2597C45.1044 24.4399 43.9995 22.7863 42.6066 21.3934C41.2137 20.0005 39.5601 18.8956 37.7403 18.1418C35.9204 17.388 33.9698 17 32 17C28.0218 17 24.2064 18.5804 21.3934 21.3934C18.5804 24.2064 17 28.0218 17 32C17 35.9782 18.5804 39.7936 21.3934 42.6066C24.2064 45.4196 28.0218 47 32 47Z"
                stroke="#00B368"
                stroke-width="3.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27 31.9998L30.3333 35.3332L37 28.6665"
                stroke="#00B368"
                stroke-width="3.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Upload Successful</p>
          </div>
          <button className="close-button" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.9">
                <path
                  d="M18 6L6 18"
                  stroke="#495057"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#495057"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      )}

      {selectedImage && (
        <div className="image-preview">
          <Image 
          src={selectedImage}
          objectFit="cover"
          layout="fill"
          />
        </div>
      )}

      {/* <div className="action-buttons">
        <button className="action-button">Use Camera</button>
        <button className="action-button" onClick={handleUploadClick}>
          Upload Image
        </button>
      </div> */}

      <div className="actions">
        <div className="action">
          <div className="icon">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="#E5FFE7" />
              <path
                d="M35.5002 23.5C34.8902 23.5 34.3302 23.15 34.0502 22.61L33.3302 21.16C32.8702 20.25 31.6702 19.5 30.6502 19.5H28.3602C27.3302 19.5 26.1302 20.25 25.6702 21.16L24.9502 22.61C24.6702 23.15 24.1102 23.5 23.5002 23.5C21.3302 23.5 19.6102 25.33 19.7502 27.49L20.2702 35.75C20.3902 37.81 21.5002 39.5 24.2602 39.5H34.7402C37.5002 39.5 38.6002 37.81 38.7302 35.75L39.2502 27.49C39.3902 25.33 37.6702 23.5 35.5002 23.5ZM28.0002 24.75H31.0002C31.4102 24.75 31.7502 25.09 31.7502 25.5C31.7502 25.91 31.4102 26.25 31.0002 26.25H28.0002C27.5902 26.25 27.2502 25.91 27.2502 25.5C27.2502 25.09 27.5902 24.75 28.0002 24.75ZM29.5002 35.62C27.6402 35.62 26.1202 34.11 26.1202 32.24C26.1202 30.37 27.6302 28.86 29.5002 28.86C31.3702 28.86 32.8802 30.37 32.8802 32.24C32.8802 34.11 31.3602 35.62 29.5002 35.62Z"
                fill="#009B07"
              />
            </svg>
          </div>
          <p>Use Camera</p>
        </div>

        <div className="action">
          <div className="icon" onClick={handleUploadClick}>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="#E5FFE7" />
              <path
                d="M31.3002 28.4499C31.1102 28.4499 30.9202 28.3799 30.7702 28.2299C30.4802 27.9399 30.4802 27.4599 30.7702 27.1699L38.9702 18.9699C39.2602 18.6799 39.7402 18.6799 40.0302 18.9699C40.3202 19.2599 40.3202 19.7399 40.0302 20.0299L31.8302 28.2299C31.6902 28.3699 31.5002 28.4499 31.3002 28.4499Z"
                fill="#009B07"
              />
              <path
                d="M35.33 29.2499H30.5C30.09 29.2499 29.75 28.9099 29.75 28.4999V23.6699C29.75 23.2599 30.09 22.9199 30.5 22.9199C30.91 22.9199 31.25 23.2599 31.25 23.6699V27.7499H35.33C35.74 27.7499 36.08 28.0899 36.08 28.4999C36.08 28.9099 35.74 29.2499 35.33 29.2499Z"
                fill="#009B07"
              />
              <path
                d="M32.5 40.25H26.5C21.07 40.25 18.75 37.93 18.75 32.5V26.5C18.75 21.07 21.07 18.75 26.5 18.75H28.5C28.91 18.75 29.25 19.09 29.25 19.5C29.25 19.91 28.91 20.25 28.5 20.25H26.5C21.89 20.25 20.25 21.89 20.25 26.5V32.5C20.25 37.11 21.89 38.75 26.5 38.75H32.5C37.11 38.75 38.75 37.11 38.75 32.5V30.5C38.75 30.09 39.09 29.75 39.5 29.75C39.91 29.75 40.25 30.09 40.25 30.5V32.5C40.25 37.93 37.93 40.25 32.5 40.25Z"
                fill="#009B07"
              />
            </svg>
          </div>
          <p>Upload Image</p>
        </div>
      </div>

      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default ImageUploadComponent;
