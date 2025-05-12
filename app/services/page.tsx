import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            We provide automation solutions tailored to small businesses needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Lead Capture</CardTitle>
              <CardDescription className="text-slate-500">Automate your lead generation process</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-500 mb-4">
                Our lead capture systems help you collect, organize, and follow up with potential customers
                automatically.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-slate-800">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Follow-up Systems</CardTitle>
              <CardDescription className="text-slate-500">Never miss an opportunity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-500 mb-4">
                Automated follow-up sequences that nurture leads and keep your business top of mind.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-slate-800">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Booking Systems</CardTitle>
              <CardDescription className="text-slate-500">Streamline your scheduling</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-500 mb-4">
                Let clients book appointments directly into your calendar with automated reminders and follow-ups.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-slate-800">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-white hover:bg-gray-200 text-black rounded-full px-8">
            Book Your Free Demo
          </Button>
        </div>
      </div>
    </main>
  )
}
