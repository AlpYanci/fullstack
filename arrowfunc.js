// e ile arrow func yazma gelmiş. 
// arrow fun diffret then regular func. 
// first regular funck we will write ve daha sonra arrow func a çevirmeye çalışcaz.

// function gretting(message) {
//     return alert(`${message} everyone !`); 
// }
// gretting("good afternoon");
// let gretting =(message)=> alert(`${message} everyone !`); 
// burdaki =(message) parantezleri içindeki param 1 tane ise paranteze gerek yok ama birden fazla ise () içine yazmalı ve virgülle ayırmalıyız.
//let gretting =(message,two,tre)=> alert(`${message} everyone !`); 
// ayrıca let func ları return istemez!
// let gretting =(message)=> alert(`${message} everyone !`); 
// gretting("good afternoon");

// eğer tek param olan bir şey olsaydı zaten bind etmeye gerkekalmazdı ve func aşağıdaki gibi olurdu.
let gretting=()=> alert('hello everyone!');
gretting();


// let createblog=(title,body)=>{
//     if (!title) {
//         throw new Error('A title is required');
        
//     }
//     if (!body) {
//         throw new Error('A body is required');
//     }
//     return alert(`${title} ~ ${body}`);
// };

// createblog('blogtitle','blogbody');