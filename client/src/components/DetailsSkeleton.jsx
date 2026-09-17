function DetailsSkeleton() {
  return (
    <main className="min-h-screen animate-pulse">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#121a2b]" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="aspect-[2/3] w-full max-w-[280px] rounded-2xl bg-[#1b263b]" />

            <div className="flex flex-col justify-center">
              <div className="h-4 w-32 rounded bg-[#1b263b]" />

              <div className="mt-4 h-12 w-3/4 rounded bg-[#1b263b]" />

              <div className="mt-3 h-5 w-1/2 rounded bg-[#1b263b]" />

              <div className="mt-6 space-y-3">
                <div className="h-4 w-full rounded bg-[#1b263b]" />
                <div className="h-4 w-5/6 rounded bg-[#1b263b]" />
                <div className="h-4 w-2/3 rounded bg-[#1b263b]" />
              </div>

              <div className="mt-8 flex gap-3">
                <div className="h-11 w-32 rounded-lg bg-[#1b263b]" />
                <div className="h-11 w-32 rounded-lg bg-[#1b263b]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="h-7 w-48 rounded bg-[#1b263b]" />

        <div className="mt-5 aspect-video w-full rounded-2xl bg-[#1b263b]" />
      </section>
    </main>
  );
}

export default DetailsSkeleton;