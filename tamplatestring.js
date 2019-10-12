/* template string dersi */
let fname='alp';
let lname='yanci';
/* propmt() message ile text alma alma icin 
örneğin kullanıcıaan yaşını girmesini istedik ve kutucuğa yazmasını söyledik
propt('yaşınızı giriniz');
promptlar ile aletler aynı gibi...
*/
let age=prompt('guess Alps age..');

// old way
// let result=fname + ' '+ lname + '' + age+ ' years old';
// alert(result);

//using tamplate string
let result = `${fname} ${lname} is ${age} years old`;
alert(result);