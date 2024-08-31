import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react';
import { JetBrains_Mono } from 'next/font/google';

const gabarito = JetBrains_Mono({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
});

const NavBar = () => {
  return (
    <header
      className={`mt-2 py-4 text-cultured flex justify-around items-center border border-raisin-black rounded bg-erie-black ${gabarito.className}`}
    >
      <p className="text-xl font-semibold underline decoration-solid decoration-2 underline-offset-4 decoration-imperial-red cursor-pointer">
        arvinpaundra.
      </p>
      <ul className="flex justify-between items-center gap-12">
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
      <Button className="bg-imperial-red hover:bg-imperial-red/80 hover:transition">
        rezume-dl
      </Button>
    </header>
  );
};

export default NavBar;
