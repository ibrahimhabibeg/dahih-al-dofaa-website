import React from "react";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-900 text-slate-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="flex flex-row justify-around flex-wrap">
          <div className="flex flex-col items-center my-8 max-w-96">
            <Image
              src="/kindle.svg"
              alt="Feature 1 icon"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-medium">Offline Access</h3>
            <p className="text-slate-400 text-center">
              Study anytime, anywhere without an internet connection.
            </p>
          </div>
          <div className="flex flex-col items-center my-8 max-w-96">
            <Image
              src="/privacy.svg"
              alt="Feature 2 icon"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-medium">Privacy Focused</h3>
            <p className="text-slate-400 text-center">
              Your data stays on your device, ensuring complete privacy and
              security.
            </p>
          </div>
          <div className="flex flex-col items-center my-8 max-w-96">
            <Image
              src="/diploma.svg"
              alt="Feature 3 icon"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-medium">
              Intelligent Question Answering
            </h3>
            <p className="text-slate-400 text-center">
              Get accurate and informative answers to your study questions.
            </p>
          </div>
          <div className="flex flex-col items-center my-8 max-w-96">
            <Image
              src="/book.svg"
              alt="Feature 3 icon"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-medium">Document Uploading</h3>
            <p className="text-slate-400 text-center">
              Easily import textbooks, notes, slides, and research papers.
            </p>
          </div>
          <div className="flex flex-col items-center my-8 max-w-96">
            <Image
              src="/cap.svg"
              alt="Feature 3 icon"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-medium">Personalized Learning</h3>
            <p className="text-slate-400 text-center">
              Tailor your study experience to your specific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
