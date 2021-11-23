const flowers = [
{
id:1,
color:"green",
species:"White Rose",
price:.90

},
{
    id:2,
    color:"red",
    species:"Red Tuilp",
    price:1.10
}
]



const addFlower = (flowerObject) => {
    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */

        // this will add the id property to the flowers array
    const lastIndex=flowers.length-1
    const currentLastFlower=flowers[lastIndex]
    const maxId=currentLastFlower.id
    const idForNewFlower=maxId+1

    flowerObject.id=idForNewFlower

    flowers.push(flowerObject)

}

    




const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code


    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */
   // this orders the flowers from the most expensives to the least expensives
        for (const flower of flowers){
            if(flower.price >=1.00){
                expensiveFlowers.push(flower)
            }
            }
         



    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

