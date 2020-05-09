// Objects and JSON

const person = {
    name: {
        firstname: "John",
        lastName: "Doe",
    },    
    age: 50,

    fullName: () => {
        return this.firstname + " " + this.lastName;
    },

    returnThis: function () {
        return this;
    }
};

// non enumerable properties
let ob = {
    a: 1,
    b: 2
};

ob.c = 3;
Object.defineProperty(ob, 'd', {
    value: 4,
    enumerable: false
});

for (let key in ob) {
    console.log(ob[key]);
}

// non-writable properties
let obx = {
    a: 1
};

Object.defineProperty(obx, 'B', {
    value: 2,
    writable: false
});

Object.freeze(person);


let course = {
    name: 'JS core',
    hall: 'Open Source'
};

let keys = Object.keys(course);
let values = Object.values(course);

if (course.hasOwnProperty('name')) {
    console.log(course.name);
}

if (values.includes('JS Core')) {
    console.log("Found 'JS Core' value ");
}

// for (const key in course) {
//     console.log(`course.${key} = ${course[key]}`);
// }

for (const key of Object.keys(course)) {
    console.log(`course.${key} = ${course[key]}`);
}

for (const val of Object.values(course)) {
    console.log(val);
}













