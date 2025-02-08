import Link from "next/link"
import Background3D from "../components/Background3D"

export default function Home() {
  return (
    <>
      <Background3D />
      <div className="container mx-auto px-4">
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Transform Your Learning Journey with Soulevity
          </h1>
          <p className="text-xl mb-8 text-green-100">
            Discover expert-led courses, join vibrant communities, and stay updated with cutting-edge research in one
            place.
          </p>
          <div className="space-x-4">
            <Link
              href="/signup"
              className="bg-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-900 transition duration-300 shadow-lg"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="bg-gray-100 text-green-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert-Led Courses",
              description:
                "Learn from industry professionals and gain practical skills through our comprehensive course catalog.",
            },
            {
              title: "Vibrant Community",
              description:
                "Connect with like-minded learners, share experiences, and grow together in our supportive community.",
            },
            {
              title: "Latest Research",
              description: "Stay updated with cutting-edge research and developments in your field of interest.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl cool-border hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold mb-4 text-green-800">{item.title}</h2>
              <p className="text-gray-900">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="py-16 glass-effect rounded-lg text-center mt-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of learners who are already transforming their careers with Soulevity.
          </p>
          <Link
            href="/signup"
            className="bg-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-900 transition duration-300 shadow-lg"
          >
            Get Started
          </Link>
        </section>
      </div>
    </>
  )
}