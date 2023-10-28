export class Point {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public latitude: number,
    public longitude: number,
    public description: string,
    public point_adress: string,
    public phone_number: string,
    public link: string,
    public district: string,
    public regions: string,
    public alterEgo?: string

  ) {  }
}
