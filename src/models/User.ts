export class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public get(propName: string): string | number {
        return propName === "name" ? this.name : this.age;
    }

    public set(propName: string, value: string | number): void {
        if (propName === "name") this.name = value as string;
        if (propName === "age") this.age = value as number;
    }


}