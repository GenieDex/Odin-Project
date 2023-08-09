const people = [
    {
        name: " ",
        birth: 1,
        death: 1,
    },
    {
        name: " ",
        birth: 1,
        death: 1,
    },
    {
        name: " ",
        birth: 1,
        death: 1,
    },
    {
        name: " ",
        birth: 1,
        death: 1,
    },
    {
        name: " ",
        birth: 1,
        death: 1,
    }
]   

function findTheOldest(){
    let oldest = "";
    let daysLived;
    for (i=0; i<people.length; i++){
        daysLived = people[i.death]-people[i].birth;
        if (people[(i+1).death]-people[i].birth>daysLived){
            oldest = people[i].name;
        }else{
            oldest = people[0].name
        }
        return oldest;
    }
    console.log(findTheOldest());
}
