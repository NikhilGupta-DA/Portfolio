const fs = require("fs");
const path = require("path");

const brainDir = "C:\\Users\\nikhi\\.gemini\\antigravity\\brain\\1b5d1d4b-b41d-4a3a-b78c-44f40d18da83";
const destDir = "c:\\Users\\nikhi\\Portfolio-Website\\public\\images";

const files = [
  { src: "media__1786127808497.png", dest: "sheets.png" },
  { src: "media__1786127808498.jpg", dest: "appsscript.jpg" },
  { src: "media__1786127808499.png", dest: "sql.png" },
  { src: "media__1786127808558.jpg", dest: "powerbi.jpg" },
  { src: "media__1786127808497.jpg", dest: "excel.jpg" }
];

files.forEach((f) => {
  const srcPath = path.join(brainDir, f.src);
  const destPath = path.join(destDir, f.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${f.src} to ${f.dest}`);
  } else {
    console.log(`File not found: ${f.src}`);
  }
});
