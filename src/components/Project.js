import Image from "next/image";
import Link from "next/link";

export default function Project({header, paragraph, year, src, git="true", view, title}) {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start p-6 lg:p-12 bg-[#0D0D0D] text-white">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src={src}
          alt="Project Screenshot"
          width={800}
          height={600}
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Description Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          {header}
        </h1>
        <p className="text-gray-300">
          {paragraph}
        </p>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold border-b border-gray-600 pb-1">
            Project Info
          </h2>
          <div className="flex justify-between border-b border-gray-600 py-2">
            <span className="text-gray-400">Year</span>
            <span>{year}</span>
          </div>
          <div className="flex justify-between border-b border-gray-600 py-2">
            <span className="text-gray-400">Role</span>
            <span>Front-end Developer</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex gap-6 mt-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#D3E97A] border-b border-[#D3E97A] uppercase hover:underline"
          >
            {view}
            <Image src="/arrow-2.svg" alt="arrow" width={16} height={16} />
          </Link>

          {git && <Link
            href="/"
            className="flex items-center gap-2 text-[#D3E97A] border-b border-[#D3E97A] uppercase hover:underline"
          >
            See on GitHub
            <Image
              src="/github.svg"
              alt="GitHub logo"
              width={30}
              height={30}
            />
          </Link>}
        </div>
      </div>
    </div>
  );
}
