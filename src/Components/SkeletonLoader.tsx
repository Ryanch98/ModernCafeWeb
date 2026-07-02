type SkeletonLoaderProps = {
  isHome: boolean;
};

export default function SkeletonLoader({ isHome }: SkeletonLoaderProps) {
  return (
    <div className="min-h-screen w-full animate-pulse bg-slate-950 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        {!isHome && <div className="mb-8 h-28 rounded-[32px] bg-slate-800/70" />}

        {isHome ? (
          <div className="space-y-6">
            <div className="h-14 w-3/4 rounded-full bg-slate-800/70" />
            <div className="h-[520px] rounded-[32px] bg-slate-800/70 sm:h-[420px]" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-36 rounded-[32px] bg-slate-800/70" />
              <div className="h-36 rounded-[32px] bg-slate-800/70" />
              <div className="h-36 rounded-[32px] bg-slate-800/70" />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="h-64 rounded-[32px] bg-slate-800/70" />
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-6">
                <div className="h-72 rounded-[32px] bg-slate-800/70" />
                <div className="h-72 rounded-[32px] bg-slate-800/70" />
              </div>
              <div className="space-y-6">
                <div className="h-56 rounded-[32px] bg-slate-800/70" />
                <div className="h-14 rounded-full bg-slate-800/70" />
                <div className="h-14 rounded-full bg-slate-800/70" />
                <div className="h-14 rounded-full bg-slate-800/70" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
