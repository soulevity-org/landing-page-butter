`use client`;

import Background3D from "@/components/Background3D"

export default function About() {
  return (
    <>
      <Background3D />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center text-white drop-shadow-lg">About Soulevity</h1>
        <p className="text-xl mb-12 text-center text-green-100">
          Empowering learners through innovative education and community building.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <section className="bg-white p-8 rounded-lg shadow-xl cool-border">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Our Mission</h2>
            <p>
              To provide accessible, high-quality education and foster a community of lifelong learners passionate about
              personal and professional growth.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-xl cool-border">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Our Vision</h2>
            <p>
              To become the leading platform for transformative learning experiences, connecting learners with expert
              knowledge and vibrant communities.
            </p>
          </section>
        </div>

        <section className="bg-white p-8 rounded-lg shadow-xl cool-border mb-16">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Our Values</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong className="text-green-600">Excellence:</strong> We strive for excellence in everything we do, from
              course content to community support.
            </li>
            <li>
              <strong className="text-green-600">Innovation:</strong> We embrace new ideas and technologies to enhance
              the learning experience.
            </li>
            <li>
              <strong className="text-green-600">Community:</strong> We believe in the power of community to inspire and
              support growth.
            </li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-xl cool-border">
          <h2 className="text-2xl font-bold mb-8 text-green-600">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Vansh Yadav",
                role: "Co-Founder & CEO",
                description:
                  "Passionate about revolutionizing education through technology. Leading Soulevity's vision and strategy.",
              },
              {
                name: "Kaleb Arora",
                role: "Co-Founder & CTO",
                description:
                  "Tech enthusiast focused on building scalable educational platforms. Driving Soulevity's technical innovation.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-bold mb-2 text-green-600">{member.name}</h3>
                <p className="font-semibold mb-2 text-green-500">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

