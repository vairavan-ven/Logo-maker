class Circle {
  constructor() {
    this.size = 0;
    this.color = '';
  }

  setSize(size) {
    this.size = size;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="50" cy="50" r="${this.size}" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor() {
    this.size = 0;
    this.color = '';
  }

  setSize(size) {
    this.size = size;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="50,0 100,100 0,100" fill="${this.color}" />`;
  }
}

class Square {
  constructor() {
    this.size = 0;
    this.color = '';
  }

  setSize(size) {
    this.size = size;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="0" y="0" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
