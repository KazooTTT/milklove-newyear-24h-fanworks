import { workGroups } from "~/data";
import { WorkCard } from "~/components/work-card";
import CardGrid from "~/components/event-card-grid";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-8 bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg">
        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24">
          <h1 className="text-4xl font-bold text-white text-center">
            MUV家元旦24H限定食堂
          </h1>
        </div>
      </header>

      <CardGrid />

      <main className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 py-12 max-w-[1920px]">
        <div className="space-y-16">
          {workGroups.map((group, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-gray-200 text-gray-800">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {group.items.map((item, itemIndex) => (
                  <WorkCard key={itemIndex} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
