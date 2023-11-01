
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./libs/shapes');

function generateSVG(shape, size, color) {
  shape.setSize(size);
  shape.setColor(color);
  const svgContent = `<svg width="300" height="200">${shape.render()}</svg>`;
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeSize',
        message: 'Enter size of the shape (max 100):',
        validate: function (value) {
          const valid = !isNaN(parseFloat(value)) && parseFloat(value) <= 100;
          return valid || 'Please enter a valid size (max 100).';
        },
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex):',
      },
    ])
    .then((answers) => {
      let selectedShape;
      switch (answers.shape) {
        case 'Circle':
          selectedShape = new shapes.Circle();
          break;
        case 'Triangle':
          selectedShape = new shapes.Triangle();
          break;
        case 'Square':
          selectedShape = new shapes.Square();
          break;
        default:
          break;
      }

      generateSVG(selectedShape, parseFloat(answers.shapeSize), answers.shapeColor);
    })
    .catch((error) => {
      console.log('Error occurred:', error);
    });
}

promptUser();
