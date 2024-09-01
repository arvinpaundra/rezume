'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const AnimatedNavbar: React.FC<{
  handleShowMobileNavItems: () => void;
  isShowMobileNavItems: boolean;
}> = ({ handleShowMobileNavItems, isShowMobileNavItems }) => {
  return (
    <Button
      onClick={handleShowMobileNavItems}
      className="md:hidden flex flex-col justify-center items-center p-0 w-fit h-fit"
    >
      <span
        className={`bg-cultured block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${
          isShowMobileNavItems ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
        }`}
      ></span>
      <span
        className={`bg-cultured block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${
          isShowMobileNavItems ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      <span
        className={`bg-cultured block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${
          isShowMobileNavItems ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
        }`}
      ></span>
    </Button>
  );
};

const MobileNavItems: React.FC<{ isExpand: boolean }> = ({ isExpand }) => {
  return (
    <nav
      className={`transition-all transform duration-500 ease-in-out overflow-hidden ${
        isExpand ? 'h-fit mt-4 opacity-100 scale-100' : 'h-0 opacity-0 scale-95'
      }`}
    >
      <ul className="flex flex-col items-center gap-4 p-4 bg-erie-black rounded border border-raisin-black">
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
        <li>
          <Link
            href="https://drive.google.com/file/d/1LaTzHOd3CIMeCT00EqbIRu3Yuoydi13A/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-imperial-red hover:bg-imperial-red/80 hover:transition">
              rezume-dl
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const NavBar = () => {
  const [isItemExpand, setIsItemExpand] = useState<boolean>(false);

  const handleShowMobileNavItems = () => {
    setIsItemExpand((prevState) => !prevState);
  };

  return (
    <>
      <header className="mt-4 py-4 px-4 text-cultured flex md:justify-around justify-between items-center border border-raisin-black rounded bg-erie-black">
        <p className="sm:text-xl font-semibold underline decoration-solid decoration-2 underline-offset-4 decoration-imperial-red cursor-pointer">
          arvinpaundra.
        </p>
        <ul className="md:flex md:items-center md:gap-4 hidden">
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

        <AnimatedNavbar
          isShowMobileNavItems={isItemExpand}
          handleShowMobileNavItems={handleShowMobileNavItems}
        />
      </header>

      <MobileNavItems isExpand={isItemExpand} />
    </>
  );
};

export default NavBar;
