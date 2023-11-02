class Circle {
  constructor() {
    this.size = { width: 300, height: 200 };
    this.color = '';
  }

  setSize() {
    // Size is fixed to 300x200
    this.size = { width: 300, height: 200 };
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor() {
    this.size = { width: 300, height: 200 };
    this.color = '';
  }

  setSize() {
    // Size is fixed to 300x200
    this.size = { width: 300, height: 200 };
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="150,0 300,200 0,200" fill="${this.color}" />`;
  }
}

class Square {
  constructor() {
    this.size = { width: 300, height: 200 };
    this.color = '';
  }

  setSize() {
    // Size is fixed to 300x200
    this.size = { width: 300, height: 200 };
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="0" y="0" width="300" height="200" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
