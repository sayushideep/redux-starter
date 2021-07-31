const person = {
    name: 'John',
    address: {
        country: 'India',
        city: 'Lucknow'
    }
};
// const updated = Object.assign({}, person, { name: 'Bob' });
const updated = {
    ...person, name: 'Bob', address: {
        ...person.address, city: 'Hyderabad'
    }
};
//ShallowCopy
//updated.address.city = "Hyderabad";
//Both person and updated have same object address in the memory, so if we apply 
//change address on one reference it gets applied to another reference
//In order to resolve this problem, we do deep copy
console.log(person);

const numbers = [1, 2, 3];

//Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added);

//Remove

const removed = numbers.filter(n => n != 2);
console.log(removed);

//Updating
const updated = numbers.map(n => n === 2 ? 20 : n);
console.log(updated);