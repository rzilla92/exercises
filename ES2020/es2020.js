// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n
// solution (ref MDN) - explicitly coerce one side to a BigInt or number.
const sum = BigInt(3) + BigInt(4) + 1n // result in 8n
    //or
const sum = 3 + 4 + Number(1n) // result in 8

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }

// andrei_pokemon && andrei_pokemon.raichu
    // => andrei_pokemon?.raichu
// will_pokemon && will_pokemon.pikachu && will_pokemon.pikachu.friend && will_pokemon.pikachu.friend.charizard
    // => will_pokemon?.pikachu?.friend?.charizard

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
    console.log ('fight!')
} else {
    console.log('walk away...')
}


// Exercise 4: What do these each output?

// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

console.log(false ?? 'hellooo') //false is not null/undefined => return false
console.log(null ?? 'hellooo')  // left hand is null => return "helloo"
console.log(null || 'hellooo')  // null unable to return true boolean => return "helloo"
console.log((false || null) ?? 'hellooo') // false||null returns null => return "helloo"
console.log(null ?? (false || 'hellooo')) // false||'hellooo' returns 'hellooo' => return "helloo"