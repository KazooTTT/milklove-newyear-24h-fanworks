import * as fs from "fs";
import * as path from "path";

const dataFilePath = path.join(process.cwd(), "app", "data.ts");
const textMdPath = path.join(process.cwd(), "text.md");

// 从 text.md 生成映射
function generateImageMap(): Record<string, string> {
  const content = fs.readFileSync(textMdPath, "utf8");
  const imageMap: Record<string, string> = {};
  
  // 匹配 markdown 图片语法
  const regex = /!\[(.*?)\]\((https:\/\/pictures\.kazoottt\.top\/.*?\.(?:jpg|jpeg))\)/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const [, altText, newUrl] = match;
    // 从 alt 文本提取原始文件名
    const originalId = altText.replace(/\.[^/.]+$/, ""); // 移除可能的扩展名
    imageMap[originalId] = newUrl;
  }

  return imageMap;
}

try {
  // 生成映射
  const imageMap = generateImageMap();
  console.log("Generated image mappings:", imageMap);

  // 读取数据文件
  let content = fs.readFileSync(dataFilePath, "utf8");

  // 替换所有匹配的图片链接
  Object.entries(imageMap).forEach(([oldId, newUrl]) => {
    const oldPattern = new RegExp(`${oldId}\\.jpg`, "g");
    content = content.replace(oldPattern, newUrl);
  });

  // 写回文件
  fs.writeFileSync(dataFilePath, content);
  console.log("Successfully updated image URLs in data.ts");
} catch (error) {
  console.error("Error updating image URLs:", error);
}
