import { WorkItem } from "~/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { cn, getEndTypeBadgeConfig } from "~/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

const HoverDropdown = ({ urls }: { urls: string[] }) => {
  return (
    <HoverCard openDelay={0} closeDelay={150}>
      <HoverCardTrigger asChild>
        <button className="text-blue-500 hover:text-blue-600 transform hover:scale-110 transition-transform flex items-center">
          <i className="fa-solid fa-chevron-down text-lg"></i>
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        align="end"
        sideOffset={5}
        className="w-auto p-2 shadow-lg"
      >
        <div className="flex flex-col gap-2">
          {urls.map((url, urlIndex) => (
            <a
              key={urlIndex}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-2 py-1.5 hover:bg-gray-100 rounded transition-colors cursor-pointer"
            >
              直达链接 {urlIndex + 1}
            </a>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export function WorkCard({
  title,
  coverImage,
  endType,
  description,
  author,
  category,
  weiboUrl,
  directUrl,
}: WorkItem) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative h-48 bg-gray-100">
        <a
          href={weiboUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full cursor-pointer"
          aria-label={`访问${author}的微博`}
        >
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform"
            loading="lazy"
            width={320}
            height={192}
            srcSet={`${coverImage} 320w, ${coverImage} 640w`}
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </a>
        {endType !== null && endType !== undefined && (
          <div className="absolute top-2 right-2">
            <Badge
              variant="secondary"
              className={cn(
                "min-w-[32px] text-center shadow-sm backdrop-blur-sm",
                getEndTypeBadgeConfig(endType).className
              )}
            >
              {getEndTypeBadgeConfig(endType).text}
            </Badge>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1">
        <CardHeader className="p-5 pb-0">
          <h3 className="text-lg font-semibold line-clamp-2 text-gray-800 hover:text-pink-600 transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="p-5 pt-3 flex-1">
          {description && (
            <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
          )}
        </CardContent>
        <CardFooter className="p-5 pt-0 flex items-center justify-between space-x-4 mt-auto">
          <div className="flex items-center space-x-2 min-w-0 flex-1">
            <i
              className={cn(
                "text-[13px]",
                category === 0
                  ? "fa-solid fa-book"
                  : category === 1
                  ? "fa-solid fa-palette"
                  : "fa-solid fa-video"
              )}
            />
            <span className="text-sm font-medium text-gray-700 truncate">
              {author}
            </span>
          </div>
          <div className="flex space-x-3 items-center shrink-0">
            <a
              href={weiboUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600 transform hover:scale-110 transition-transform flex items-center"
              tabIndex={-1}
              aria-label={`访问${author}的微博`}
            >
              <i className="fab fa-weibo text-lg"></i>
            </a>
            {directUrl &&
              (Array.isArray(directUrl) && directUrl.length > 1 ? (
                <HoverDropdown urls={directUrl} />
              ) : (
                <a
                  href={Array.isArray(directUrl) ? directUrl[0] : directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transform hover:scale-110 transition-transform"
                  tabIndex={-1}
                  aria-label="访问原始链接"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                </a>
              ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
