import { useEffect, useState } from "react";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { OtherWorkItem, WorkItem } from "~/data";
import { cn, getEndTypeBadgeConfig } from "~/lib/utils";

const HoverDropdown = ({
  urls,
}: {
  urls: { link: string; name: string }[];
}) => {
  return (
    <HoverCard openDelay={0} closeDelay={150}>
      <HoverCardTrigger asChild>
        <button
          className="text-blue-500 hover:text-blue-600 transform hover:scale-110 transition-transform flex items-center focus:outline-none select-none"
          aria-label="访问直达链接"
        >
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
              href={url.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-2 py-1.5 hover:bg-gray-100 rounded transition-colors cursor-pointer"
            >
              {url.name}
            </a>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const ClickDropdown = ({
  urls,
}: {
  urls: { link: string; name: string }[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="text-blue-500 hover:text-blue-600 transform hover:scale-110 transition-transform flex items-center focus:outline-none select-none"
          aria-label="访问直达链接"
          onTouchStart={() => {}}
        >
          <i className="fa-solid fa-chevron-down text-lg"></i>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px] p-1">
        {urls.map((url, urlIndex) => (
          <a
            key={urlIndex}
            href={url.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm"
          >
            {url.name}
          </a>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ResponsiveDropdown = ({
  urls,
}: {
  urls: { link: string; name: string }[];
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <ClickDropdown urls={urls} />;
  }

  return <HoverDropdown urls={urls} />;
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
  showEndType = true,
}: WorkItem & { showEndType?: boolean }) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 flex flex-col group",
        "md:hover:shadow-xl"
      )}
    >
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
            className="w-full h-full object-cover object-center"
            loading="lazy"
            width={320}
            height={192}
            srcSet={`${coverImage} 320w, ${coverImage} 640w`}
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </a>
        {showEndType && endType !== null && endType !== undefined && (
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
          <h3 className="text-lg font-semibold line-clamp-2 text-gray-800">
            <a
              href={weiboUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
            >
              <span className="relative">
                {title}
                <span
                  className={cn(
                    "absolute bottom-[-4px] left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-pink-500",
                    "md:origin-left md:transform md:scale-x-0 md:transition-transform md:duration-300 md:group-hover:scale-x-100",
                    "origin-left transform scale-x-100 transition-transform duration-300"
                  )}
                />
              </span>
            </a>
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
          <div className="flex space-x-4 md:space-x-4 space-x-6 items-center shrink-0">
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
                <ResponsiveDropdown urls={directUrl} />
              ) : (
                <a
                  href={
                    Array.isArray(directUrl) ? directUrl[0].link : directUrl
                  }
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

export function OtherWorkCard({ title, weiboUrl }: OtherWorkItem) {
  return (
    <a
      href={weiboUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card
        className={cn(
          "overflow-hidden transition-all duration-300 h-full",
          "md:hover:shadow"
        )}
      >
        <CardHeader className="p-4">
          <h3 className="text-lg font-semibold line-clamp-2 text-gray-800">
            <span className="relative">
              {title}
              <span
                className={cn(
                  "absolute bottom-[-4px] left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-pink-500",
                  "md:origin-left md:transform md:scale-x-0 md:transition-transform md:duration-300 md:group-hover:scale-x-100",
                  "origin-left transform scale-x-100 transition-transform duration-300"
                )}
              />
            </span>
          </h3>
        </CardHeader>
      </Card>
    </a>
  );
}
