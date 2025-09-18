import { profile } from '../../data';

export function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name} · Rasike.me
        </p>
        <div className="flex gap-3 text-sm">
          {profile.socials.map((social) => (
            <a 
              key={social.label} 
              href={social.href} 
              className="underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
