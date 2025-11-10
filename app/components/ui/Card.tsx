import { CardProps } from '../../data/types';
import { cn } from '../../lib/utils';

export function Card({ title, children, className }: CardProps) {
  return (
    <div className={cn("card", className)}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-slate-700 space-y-4">{children}</div>
    </div>
  );
}
