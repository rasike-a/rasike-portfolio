import { profile } from '../../data';

const navigationLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'How Can I Help You' },
  { href: '#contact', label: 'Contact' },
];

const mobileNavigationLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  return (
    <nav className="container flex items-center justify-between py-3">
      <a href="#home" className="font-bold text-base sm:text-lg">
        {profile.name}
      </a>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-sm">
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </a>
        ))}
      </div>
      
      {/* Mobile Navigation */}
      <div className="flex md:hidden gap-4 text-xs">
        {mobileNavigationLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </a>
        ))}
      </div>
      
      {/* Resume Button */}
      <a
        href={profile.resumeUrl}
        className="rounded-xl border px-3 py-2 text-xs inline-flex items-center justify-center hover:bg-slate-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        Résumé
      </a>
    </nav>
  );
}
