interface CardProps {
  title: string;
  subtitle: string;
  name: string;
  englishName: string;
  quotes: string[];
  date: string;
  bgColor: string;
  image: string;
}

export function Card({
  title,
  subtitle,
  name,
  englishName,
  quotes,
  date,
  bgColor,
  image,
}: CardProps) {
  return (
    <div className="relative aspect-[3/5] overflow-hidden rounded-lg group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${bgColor} to-black/90`}
      />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col text-white">
        <div className={`space-y-2 text-center mb-6`}>
          <h2 className="text-2xl font-medium">{title}</h2>
          <h3 className="text-xl font-medium">{subtitle}</h3>
          <div className="w-8 h-[1px] bg-white mx-auto mt-4" />
        </div>

        <div className={`space-y-1 mb-4`}>
          <p className="text-lg">{name}</p>
          <p className="text-sm text-gray-300">{englishName}</p>
        </div>

        <div className={`flex-1 flex flex-col justify-center space-y-2`}>
          {quotes.map((quote, index) => (
            <p key={index} className="text-sm leading-relaxed">
              “{quote}”
            </p>
          ))}
        </div>

        <div className="mt-4">
          <p className={`text-sm text-center text-gray-300`}>{date}</p>
        </div>
      </div>
    </div>
  );
}
