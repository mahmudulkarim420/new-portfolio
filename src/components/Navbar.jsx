import { motion } from "framer-motion";
import { navItems } from "../components/Shared/data";

export default function Navbar({ activeTab, onNavClick }) {
  return (
    <nav className="sticky top-4 z-50 flex justify-center mb-10 px-4 py-4">
      <div className="bg-[#1C1F3A]/90 backdrop-blur-md rounded-full px-2 py-2 flex gap-1">
        {navItems.map((item) => (
          <motion.button
            key={item}
            onClick={() => onNavClick(item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === item
                ? "bg-[#FF6F61] text-[#0B0D17]"
                : "text-[#FF6F61]/70 hover:text-[#FF6F61]"
            }`}
          >
            {item}
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
