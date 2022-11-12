export class Todo {
  constructor(
    public id: number = 0,
    public title: string,
    public text: string,
    public completed: boolean = false
  ) {}
}
