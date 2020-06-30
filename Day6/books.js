var library = [
    {
        title: "Javascript",
        price: 700,
        readers : [
            {
                name: "person1",
                count : 300
            },
            {
                name: "person2",
                count : 300
            }
        ],
        author : {
            name : "Raj",
            age: 40
        }
    },
    {
        title : "nodejs",
        price : 300,
        readers: [],
        author: {
            name: "Raj",
            age: 40
        }
    }
]
console.log(library[0].readers[0])
library[0].readers[0].count = 400;
console.log(library[0].readers[0])

console.log(library[0])
library[0].author.email = "email1.gmail.com";
library[1].author.email = "email2.gmail.com";
console.log(library[0])

console.log(library[1].readers[0])
library[1].readers.push({name: "person3", count : 550})
console.log(library[1].readers[0])

console.log(library[2]);
library.push(
    {
        title: "SQL",
        price: 400,
        readers: [],
        author: {
            name: "Ramesh",
            age: 80
        }
    }
)

console.log(library[2]);
console.log(typeof(library[1].author.age));
