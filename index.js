import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs';
import generateName from 'sillyname';

let imgName = generateName();


/* see the documentation in npm js of inquirer and qr-image*/
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Type your URL",
        type:"input",
        name:"saveimg",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.saveimg;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`${imgName}.png`));

    console.log(url);

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log('error');
    } else {
      // Something else went wrong
    }
  });






