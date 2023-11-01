const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('render() method should generate correct SVG for the circle', () => {
    const circle = new Circle(50);
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
  });

  test('render() method should adjust size for larger circles', () => {
    const circle = new Circle(150);
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
  });
});

describe('Triangle', () => {
  test('render() method should generate correct SVG for the triangle', () => {
    const triangle = new Triangle(50);
    triangle.setColor('green');
    expect(triangle.render()).toEqual('<polygon points="150, 86.60254037844386 100, 150 200, 150" fill="green" />');
  });

  test('render() method should adjust size for larger triangles', () => {
    const triangle = new Triangle(250);
    triangle.setColor('yellow');
    expect(triangle.render()).toEqual('<polygon points="150, 433.01270189221935 200, 150 100, 150" fill="yellow" />');
  });
});

describe('Square', () => {
  test('render() method should generate correct SVG for the square', () => {
    const square = new Square(50);
    square.setColor('orange');
    expect(square.render()).toEqual('<rect x="100" y="100" width="100" height="100" fill="orange" />');
  });

  test('render() method should adjust size for larger squares', () => {
    const square = new Square(150);
    square.setColor('purple');
    expect(square.render()).toEqual('<rect x="0" y="0" width="200" height="200" fill="purple" />');
  });
});
