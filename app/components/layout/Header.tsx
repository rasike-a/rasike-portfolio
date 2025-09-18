import { profile } from '../../data';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <Navigation />
    </header>
  );
}
