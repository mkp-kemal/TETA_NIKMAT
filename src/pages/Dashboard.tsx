// src/components/Dashboard.tsx

import React from 'react';
import img_1 from '../assets/1.jpg';
import img_2 from '../assets/2.jpg';
import img_3 from '../assets/3.jpg';
import img_4 from '../assets/4.jpg';
import img_5 from '../assets/5.jpg';
import food_grade from '../assets/food_grade.png';
import halal from '../assets/halal.png';


const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-16 min-h-screen bg-gray-100">
      {/* Image Section */}
      <div className="flex flex-col items-center w w-full">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {/* Buffet Image */}
          <div className="flex flex-col md:flex-row md:space-x-4 justify-center mt-4 w-full md:items-center">
            <div className="md:w-1/2 p-2 md:p-0">
              <img
                src={img_4}
                alt="Buffet setup"
                className="w-full h-64 object-cover rounded-lg shadow-lg md:m-auto"
              />
            </div>

            {/* Boxed Meals Image */}
            <div className="md:w-1/2 p-2 md:p-0">
              <img
                src={img_3}
                alt="Boxed meals preparation"
                className="w-full h-64 object-cover rounded-lg shadow-lg md:m-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slogan Section */}
      <div className="w-full bg-gradient-to-r from-green-600 to-yellow-400 mt-4 p-6 text-center rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white italic">Dapur Sehat Nusantara</h1>
      </div>

      {/* Featured Menu Section */}
      <div className="w-full mt-8">
        {/* <h2 className="text-3xl font-semibold text-purple-900 text-center mb-6">Our Featured Dishes</h2> */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md">
            <img
              src={img_5}
              alt="Dish 1"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-purple-800">Liwet</h3>
            <p className="text-gray-600 mt-2">Makanan khas Sunda yang terbuat dari beras, santan, dan berbagai bumbu. Liwet biasanya dihidangkan dengan lauk-pauk seperti ayam, ikan, atau daging.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md">
            <img
              src={img_1}
              alt="Dish 2"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-purple-800">Salad</h3>
            <p className="text-gray-600 mt-2">Salad yang terbuat dari sayuran segar, buah, dan berbagai bumbu. Salad ini sangat cocok untuk menu diet seimbang.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md">
            <img
              src={img_2}
              alt="Dish 3"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-purple-800">Tradisional Food</h3>
            <p className="text-gray-600 mt-2">Makanan tradisional yang terbuat dari bahan-bahan alami dan cara memasak yang khas. Tradisional Food ini sangat cocok untuk menu makanan yang seimbang dan bergizi.</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start w-full bg-purple-50 rounded-lg shadow-lg p-6 md:p-8 mt-10">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2 mb-4 mr-10 md:mb-0">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Profil <span className="italic">Teta Nikmat</span></h2>
          <p className="text-gray-700 mb-4 text-justify">
            Didirikan pada tahun 2010 oleh <b>Hj. Rosita, SP</b>, Teta Catering tumbuh sebagai perusahaan katering terpercaya yang melayani berbagai kebutuhan acara seperti training, hajatan, perkantoran, dan industri. Dengan komitmen menyediakan makanan sehat, bergizi, bersih, dan alami, kami memastikan setiap hidangan disajikan dengan menarik dan tepat waktu, siap dinikmati sebelum waktu makan dimulai.</p>
          <p className="text-gray-700 mb-4 text-justify">
            Kini, Teta Catering dikelola di bawah manajemen <b>Elsyam Muhammad dan Miharja</b>, yang melanjutkan tradisi perusahaan dalam memberikan layanan yang cepat, akurat, dan handal. Kami menggunakan bahan-bahan pilihan seperti sayur segar dari petani lokal, menjamin kebersihan dan keamanan dengan pengiriman menggunakan mobil khusus, serta menyediakan produk olahan yang berkualifikasi halal dan bebas pengawet.</p>
        </div>

        {/* Right Column - Profile and Certifications */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start bg-white rounded-lg p-4 md:p-7 shadow-md">
          <div className="flex justify-center w-full">
            <img
              src={food_grade}
              alt="Profile"
              className="w-28 h-20 rounded-md mx-2 mb-4 sm:w-36 sm:h-32"
            />
            <img
              src={halal}
              alt="Profile"
              className="w-28 h-20 rounded-md mx-2 mb-4 sm:w-40 sm:h-32"
            />
          </div>
          {/* <h3 className="text-lg font-bold text-purple-900">Maria Agustina</h3>
          <p className="text-gray-700 mb-4">Owner D'Yummy Bandung Catering</p> */}

          {/* Certifications */}
          <div className="bg-purple-100 mt-5 rounded-lg p-4 w-full text-center text-purple-700">
            <p className="font-semibold">Halal & Food Grade:</p>
            <p>Makanan kami dijamin halal dan berkualitas food grade</p>
            <p>Dengan proses produksi yang higienis dan bahan-bahan terjamin</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Button
      <a
        href="https://wa.me/yourphonenumber" // Replace with actual WhatsApp number
        className="fixed bottom-4 right-4 bg-green-500 text-white flex items-center px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="mr-2">Info & Pemesanan? Chat WA Kami</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A10.422 10.422 0 0012 1.998C6.202 1.998 1.524 6.676 1.524 12.474c0 1.793.47 3.516 1.36 5.044L1 22.998l5.667-1.476a10.412 10.412 0 005.333 1.432c5.798 0 10.476-4.678 10.476-10.476 0-2.8-1.08-5.425-3.015-7.464zm-8.48 18c-1.555 0-3.088-.39-4.463-1.15l-.317-.17-3.335.872.89-3.286-.17-.318a8.417 8.417 0 01-1.134-4.468c0-4.637 3.763-8.4 8.4-8.4 4.636 0 8.4 3.763 8.4 8.4 0 4.637-3.764 8.4-8.4 8.4zM15.732 14.2c-.278-.14-1.643-.812-1.896-.905-.254-.094-.437-.14-.62.14s-.713.905-.874 1.088c-.16.182-.32.202-.596.07-.278-.14-1.17-.433-2.233-1.38-.826-.735-1.384-1.64-1.545-1.918-.16-.278-.017-.43.12-.57.124-.124.278-.322.416-.482.14-.16.186-.278.278-.46.094-.183.047-.34-.024-.482-.07-.14-.62-1.488-.85-2.047-.224-.54-.447-.466-.62-.466h-.53c-.14 0-.364.047-.553.278-.182.23-.716.697-.716 1.696 0 .999.734 1.965.836 2.102.101.14 1.445 2.214 3.504 3.107.49.21.872.336 1.17.434.492.156.94.134 1.293.082.395-.06 1.264-.516 1.44-1.015.182-.498.182-.925.128-1.015-.052-.09-.202-.14-.481-.278z" />
        </svg>
      </a> */}
    </div>
  );
};

export default Dashboard;
