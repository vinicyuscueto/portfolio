import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-black border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-cyan-400">
            #vinicyus.cueto
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="bx bx-menu" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 pb-4 pt-2 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors text-center"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
