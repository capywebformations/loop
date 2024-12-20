
import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2D0A0A] mt-16 py-12">

      
      <div className="container mx-auto px-4">
      <img className="w-[100px] px-3 pb-4" src="/img/LOGO-BLANC.png" alt="Logo Blanc" />

        <p className="text-center mb-8">
          Loop, l'application de matchs entre musiciens amateurs.
        </p>

    
        
        <div className="flex justify-center gap-6 mb-12">
          <Facebook className="hover:text-[#FF5733] cursor-pointer" />
          <Instagram className="hover:text-[#FF5733] cursor-pointer" />
          <Twitter className="hover:text-[#FF5733] cursor-pointer" />
          <Youtube className="hover:text-[#FF5733] cursor-pointer" />
        </div>

        <div className="max-w-md mx-auto mb-8">
          <h4 className="text-center mb-4">NEWSLETTER</h4>
          <p className="text-center text-sm mb-4">
            Inscrivez-vous à notre newsletter pour découvrir les meilleurs talents
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Votre adresse"
              className="w-full bg-gray-800 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#FF5733]">
              <ArrowRight />
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400">
          © Copyright 2024 Loop. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}