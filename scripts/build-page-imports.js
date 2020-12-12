const { resolve, normalize } = require('path');
const { readdir } = require('fs').promises;
const fs = require('fs');
const path = require('path');

async function* getFiles(dir) {

  const dirents = await readdir(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);

    if (dirent.isDirectory()) {
      yield* getFiles(normalize(res));
    } else {
      yield res.replace(/\\/g, '/');
    }
  }
}

const getFile = (filePath) => {
    const dirs = filePath.split('/');

    return dirs[dirs.length -1];
}

const getImportName = (filePath) => {
    const file = getFile(filePath);
    let name = file.split('.')[0];

    let camelCased = name.replace(/-([a-z])/g,
    function (letter) {
      return letter[1].toUpperCase();
    });

    const PascalCaseName = camelCased.charAt(0).toUpperCase() + camelCased.substring(1);

    return PascalCaseName;
};

const buildImports = (iconPaths) => {
  let importText = "";

  iconPaths.forEach(i => {
    importText += `import ${getImportName(i)}Page from '.${i}'; \n`;
  })

  return importText
}

const buildExports = (iconPaths) => {
  let importText = "";

  iconPaths.forEach(i => {
    importText += `export class ${getImportName(i)} extends InternalMarkdownWrapper {
  readme = ${getImportName(i)}Page\n}\n\n`
  })

  return importText
}

(async () => {
    const docs = [];
    for await (const file of getFiles('./src/content/static')) {
      const currentPath = path.join(__dirname, '../src/content')

      if(file.includes('.md')) docs.push(file.split(currentPath)[1]);
    }

    const docsText = `// DO NOT EDIT! \n// This doc was auto generated from ./src/scripts/build-page-imports.js \n// ${new Date()}
      \n// Import primary markdown tools\nimport {InternalMarkdownWrapper} from '../components/rawMarkdownWrapper';
      \n// internal markdown docs\n${buildImports(docs)}
      \n// internal markdown docs\n${buildExports(docs)}
    `;

    // this function creates the output file needed
    fs.writeFile("./src/content/docsExport.js", docsText, (err) => {

        if(err) return console.log(err);

        console.log("The file was saved!");
    });

  })()
