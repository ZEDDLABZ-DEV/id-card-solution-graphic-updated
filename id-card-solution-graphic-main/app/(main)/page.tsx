import Image from "next/image";
import Link from "next/link";
import { IoCall } from "react-icons/io5";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            ID Card Solutions and Graphics
          </h1>
        </div>
      </header>

      <Link
        href="tel:+919915601342"
        className="bg-blue-500 text-white px-4 py-2 rounded-xl mx-auto flex items-center gap-2 w-fit m-5 shadow-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105"
      >
        <div className="flex items-center gap-1">
          <IoCall className="text-3xl" />
        </div>
        <div className="flex flex-col">
          <p>Mandeep Sharma</p>
          <p className="text-lg">+91 99156 01342</p>
        </div>
      </Link>

      {/* Portfolio Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Work Gallery
            </h2>
            <p className="text-gray-600">
              Explore our collection of ID cards and badges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover-lift bg-white">
              <Image
                src="/images/schoolbadges.jpg"
                alt="School Badges Collection"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  School Badges
                </h3>
                <p>School badges print rate: ₹25</p>
                <p className="text-sm text-gray-600">
                  Complete badge collection
                </p>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover-lift bg-white">
              <Image
                src="/images/headgirlbadge.jpg"
                alt="Head Girl Badge"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Head Girl Badge (Rs 25)
                </h3>
                <p className="text-sm text-gray-600">Leadership recognition</p>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover-lift bg-white">
              <Image
                src="/images/birthdaybadge.jpg"
                alt="Birthday Badge"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Birthday Badge
                </h3>
                <p className="text-sm text-gray-600">
                  Special celebration badges
                </p>
              </div>
            </div>

            {/* Portfolio Item 4 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover-lift bg-white">
              <Image
                src="/images/badgeback.jpg"
                alt="Badge Back Design"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Badge Back Design
                </h3>
                <p className="text-sm text-gray-600">
                  Professional back designs
                </p>
              </div>
            </div>

            {/* Portfolio Item 5 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover-lift bg-white">
              <Image
                src="/images/balvatikaschool.jpg"
                alt="Balvatika School"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4">
                <p>Single side without dori print rate: ₹25</p>
                <p>Both side with dori print rate: ₹35</p>
                <h3 className="text-lg font-semibold text-gray-900">
                  Balvatika School
                </h3>
                <p className="text-sm text-gray-600">
                  School identity solutions
                </p>
              </div>
            </div>

            {/* Portfolio Item 6 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover-lift bg-white">
              <Image
                src="/images/indianheritageschool.jpg"
                alt="Indian Heritage School"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4">
                <p>Single side print rate: ₹25</p>
                <p>Both side print rate: ₹35</p>
                <h3 className="text-lg font-semibold text-gray-900">
                  Indian Heritage School
                </h3>
                <p className="text-sm text-gray-600">
                  Heritage school branding
                </p>
              </div>
            </div>

            {/* Portfolio Item 7 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover-lift bg-white">
              <Image
                src="/images/pmshrigovschool.jpg"
                alt="PM Shri Gov School"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  PM Shri Gov School
                </h3>
                <p className="text-sm text-gray-600">
                  Government school solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
