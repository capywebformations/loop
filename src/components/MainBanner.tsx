
export function MainBanner() {
  return (
    <section className="relative py-10 bg-gradient-to-b from-transparent to-black">
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="container mx-auto relative z-10 text-center">
        <div className="banner">
          <h2 className="text-5xl font-bold mb-8">
            L'APP QUI<br />FAIT VIVRE<br />LA MUSIQUE
          </h2>
        </div>

        <p className="text-2xl font-bold pt-10 text-[#FF5733]">
          LOOP.
        </p>

        <p className="text-xl mb-12 pt-10">
          Rencontrez, collaborez et créez avec<br />
          des musiciens du monde entier.<br />
          Rejoignez-nous dès maintenant
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
               alt="Download on App Store" 
               className="h-12" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
               alt="Get it on Google Play" 
               className="h-12" />
        </div>
      </div>
    </section>
  );
}