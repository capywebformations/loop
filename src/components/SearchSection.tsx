import { Search } from 'lucide-react';

export function SearchSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">
        Groupes & musiciens créés pour<br />
        <span className="text-[#FF5733]">se rencontrer</span>
      </h1>
      <p className="text-gray-400 mb-8">Votre groupe ne va pas se monter tout seul.</p>
      
      <div className="space-y-4 max-w-md">
        <div className="relative">
          <Search className="absolute left-4 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Je cherche un.e"
            className="w-full bg-gray-800 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
          />
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Paris, Bordeaux, lille..."
            className="w-full bg-gray-800 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
          />
        </div>
      </div>
    </section>
  );
}