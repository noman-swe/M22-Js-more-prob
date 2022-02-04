function animalCount(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if(miles <= 10 ){
        const count = miles * animalDensityFirst10Miles;
        return count;
    }

    else if( miles * 20){
        const fistDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
        const totalAnimals = fistDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else{
        const fistDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const restDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = fistDenseAnimals + secondDenseAnimals + restDenseAnimals;
        return totalAnimals;
    }
}
const animals = animalCount(35);
console.log(animals);