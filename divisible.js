for (let i = 0; i <= 50; i++ ){
    if ( i % 3 == 0 && i % 5 == 0){
        console.log('YoYo');
    }
    
    else if(i % 5 == 0){
        console.log('divisible by 5');
    }

    else if(i % 3 == 0){
        console.log('fuu');
    }

    else {
        console.log(i);
    }
}
