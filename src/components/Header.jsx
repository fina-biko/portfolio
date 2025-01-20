const Header = () => {
  return (
      <div
           className="flex flex-col space-y-2 space-x-2  w-full items-start justify-start md:flex-row md:space-x-4 md:space-y-0 md:items-end md:justify-end lg:space-x-6">
          <div className="mb-1 md:mb-0.5">
              <a
                  href="/src/components/About.jsx"
                  className="text-white hover:underline"
              >
                  About
              </a>
          </div>
          <div className="mb-1 md:mb-4">
              <a
                  href="/src/components/Projects.jsx"
                  className="text-white hover:underline"
              >
                  Projects
              </a>
          </div>
          <div className="mb-1 md:mb-4">
              <a
                  href="/src/components/Resume.jsx"
                  className="text-white hover:underline"
              >
                  Resume
              </a>
          </div>
          <div className="mb-1 md:mb-4">
              <a
                  href="/src/components/Contact.jsx"
                  className="text-white hover:underline"
              >
                  Contact
              </a>
          </div>
      </div>

  );
};

export default Header