const path = require("path");
const fs = require("fs");
const {promisify} = require("util");
const sharp = require("sharp");
const tmp = require("tmp")
const glob = require("glob");
const potrace = require("potrace");

const imgsDir = path.join("./src/assets/", "**/*.+(jpg|png)");

const addThumbToName = filePath => {
  const parts = filePath.split(".");
  return [parts[0], '.thumb.', parts[1]].join('');
};

const replaceExt = (filePath, ext) => filePath.replace(/\.(png|jpg)/g, ext);

glob(imgsDir, (err, files) =>
  files
  .filter(file => !/\.(thumb|primitive)\./.test(file))
  .map(file => {
    console.log(`Processing file ${file}`);
    const thumb = addThumbToName(file);

    sharp(file)
      .resize(64, 64)
      .max()
      .toFile(thumb, err => err ? console.error(err) : console.info(`Outputed file ${thumb}`))

    const tempPath = `/tmp/${path.basename(file)}`;
    sharp(file).resize(256, 256).max().toFile(tempPath, err => {
      potrace.trace(tempPath, {
        background: "#F6F8FA",
        color: "#e2f0ff"
      }, (err, svg) => {
        const out = replaceExt(file, '.trace.svg');
        fs.writeFile(out, svg, err => err ? console.error(err) : console.info(`Outputed file ${out}`))
      })
    })
  })
);