import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react';

const NavBar = () => {
  return (
    <header className="mt-2 py-4 px-4 text-cultured flex md:justify-around justify-between items-center border border-raisin-black rounded bg-erie-black">
      <p className="sm:text-xl font-semibold underline decoration-solid decoration-2 underline-offset-4 decoration-imperial-red cursor-pointer">
        arvinpaundra.
      </p>
      <ul className="md:flex md:justify-between md:items-center md:gap-12 hidden">
        <li>
          <Link className="relative group font-light" href="#self">
            <span>self</span>
            <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-imperial-red group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-imperial-red group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
        </li>
        <li>
          <Link className="relative group font-light" href="#experience">
            <span>experiences</span>
            <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-imperial-red group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-imperial-red group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
        </li>
        <li>
          <Link className="relative group font-light" href="#contact">
            <span>contact</span>
            <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-imperial-red group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-imperial-red group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
        </li>
      </ul>
      <Link
        href="https://drive.google.com/file/d/1LaTzHOd3CIMeCT00EqbIRu3Yuoydi13A/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="md:block hidden"
      >
        <Button className="bg-imperial-red hover:bg-imperial-red/80 hover:transition">
          rezume-dl
        </Button>
      </Link>

      <Button className="md:hidden">Icon</Button>
    </header>
  );
};

export default NavBar;
