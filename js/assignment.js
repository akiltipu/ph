//Convert feet to mile.
function feetToMile(feet) {
    var mile = 0;
    if (feet < 0) {
        return `Negative length is not valid. Please enter a positive integer`;
    } else if (feet === 0) {
        return (mile = 0);
    } else {
        return (mile = feet / 5280);
    }
}

// Wood Calculator for furniture.
function woodCalculator(chairs, tables, beds) {
    if (chairs < 0 || tables < 0 || beds < 0) {
        //console.log("Furniture number can't be negative.");
        return `Furniture must be positive number.`;
    } else {
        var chairWoodAmount = chairs * 1; // 1 chair need 1 cubic feet wood
        var tableWoodAmount = tables * 3; // 1 table need 3 cubic feet wood
        var bedWoodAmount = beds * 5; // 1 bed nedd 5 cubic feet wood
    }
    // return total amount of wood
    return chairWoodAmount + tableWoodAmount + bedWoodAmount;
}

// Brick Calculator for count toatal brick
function brickCalculator(floor) {
    let totalBrick = 0;
    if (floor < 0) {
        return `Floor's number can't be negative. Enter a positive integer.`;
    } else if (floor === 0) {
        return (totalBrick = 0);
    } else {
        if (floor >= 1 && floor <= 10) {
            // 1-10 floors are 15 feets height and each feet need 1000 bricks.
            return (totalBrick = floor * 15 * 1000);
        } else if (floor >= 11 && floor <= 20) {
            // 11-20 floor's are 12 feets height and each feet need 1000 bricks.
            return (totalBrick = (floor - 10) * 12 * 1000 + 10 * 15 * 1000);
        } else {
            // Higher than 20th floor's are 10 feet height and each feet nedd 1000 bricks.
            return (totalBrick =
                (floor - 20) * 10 * 1000 + 10 * 15 * 1000 + 10 * 12 * 1000);
        }
    }
}

// Find tiny friend
function tinyFriend(friends) {
    let tinyElement = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if (tinyElement.length > friends[i].length) {
            tinyElement = friends[i];
        }
    }
    return tinyElement;
}

//Testing
console.log(feetToMile(5280));
console.log(feetToMile(4));
console.log(feetToMile(-4));
console.log(feetToMile(0));
console.log(feetToMile(99999999));

console.log(woodCalculator(5, 2, 8));
console.log(woodCalculator(-2, 4, 6));
console.log(woodCalculator(3, 0, 6));

console.log(brickCalculator(34));
console.log(brickCalculator(7));
console.log(brickCalculator(16));

console.log(tinyFriend(["Akil", "Rahim", "Tip", "Sakib Al Hasan", "No Name"]));
