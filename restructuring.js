// var name ='everest';
// var height=8848;


// var output=function () {
//     console.log(`mt.${this.name} is ${this.height} meteret`)
// }


// var advantureClimbing={name,height,output};

// //console.log(advantureClimbing);
// advantureClimbing.output();

var advantureClimbing={

     name :'everest',
     height:8848,
     output() {
        console.log(`mt.${this.name} is ${this.height} meteret`)
    }

};
advantureClimbing.output();
