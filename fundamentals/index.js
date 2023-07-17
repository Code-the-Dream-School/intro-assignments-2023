// data set
inventory = [
    {
        "candy": "Red Vines",
        "inStock": 180,
        "weeklyAverage": 200
    },
    {
        "candy": "Sour Gummy Bears",
        "inStock": 90,
        "weeklyAverage": 100
    },
    {
        "candy": "Whoppers",
        "inStock": 300,
        "weeklyAverage": 170
    },
    {
        "candy": "Jolly Ranchers",
        "inStock": 150,
        "weeklyAverage": 40
    }
]

/*

   Challenge #1: How many candy types are in the array?
   We want to know how many candy types we have in the inventory.

   Create a function called totalCandyTypes() that returns the number of candy types we have in the inventory array.
*/

// Solution: function to calculate the total number of candy types
function totalCandyTypes() {
    return inventory.length;
}

/*

    Challenge #2: How many candies are in stock?
    We want to know how many candies we have in stock.

    Create a function called totalCandiesInStock() that returns the total number of candies we have in stock.

*/

// Solution: function to calculate the total number of candies in stock
function totalCandiesInStock() {

    // declare a variable to store the total number of candies in stock
    let total = 0;

    // loop through the inventory array
    for (let i = 0; i < inventory.length; i++) {

        // add the number of candies in stock to the total
        total += inventory[i].inStock;
    }

    // return the total number of candies in stock
    return total;
}


/*

    Challenge #3: How many candies are in stock on average?
    We want to know how many candies we have in stock on average.
    
    Create a function called averageCandiesInStock() that returns the average number of candies we have in stock.
*/

// Solution: function to calculate the average number of candies in stock
function averageCandiesInStock() {

    // declare a variable to store the total number of candies in stock
    let total = 0;

    // loop through the inventory array
    for (let i = 0; i < inventory.length; i++) {

        // add the number of candies in stock to the total
        total += inventory[i].inStock;
    }

    // return the average number of candies in stock
    return total / inventory.length;
}

/*

    Challenge #4: Should we order more candy?
    We want to know if we should order more candy.

    Create a function called shouldWeOrderMoreCandy() that returns true if we have less than 200 candies in stock and false if we have more than 200 candies in stock.
*/

// Solution: function to determine if we should order more candy
function shouldWeOrderMoreCandy(inventory, name) {

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].candy == name) {
          return inventory[i].inStock < inventory[i].weeklyAverage;
        }
    }
    return false;
}
    
