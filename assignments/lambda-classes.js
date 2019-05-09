// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        let [name ,age , location, gender] = attributes
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }
    speak(){
        return `Hello my name is ${this.name}, i am from ${this.location},`
    }
}
class Instructor extends Person {
    constructor(attributes){
        let[specialty , favLanguage , catchPhrase] = attributes;
        super(attributes)
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    };
    grade(student ,subject){
        return `${student.name} receives a perfect score on ${subject}`

    }

}