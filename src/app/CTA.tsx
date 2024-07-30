const CTA = () => {
  return (
    <section id="call-to-action" className="bg-slate-900 text-slate-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Learning?
        </h2>
        <p className="text-lg mb-6">Unlock your full potential with Dahih.</p>
        <div className="flex space-x-4 flex-row justify-center flex-wrap">
          <a
            href="https://github.com/ibrahimhabibeg/Dahih-Al-Dofaa/releases/latest/download/dahih-al-dofaa.Setup.exe"
            className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded transition"
          >
            Download for Windows
          </a>
          <a
            href="https://github.com/ibrahimhabibeg/Dahih-Al-Dofaa/releases/latest/download/dahih-al-dofaa_amd64.deb"
            className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded transition"
          >
            Download for Ubuntu
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
