function theArchitect(input) {
    let theArchitect = input[0];
    let projects = Number(input[1]);
    let Time = 3 * projects;
    console.log (`The architect ${theArchitect} will need ${Time} hours to complete ${projects} project/s.`);

}
theArchitect(["George", 7])