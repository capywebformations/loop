import React from 'react';

export function Header() {
  return (
    <header className="container bg-white mx-auto rounded-[12px] px-4 py-6 flex justify-between my-auto items-center">
      <img className='w-[100px]' src="/img/v1-LOOP.png"></img>
      <button className="bg-[#FF5733] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition">
        Devenir bêta-testeur
      </button>
    </header>
  );
}