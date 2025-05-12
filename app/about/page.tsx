export default function AboutPage() {
  return (
    <main className="pt-24 pb-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">About Nawara Labs</h1>

          <div className="prose prose-slate prose-invert mx-auto">
            <p className="text-slate-400">
              At Nawara Labs, we believe small businesses shouldn't be doing everything manually. That's why we build
              systems that take care of the boring stuff — like lead capture, follow-ups, and bookings — so you can
              focus on what matters most: serving your customers.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Our Mission</h2>
            <p className="text-slate-400">
              Our mission is to empower small businesses with automation tools that were previously only available to
              large enterprises. We want to level the playing field and help small business owners reclaim their time.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Founder's Note</h2>
            <p className="text-slate-400">
              "I started Nawara Labs after seeing too many talented small business owners get bogged down in
              administrative tasks instead of doing what they do best. Our goal is to handle the repetitive work so you
              can focus on growth and delivering exceptional value to your customers."
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Our Approach</h2>
            <p className="text-slate-400">
              We take a personalized approach to automation. Every business is unique, so we create custom solutions
              that integrate with your existing workflows and tools. Our systems are designed to be intuitive and
              require minimal training to use.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
