"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Publication } from "@/data/publication";
import { useState, useRef, useEffect } from 'react';

interface BibtexDropdownProps {
  bibtex: string;
}

const BibtexDropdown: React.FC<BibtexDropdownProps> = ({ bibtex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(bibtex);
    setIsCopied(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
      >
        <ArrowUpRight
          size={12}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
        />
        <span className="tracking-wider uppercase">BibTeX</span>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold">BibTeX Entry</h3>
              <button
                onClick={handleCopy}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                {isCopied ? 'Copied!' : 'Copy to clipboard'}
              </button>
            </div>
            <pre className="text-xs bg-gray-50 p-3 rounded overflow-x-auto">
              {`${bibtex}\n`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export function PublicationEntry({
  publication,
}: {
  publication: Publication;
}) {
  const renderAuthors = (authors: string) => {
    return authors.split('|||').map((part, index) => {
      const isBold = index % 2 === 1; // Every odd index is the part we want to bold
      return isBold ? <b key={index}>{part}</b> : <span key={index}>{part}</span>;
    });
  };

  return (
      <div className={`flex flex-col sm:flex-row gap-6 ${
        publication.highlighted ? 'bg-amber-100/70 border border-amber-200 rounded-xl' : ''
      }`}>
        <div className="flex flex-col sm:flex-row gap-6">
          {publication.imageUrl && (
            <div className="w-full sm:w-1/3 min-w-[160px] relative flex items-center">
              <Image
                src={publication.imageUrl}
                alt={publication.title}
                width={300}
                height={375}
                className="rounded-lg transition-all duration-300"
              />
            </div>
          )}
          <div className="flex flex-col flex-1 justify-center">
          <div className="flex flex-row gap-4 items-center mb-2 ">
            <p className="text-xs text-zinc-500">
              {publication.conference} {publication.year}
            </p>
            {publication.award && (
              <div className="group flex px-2 py-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-md items-center shadow-md border border-amber-100/50 relative overflow-hidden hover:rotate-1 transition-all duration-300">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
                <p className="text-xs text-amber-700 font-medium relative">
                  {publication.award}
                </p>
              </div>
            )}
          </div>
          <h3 className="font-serif text-xs mb-2">{publication.title}</h3>
          <p className="text-xs text-zinc-600 mb-2">{renderAuthors(publication.authors)}</p>
          <div className="flex flex-row gap-6">
            {publication.projectUrl && (
              <a
                href={publication.projectUrl}
                className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              >
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">Project</span>
              </a>
            )}
            {publication.paperUrl && (
              <a
                href={publication.paperUrl}
                className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              >
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">Paper</span>
              </a>
            )}
            {publication.codeUrl && (
              <a
                href={publication.codeUrl}
                className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              >
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">Code</span>
              </a>
            )}
            {publication.bibtex && <BibtexDropdown bibtex={publication.bibtex} />}
          </div>
          {publication.tldr && (
            <p className="text-sm italic text-zinc-600 mt-4">
              {publication.tldr}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
