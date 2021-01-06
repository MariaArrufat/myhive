
const Bee = require ('./bee');
const Hive = require ('./hive');

//Create profile for new Hive (coliving space):
const hiveOne = new Hive ('CoyotivHive', 'Berlin', 'very cool place');

//Create profile for new Bee (coliving resident):
const maria = new Bee ('Maria', 25, 'hello');

hiveOne.addFacility('toilet');
hiveOne.addBee(maria);

console.log(hiveOne);