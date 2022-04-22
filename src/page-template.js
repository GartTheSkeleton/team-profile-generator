let finishedBlocks = ''

let generateBlocks = function(templateData){
    for(let i = 0; i < templateData.length; i++){
        let currentBlock = ""
        console.log(templateData[i].roll);
        if (templateData[i].roll === "Manager") {
            currentBlock = `
            <h2>${templateData[i].name} - Manager</h2>;
            <div>ID: ${templateData[i].id}</div>;
            <a href="mailto:${templateData[i].email}">${templateData[i].email}</a>;
            <div>Office#: ${templateData[i].office}</div>;`
        }
        else if (templateData[i].roll === "Engineer") {
            currentBlock = `
            <h2>${templateData[i].name} - Engineer</h2>;
            <div>ID: ${templateData[i].id}</div>;
            <a href="mailto:${templateData[i].email}">${templateData[i].email}</a>;
            <div>GitHub:<a href="https://github.com/${templateData[i].github}">https://github.com/${templateData[i].github}</a></div>;`
        }
        else if (templateData[i].roll === "Intern") {
            currentBlock = `
            <h2>${templateData[i].name} - Intern</h2>;
            <div>ID: ${templateData[i].id}</div>;
            <a href="mailto:${templateData[i].email}">${templateData[i].email}</a>;
            <div>School: ${templateData[i].school}</div>;`
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
    ${generateBlocks(templateData)}
    </body>`  
}