export class Model {
  constructor(obj: { [key: string]: unknown }) {
    Object.assign(this, obj);
    return this;
  }
}
