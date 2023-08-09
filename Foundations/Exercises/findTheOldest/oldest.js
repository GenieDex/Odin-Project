const people = [
    {
        name: "Person 1",
        birth: 1940,
        death: 2003,
    },
    {
        name: "Person 2",
        birth: 2000,
        death: 2023,
    },
    {
        name: "Person 3",
        birth: 1999,
        death: 2023,
    },
    {
        name: "Person 4",
        birth: 1963,
        death: 2000,
    },
    {
        name: "Person 5",
        birth: 1943,
        death: 2020,
    }
]   

function findTheOldest(people){
    let oldest = "";
    let yearsLived;
    let mostYears = 0;
    for (i=0; i<people.length; i++){
        yearsLived=people[i].death - people[i].birth;
        if(yearsLived>mostYears){
            oldest = people[i].name;
        }
    }
    return oldest;
}
console.log(findTheOldest(people));