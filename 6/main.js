class Person{
   constructor(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
   }
   print(){
    return `Name: ${this.name} Surname: ${this.surname} `
   }
}

let person = new Person('Zhanylai', 'Suiumbekova', 18)
console.log(person.print());



class User extends Person{
    #password;
    constructor(name, surname, age, password){
        super(name, surname, age);
        this.#password = password;
    }
    print(inputPassword){
        if(inputPassword === this.#password){
            console.log(`Name: ${this.name} Surname: ${this.surname} `);
              
        }else{
           console.log("Erorr");
           
        }
    }

}
const user = new User('Karima', 'Saitova', 18, '12345');
user.print('12345');
