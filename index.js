var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry", "lastName": "Potter", "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function findContactByFirstName(firstName) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === firstName) {
            return {
                firstName: contacts[i].firstName,
                lastName: contacts[i].lastName,
                number: contacts[i].number,
                likes: contacts[i].likes
            };
        }
    }
    return "Contact not found.";
}

var contactInfo = findContactByFirstName("Sherlock");
console.log(contactInfo);
