import Image from "next/image";

export default function VenuePage() {
  return (
    <main className="container mx-auto px-4 py-24">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
        Conference Venue
      </h1>

      {/* Venue Name */}
      <h2 className="text-xl font-semibold text-black mb-4">
        ABC College of Engineering, Nagpur
      </h2>

      {/* Address */}
      <p className="text-gray-700 mb-6">
        XYZ Road, Hingna, Nagpur, Maharashtra – 440016, India
      </p>

      {/* Venue Image */}
      <div className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden mb-8">
        <Image
          src="/venue.jpg" // put image in public/
          alt="Conference Venue"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Description */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">About the Venue</h3>
        <p className="text-gray-700 leading-relaxed">
          The conference will be held at ABC College of Engineering, equipped
          with modern auditoriums, seminar halls, and excellent infrastructure
          to support international academic events.
        </p>
      </section>

      {/* Facilities */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Facilities</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Fully air-conditioned auditorium</li>
          <li>High-speed Wi-Fi</li>
          <li>Audio-visual presentation systems</li>
          <li>Parking facilities</li>
          <li>Wheelchair accessibility</li>
        </ul>
      </section>

      {/* Google Map */}
      <section>
        <h3 className="text-xl font-semibold mb-3">Location Map</h3>
        <div className="w-full h-[300px] rounded-lg overflow-hidden border">
          <iframe
            src="https://www.google.com/maps?q=Nagpur&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
