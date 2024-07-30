const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Dahih Al-Dofaa. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/ibrahimhabibeg/Dahih-Al-Dofaa"
            className="text-orange-400 hover:text-orange-300 mr-2"
          >
            GitHub Repository
          </a>
          <span className="text-slate-400">|</span>
          <a
            href="https://www.linkedin.com/in/ibrahimhabibeg/"
            className="text-orange-400 hover:text-orange-300 ml-2"
          >
            Connect on LinkedIn
          </a>
        </div>
        <p className="mt-4">Made with ❤️ by Ibrahim Habib</p>
      </div>
    </footer>
  );
};

export default Footer;
