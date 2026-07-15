interface HomeHeroProps {
  backgroundImage: string;
}

export default function HomeHero({ backgroundImage }: HomeHeroProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Desktop Background Image */}
      <div className="absolute inset-0 hidden sm:block">
        <img src={backgroundImage} alt="Cafe background" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Mobile Gradient Background */}
      <div className="absolute inset-0 block bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 sm:hidden" />
    </div>
  );
}
