export class CreateProjectCommand {
  name!: string;

  constructor(name: string) {
    this.name = name;
  }
}