import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section bg-gradient-to-b from-brand-900 to-brand-800/60">
      <div className="container-responsive grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Celebrating Automotive Culture in Chester
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-prose">
            CARS AND COFFEE CHESTER LTD brings enthusiasts together through relaxed Cars & Coffee gatherings and community-focused automotive events across Chester and the surrounding areas.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">Get in touch</Link>
          </div>
        </div>
        <div className="card p-3">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-md">
            <Image
              src="/images/car1.png"
              alt="CARS AND COFFEE CHESTER — featured car"
              width={1200}
              height={800}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
