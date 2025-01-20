import React from "react";

const Footer = () => {
  return (
    <div className="text-center bg-gray-950 p-6">
      {/* Social/Contact Information */}
      <div className="flex flex-col md:flex-row md:space-x-4">
        <p className="text-lg mb-2 md:mb-0">Contact Me:</p>

        <a
          href="mailto:finarheiner@gmail.com"
          className="hover:underline p-4"
        >
          Email: finarheiner@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/rufina-atieno"
          className="hover:underline p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn: Rufina Atieno
        </a>

        <a
          href="https://github.com/fina-biko"
          className="hover:underline p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github: Rufina Atieno
        </a>
      </div>

      {/* Copyright Information */}
      <p className="mt-4 text-sm">&copy; 2025 Rufina Atieno. All rights reserved.</p>
    </div>
  );
};

export default Footer;
