import { SectionProps } from '../../data/types';

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-12 sm:py-16 md:py-20">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
