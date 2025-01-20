const Header = () => {
  return (
      <div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full items-start md:items-end justify-start md:justify-end overflow-x-auto">
          <div className="mb-4 md:mb-0">
              <a
                  href="/src/components/About.jsx"
                  className="text-white hover:underline"
              >
                  About
              </a>
          </div>
          <div className="mb-4 md:mb-0">
              <a
                  href="/src/components/Projects.jsx"
                  className="text-white hover:underline"
              >
                  Projects
              </a>
          </div>
          <div className="mb-4 md:mb-0">
              <a
                  href="/src/components/Resume.jsx"
                  className="text-white hover:underline"
              >
                  Resume
              </a>
          </div>
          <div className="mb-4 md:mb-0">
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