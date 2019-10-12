// let thingsToDo={
//     morning:"exercise",
//     afternoon:"work",
//     evening:"code",
//     night:["sleep","deream"]
// }
// let{morning,afternoon,night}=thingsToDo;

// console.log(morning,' - ',afternoon,' - ',night);

// let uniStudent = student=>{
//     let{name,university}=student;
//     console.log(`${name} from ${university}`);
// }
// uniStudent({
//     name:'alp',
//     university:'istanbul Kultur University'
// })

let uniStudent =({name,university})=>{ 
    console.log(`${name} from ${university}`);
}
uniStudent({
    name:'alp',
    university:'istanbul Kultur University'
})