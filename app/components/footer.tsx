export function Footer() {
  return (
    <footer className="w-full py-4 mt-auto bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">
            本站仅做内容链接汇总，感谢每位老师的产出～
            <a
              href={"https://github.com/KazooTTT/milklove-newyear-24h-fanworks"}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 transform hover:scale-110 transition-transform hover:text-black"
              aria-label={`Github`}
            >
              <i className="fab fa-github text-lg"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
