const employee={
    ename: "Gitika",
    eage: "35",
    eaddress:"Ghaziabad",
    planguage:[{
        lang1: "java",
        lang2: "Python"
    },
    {
        database1:"Oracle",
        database2:"SQL"
    }]

}
employee.company="Infosys"; //insertion
//console.log(employee.planguage[0].lang2);

// employee.planguage[1].database1="MongoDB"

delete employee.eage;
console.log(employee)

