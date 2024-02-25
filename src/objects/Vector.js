export default class Vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z ? z : 0;

    this.isVector = true;
  }

  dotProduct(vectorB) {
    return vectorB.x * this.x + vectorB.y * this.y + vectorB.z * this.z;
  }

  crossProduct(vectorB) {
    return new Vector(
      this.y * vectorB.z - this.z * vectorB.y,
      this.z * vectorB.x - this.x * vectorB.z,
      this.x * vectorB.y - this.y * vectorB.x
    );
  }

  add(vectorB) {
    return new Vector(
      this.x + vectorB.x,
      this.y + vectorB.y,
      this.z + vectorB.z
    );
  }

  sub(vectorB) {
    return new Vector(
      this.x - vectorB.x,
      this.y - vectorB.y,
      this.z - vectorB.z
    );
  }

  toString() {
    return `(${this.x};${this.y};${this.z})`;
  }
}
