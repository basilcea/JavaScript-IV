// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        let {name ,age , location, gender} = attributes
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
        let {specialty , favLanguage , catchPhrase} = attributes;
        super(attributes)
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    };
    gradeStudent(student){
         student.grade -= Math.floor(Math.random * 10)
         return student.grade
    };
    grade(student ,subject){
        
        return `${student.name} receives a perfect score on ${subject}`

    };

}
class Student extends Person{
    constructor(attributes){
        let{previousBackground, className , favSubjects } = attributes;
        super(attributes)
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects; 
        this.grade = 50;
    };
    listsSubjects(){
        this.favSubjects.forEach(subject => console.log(subject))
    };
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)

    };
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    };
    graduate(){
        if(this.grade >=70) {
            return 'Youre Good to Go. Lambda has high Hopes for you'
        }
        else{
            Instructor.gradeStudent()

        }
    }
}
class ProjectManager extends Instructor{
    constructor(attributes){
        let {gradClassName ,favInstructor} = attributes;
        super(attributes);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    };
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)

    }
    debugsCode(student ,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`
        )
    }
}

const firstPerson = new Person ({
    name: 'firstPerson',
    age: 13,
    gender: "M",
    location:'Nigeria'

})
const secondPerson = new Person ({
    name: 'secondPerson',
    age: 25,
    gender: "F",
    location:'Italy'

})
const firstInstructor = new Instructor ({
    name: 'firstInstructor',
    age: 35,
    gender: "M",
    location:'USA',
    speciality: 'Frontend',
    favLanguage:'Javascript',
    catchPhrase:'I found peace at the node being charged with electron'
})
const secondInstructor = new Instructor ({
    name: 'secondInstructor',
    age: 22,
    gender: "F",
    location:'Russia',
    speciality: 'Backend',
    favLanguage:'Python',
    catchPhrase:'Remember if its python, it must be robust'
})
const firstStudent = new Student ({
    name: 'firstStudent',
    age: 29,
    gender: "M",
    location:'Nigeria',
    previousBackground: 'Telecoms',
    className:'WEBEU2',
    favSubjects:['HTML', 'CSS', 'Javascript','Python', 'Jupyter']
})
const secondStudent = new Student ({
    name: 'secondStudent',
    age: 22,
    gender: "F",
    location:'Russia',
    previousBackground: 'Microbiology',
    className:'WEBEU2',
    favSubjects:['HTML','CSS','Javscript']
})
const firstPM = new ProjectManager ({
    name: 'firstInstructor',
    age: 30,
    gender: "F",
    location:'USA',
    speciality: 'Devops',
    favLanguage:'Python',
    catchPhrase:'operation must be seamless',
    gradClassName:'WEBEU1',
    favInstructor:'secondInstructor'
})
const secondPM = new ProjectManager ({
    name: 'secondInstructor',
    age: 23,
    gender: "F",
    location:'Denmark',
    speciality: 'Quality Assurance',
    favLanguage:'Ruby',
    catchPhrase:'I think i saw ruby, he is playing on the rails',
    gradClassName:'WEBEU1',
    favInstructor:'firstInstructor'
})
console.log(firstPerson)
console.log(secondPerson.speak())
console.log(firstInstructor.demo('javascript'))
console.log(secondInstructor.grade(firstStudent,'javascript'))
console.log(secondStudent.listsSubjects())
console.log(secondStudent.PRAssignment('javascript'))
console.log(firstPM.standUp('webeu-sorin'))
console.log(secondPM.debugsCode(firstStudent,'encansuplation'))
console.log(firstInstructor.gradeStudent(firstStudent))