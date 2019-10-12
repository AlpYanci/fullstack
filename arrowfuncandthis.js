/* 
    arrow func ve this keyword. dersi !! önemli this önemli ...
*/
// java scrpit te bir func oluşturuduğunuzda  global bir objenin parçası haline gelir
// this keyword unu kullandığınız zaman scopeların kapanması ile refere edilir.

// function sayHi() {
    
// }
// console.log(this);
// let nepal={
//     // add property;
//     mountains:  ['Everest','Fish Tail','Annapurna'], 
//     // add method
//     printWithDash:function () {
//         //console.log('inside printwithdasj',this);
//         setTimeout(function () {
//            // console.log(' inside settimout',this);
//            console.log(this.mountains.join(" - "))
            
//         },3000)
//     }

// }

let nepal={
    // add property;
    mountains:  ['Everest','Fish Tail','Annapurna'], 
    // add method
    printWithDash:function () {

        setTimeout( () => console.log(this.mountains.join(" - ")),3000)
    }

}

nepal.printWithDash();