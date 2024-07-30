import Image from "next/image";
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-slate-900 text-slate-100">
      <div className="container mx-auto w-4/5">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center max-w-96">
            <Image
              src="/dahih-al-dofaa-website/notebook.svg"
              alt="Step 1 icon"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-medium">Upload Documents</h3>
            <p className="text-slate-400 text-center">
              Import your textbooks, notes, and research papers.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-96">
            <Image
              src="/dahih-al-dofaa-website/studying.svg"
              alt="Step 2 icon"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-medium">Ask Questions</h3>
            <p className="text-slate-400 text-center">
              Query your documents with any question.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-96">
            <Image
              src="/dahih-al-dofaa-website/answer.svg"
              alt="Step 3 icon"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-medium">Get Answers</h3>
            <p className="text-slate-400 text-center">
              Receive accurate and informative answers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
