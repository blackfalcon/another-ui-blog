const getTableHeaders = () => {
  return ["FileName","Component","Version"];
}

const generateFileTableData = (fileName, lines) => {
  const table = []
  lines.forEach(line => {
    const lineData = line.split(":");
    if (lineData[1].match(/\d+\.\d+\.*\d*/g)) {
      table.push({
        FileName: fileName,
        Component: lineData[0].replace(/(["/]|@alaskaairux)/g, ''),
        Version: lineData[1].replace(/[",]/g,'')
      })
    }
  });
  return table;
}

export {generateFileTableData, getTableHeaders};