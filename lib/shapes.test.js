const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  it('should render a circle SVG element', () => {
    const circle = new Circle();
    circle.setSize(10);
    circle.setColor('red');
    const svg = circle.render();
    expect(svg).toEqual('<circle cx="50" cy="50" r="10" fill="red" />');
  });
});

describe('Triangle', () => {
  it('should render a triangle SVG element', () => {
    const triangle = new Triangle();
    triangle.setSize(20);
    triangle.setColor('blue');
    const svg = triangle.render();
    expect(svg).toEqual('<polygon points="50,0 100,100 0,100" fill="blue" />');
  });
});

describe('Square', () => {
  it('should render a square SVG element', () => {
    const square = new Square();
    square.setSize(15);
    square.setColor('green');
    const svg = square.render();
    expect(svg).toEqual('<rect x="0" y="0" width="15" height="15" fill="green" />');
  });
});
