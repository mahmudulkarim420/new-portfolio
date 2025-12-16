import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection({ refProp }) {
  return (
    <section ref={refProp} className="grid md:grid-cols-3 gap-4">
      {[ 
        { icon: MapPin, text: "Dhaka, Bangladesh" },
        { icon: Phone, text: "+880 01805111544" },
        { icon: Mail, text: "mahmudulkarim545@gmail.com" },
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="bg-[#1C1F3A] p-10 rounded-2xl text-center">
            <Icon className="mx-auto mb-2" />
            <p>{item.text}</p>
          </div>
        );
      })}
    </section>
  );
}
