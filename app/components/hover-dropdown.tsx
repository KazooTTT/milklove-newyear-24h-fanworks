import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

interface HoverDropdownProps {
  urls: string[];
}

export function HoverDropdown({ urls }: HoverDropdownProps) {
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
}
