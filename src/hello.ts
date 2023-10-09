export class Hello {
  private massage: string
  constructor(name: string) {
    this.massage = name
  }
  public sayHello(): string {
    return 'Hello Puppy!'
  }
  public sayName(): string {
    return `Hello ${this.massage}!`
  }
}
