const Releases = () => {
  return (
    <section className="bg-slate-900 py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-8">Releases</h2>
        <p className="my-4">
          Check out the latest updates and download previous versions of Dahih
          Al-Dofaa.
        </p>
        <a
          href="https://github.com/ibrahimhabibeg/Dahih-Al-Dofaa/releases"
          className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded my-8 transition"
        >
          View Releases
        </a>
      </div>
    </section>
  );
};

export default Releases;
