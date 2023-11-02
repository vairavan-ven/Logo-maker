const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

function generateSVG(shape, color, text, textColor) {
    shape.setColor(color);

    let textContent = '';
    if (text) {
        textContent = `<text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${textColor}" font-size="40">${text}</text>`;
    }
  
    const svgContent = `<svg width="300" height="200">${shape.render()}${textContent}</svg>`;
  
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
                validate: function (value) {
                    return value.length <= 3 || 'Please enter up to three characters.';
                },
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

            generateSVG(selectedShape, answers.shapeColor, answers.text, answers.textColor);
        })
        .catch((error) => {
            console.log('Error occurred:', error);
        });
}

promptUser();
