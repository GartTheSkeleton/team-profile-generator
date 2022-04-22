let finishedBlocks = ''

let generateBlocks = function(templateData){
    for(let i = 0; i < templateData.length; i++){
        let currentBlock = ""
        console.log(templateData[i].roll);
        if (templateData[i].roll === "Manager") {
            currentBlock = `
            <div class="subcontainer">
            <h2 class="manager">${templateData[i].name} - Manager</h2>
            <div>ID: ${templateData[i].id}</div>
            <a href="mailto:${templateData[i].email}">${templateData[i].email}</a>
            <div>Office#: ${templateData[i].office}</div>
            </div>`
        }
        else if (templateData[i].roll === "Engineer") {
            currentBlock = `
            <div class="subcontainer">
            <h2 class="engineer">${templateData[i].name} - Engineer</h2>
            <div>ID: ${templateData[i].id}</div>
            <a href="mailto:${templateData[i].email}">${templateData[i].email}</a>
            <div>GitHub:<a href="https://github.com/${templateData[i].github}">https://github.com/${templateData[i].github}</a></div>
            </div>`
        }
        else if (templateData[i].roll === "Intern") {
            currentBlock = `
            <div class="subcontainer">
            <h2 class="intern">${templateData[i].name} - Intern</h2>
            <div>ID: ${templateData[i].id}</div>
            <a href="mailto:${templateData[i].email}">${templateData[i].email}</a>
            <div>School: ${templateData[i].school}</div>
            </div>`
        }
        finishedBlocks += currentBlock;
    }
    return finishedBlocks;
}

module.exports = templateData => {
    // destructure page data by section
    //console.log(templateData)
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
    <div class="container">
    ${generateBlocks(templateData)}
    </div>
    </body>`  
}