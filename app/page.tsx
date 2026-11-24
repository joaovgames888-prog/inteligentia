
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="flex items-center justify-between bg-white px-8 py-5 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-700">
          INTELIGENTIA
        </h1>
        <span className="text-sm text-slate-500">
          Sua inteligência artificial
        </span>
      </header>

      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-28 text-center">
        <div className="mb-6 rounded-2xl bg-blue-600 px-5 py-3 text-2xl font-bold text-white">
          I
        </div>

        <h2 className="text-4xl font-bold md:text-5xl">
          Olá! Eu sou a INTELIGENTIA.
        </h2>

        <p className="mt-5 text-lg text-slate-600">
          Sua assistente inteligente para aprender, criar,
          pesquisar e transformar ideias em realidade.
        </p>

        <div className="mt-10 w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
          <p className="text-left text-slate-400">
            Em breve, você poderá conversar comigo...
          </p>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Inteligência para transformar suas ideias.
        </p>
      </section>
    </main>
  );
}
