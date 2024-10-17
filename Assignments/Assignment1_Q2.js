function findEmptyArrayKeys(obj) {
    let emptyArrayKeys = [];

    // Loop through each key in the object
    for (let key in obj) {
        // If the value is an empty array, add the key to the result
        if (Array.isArray(obj[key]) && obj[key].length === 0) {
            emptyArrayKeys.push(key);
        } 
        // If the value is an object, recursively search inside it
        else if (typeof obj[key] === 'object' && obj[key] !== null) {
            emptyArrayKeys = emptyArrayKeys.concat(findEmptyArrayKeys(obj[key]));
        }
    }
    return emptyArrayKeys;
}

let input = {
    data: {
        info: {
            moreData: {
                b: {
                    c: {
                        d: {
                            e: 50,
                            f: [],
                            cars: ['tata', 'honda'],
                            g: []
                        }
                    }
                }
            }
        }
    }
};

console.log(findEmptyArrayKeys(input)); // Output: ['f', 'g']
