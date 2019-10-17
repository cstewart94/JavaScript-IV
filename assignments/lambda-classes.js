// CODE here for your Lambda Classes
//CLASSES
class Person{
  constructor(attributes){
    this.name=attributes.name,
    this.age=attributes.age,
    this.location=attributes.location
  }
  speak(){
    return `Hello, my name is ${this.name}. I am from ${this.location}.`;
    }
  }
  
 class Instructor extends Person{
   constructor(insAttributes){
   super(insAttributes);
   this.specialty = insAttributes.specialty,
   this.favLanguage=insAttributes.favLanguage,
   this.catchPhrase=insAttributes.catchPhrase
   }
   demo(subject){
     return `Today we are learning about ${subject}.`;
   }
   grade(Student, subject){
     return `${Student.name} receives a perfect score on ${subject}`;
   }
 }

class Student extends Person{
  constructor(stuAttributes){
    super(stuAttributes);
    this.previousBackground=stuAttributes.previousBackground,
    this.className=stuAttributes.className,
    this.favSubjects=stuAttributes.favSubjects 
  }
  listsSubjects(){
    return`${this.favSubjects}`;
  }
  PRAssignment(subject){
    return`${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject){
    return`${this.name} has begun sprint challenge on ${subject}`;
  }
}


class ProjectManager extends Instructor{
  constructor(PMAttributes){
    super(PMAttributes);
    this.gradClassName=PMAttributes.gradClassName,
    this.favInstructor=PMAttributes.favInstructor
  }
  standUp(channel){
    return`${this.name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(subject){`${this.name} debugs ${Student.name}'s code on ${subject}'`
  }
}


//OBJECTS
const studentOne=new Student({
    name:'Carl',
    age:'18',
    location:'Experiment, Georgia',
    previousBackground:'no relevent',
    className:'WEB25',
    favSubjects:['HTML', 'CSS', 'JavaScript']
  })

const instructorOne=new Instructor({
    name:'Beatrice',
    age:'34',
    location:'Consequences, New Mexico',
    previousBackground:'lots of things',
    className:'WEB25',
    favSubjects:['HTML', 'CSS', 'JavaScript', 'Python'],
    specialty:'Java',
    favLanguage:'Java',
    catchPhrase:'Death is hereditary.'
  })

const pManagerOne=new ProjectManager({
    name:'Doris',
    age:'36',
    location:'Chicken, Alaska',
    previousBackground:'WebDev',
    className:'WEB25',
    favSubjects:['HTML', 'CSS', 'JavaScript', 'Python'],
    specialty:'React',
    favLanguage:'JavaScript',
    catchPhrase:'Eat well, stay fit, die anyway.',
    gradClassName:'WEB13',
    favInstructor:'Beatrice'
  })


console.log(instructorOne.demo('CSS'));
console.log(instructorOne.grade(studentOne, 'JavaScript'));
console.log(pManagerOne.speak());
console.log(studentOne.listsSubjects());
console.log(studentOne.PRAssignment('JavaScript IV'));
console.log(studentOne.sprintChallenge('JavaScript Fundamentals'));
console.log(pManagerOne.standUp('WEB25'));