function contains(obj, value) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (contains(obj[key], value)) {
                return true;
            }
        } 
        else if (obj[key] === value) {
            return true;
        }
    }
    return false;
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

console.log(contains(input, 'sachin')); 
console.log(contains(input, 50)); 
