import Image from "next/image"
import Link from "next/link"

export default function MediaCenter() {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-normal text-slate-700 mb-8">Media Center</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 bg-sky-50 bg-opacity-70 rounded-2xl overflow-hidden">
          <div className="overflow-hidden">
            <Image
              src="https://dxm.content-center.totalenergies.com/api/wedia/dam/transform/xysh7dg731tahmk1arzqntcqde/iec-launch-jpg.webp?t=resize&width=0.85&t=crop&fx=0.5&fy=0.5&outputHeight=500"
              alt="Business professionals signing documents"
              width={600}
              height={400}
              className="w-full h-[200px] object-cover"
            />
          </div>

          <div className="mt-4 p-6 rounded-lg">
            <h3 className="text-slate-700 text-lg font-medium mb-3">Press Releases</h3>
            <Link href="/news" className="text-red-600 hover:underline">
              /news
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
