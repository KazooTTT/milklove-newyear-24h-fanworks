import { useState } from "react";
import { OtherWorkCard, WorkCard } from "~/components/work-card";
import { otherWorks, workGroups } from "~/data";

export default function App() {
  const [showEndType, setShowEndType] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-24 bg-gradient-to-r from-emerald-600 to-pink-600 relative overflow-hidden">
        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              MUV家元旦24H限定食堂
            </span>
          </h1>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowEndType(!showEndType)}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors duration-200 backdrop-blur-sm"
            >
              {showEndType ? "隐藏" : "显示"}END标签
            </button>
          </div>
        </div>
      </header>
      {/* <CardGrid /> */}

      <main className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 py-12 max-w-[1920px]">
        <div className="space-y-16">
          {workGroups.map((group, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-gray-200 text-gray-800">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {group.items.map((item, itemIndex) => (
                  <WorkCard
                    key={itemIndex}
                    {...item}
                    showEndType={showEndType}
                  />
                ))}
              </div>
            </div>
          ))}
          <div>
            <h2 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-gray-200 text-gray-800">
              其他
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {otherWorks.map((item, itemIndex) => (
                <OtherWorkCard key={itemIndex} {...item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
