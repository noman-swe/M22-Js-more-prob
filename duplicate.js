const names = ['abul', 'tabul', 'mabul', 'kabul', 'fabul', 'bulbul', 'babul', 'tabul', 'jorina', 'kabul', 'mabul'];

function removeDuplicate(names){
    /*for(let i = 0; i = names.length; i++){

    }*/

    const unique = [];
    /*for(let i = 0; i < names.length; i++){
        const element = names[i];
        console.log(element);
    }
    */
   for(const element of names){ //array theke value anar akta way "For Of loop"
       //console.log(element);
       if(unique.indexOf(element) == -1){
           unique.push(element);
       }
   }
   return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);