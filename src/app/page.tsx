export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-24">
        {/* Hero */}
        <section>
          <h1 className="text-5xl font-semibold tracking-tight">
            Cloud Goes Frazier
          </h1>

          <p className="mt-6 text-lg text-zinc-300">
            Practical cloud, automation, and AI — built by a practitioner.
          </p>

          <p className="mt-4 text-base text-zinc-400">
            I build and explore real-world systems across Kubernetes,
            infrastructure automation, GPU platforms, and AI tooling.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/cloudgoesfrazier"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zacharyafrazier/"
              className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-16 border-zinc-800" />

        {/* Focus Areas */}
        <section>
          <h2 className="text-2xl font-semibold">Focus Areas</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-zinc-800 p-5">
              <h3 className="font-medium">Cloud & Infrastructure</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Kubernetes, platform engineering, automation, and operating
                systems at scale.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 p-5">
              <h3 className="font-medium">AI & Tooling</h3>
              <p className="mt-2 text-sm text-zinc-400">
                AI-powered tools, LLM workflows, and practical experimentation
                with modern inference platforms.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 p-5">
              <h3 className="font-medium">Learning & Execution</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Turning theory into production systems through hands-on labs,
                mentorship, and real-world projects.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-16 border-zinc-800" />

        {/* About */}
        <section>
          <h2 className="text-2xl font-semibold">About</h2>

          <p className="mt-6 text-zinc-300">
            I’m a Cloud Engineer and Technical Solutions Manager working on
            customer-facing infrastructure, Kubernetes platforms, and
            large-scale GPU systems.
          </p>

          <p className="mt-4 text-zinc-400">
            My background includes computer science and hands-on experience
            building systems that need to work in production.
            Cloud Goes Frazier is where I build and explore projects that extend that work.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-24 text-sm text-zinc-500">
          © {new Date().getFullYear()} Cloud Goes Frazier
        </footer>
      </div>
    </main>
  );
}
