const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

function generateSVG(shape, color) {
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

            generateSVG(selectedShape, answers.shapeColor);
        })
        .catch((error) => {
            console.log('Error occurred:', error);
        });
}

promptUser();
