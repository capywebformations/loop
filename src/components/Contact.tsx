
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section className="container mx-auto px-4 py-8">
  <div className="flex flex-col items-center gap-4 bg-white rounded-lg px-6 py-6 shadow-lg">
        <a href="mailto:LOOP@GMAIL.COM" className="flex items-center gap-2 text-black font-bold">
          <Mail className="text-[#FF5733]" />
          LOOP@GMAIL.COM
        </a>
        <a href="tel:0156392940" className="flex items-center gap-2 text-black font-bold">
          <Phone className="text-[#FF5733]" />
          01 56 39 29 40
        </a>
      </div>
    </section>
  );
}