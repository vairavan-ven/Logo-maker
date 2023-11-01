class Shape {
  constructor(size) {
    this.size = size;
    this.color = 'black'; // Default color
  }

  setSize(size) {
    this.size = size;
  }

  setColor(color) {
    this.color = color;
  }

  
}

class Circle extends Shape {
  render() {
    // Radius should be adjusted to fit within 300x200 while keeping the aspect ratio
    const radius = this.size > 100 ? 100 : this.size; // Maximum radius is set to 100
    return `<circle cx="150" cy="100" r="${radius}" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    // Adjust triangle points to fit within the 300x200 space
    const height = Math.sqrt(3) * this.size / 2;
    const width = this.size > 200 ? 200 : this.size; // Maximum width is set to 200
    return `<polygon points="150,${100 - height} ${150 + width},${100 + height} ${150 - width},${100 + height}" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    // Adjust square size to fit within the 300x200 space
    const dimension = this.size > 100 ? 100 : this.size; // Maximum dimension set to 100
    return `<rect x="${150 - dimension}" y="${100 - dimension}" width="${dimension * 2}" height="${dimension * 2}" fill="${this.color}" />`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
