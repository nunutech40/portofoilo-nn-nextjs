import Image from 'next/image'

export default function Home() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          Nunu Nugraha
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Mobile Developer</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-8">
          Welcome to My Portfolio
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 prose-lg">
          Hello! I'm passionate about web development and design. Here you can find some of my latest projects and learn more about me.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
