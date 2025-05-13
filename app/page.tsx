import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-24 md:py-32 bg-black">
      <div className="container max-w-4xl mx-auto text-center space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Nawara Labs</h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-8 text-white">
            We believe small businesses shouldn't be doing everything manually.
          </h2>

          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
            That's why we build systems that take care of the boring stuff — like lead capture, follow-ups, and bookings
            — so you can focus on what matters most: serving your customers.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold shadow">
              Book Your Free Demo
            </button>
            <button className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition">
              Login
            </button>
          </div>

        </section>

        {/* Offers Section */}
        <section className="mt-20">
          <div className="bg-background rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-0 shadow-sm bg-card text-card-foreground">
                <h3 className="text-2xl font-bold mb-4 text-white">Client Launch Offer</h3>
                <p className="text-muted-foreground">
                  Get started with our special launch pricing and premium support to automate your business processes.
                </p>
                <Button variant="outline" className="mt-6 border-border text-foreground hover:bg-muted">
                  Learn More
                </Button>
              </Card>

              <Card className="p-8 border-0 shadow-sm bg-card text-card-foreground">
                <h3 className="text-2xl font-bold mb-4 text-white">Founder's Note</h3>
                <p className="text-muted-foreground">
                  Read about our mission and how we're helping small businesses focus on what truly matters.
                </p>
                <Button variant="outline" className="mt-6 border-border text-foreground hover:bg-muted">
                  Read More
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
