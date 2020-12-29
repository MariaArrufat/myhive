//Coliving space profile:
class Hive {
    constructor (name, location, description) {
        this.name = name
        this.location = location
        this.description = description
        this.photos = []
        this.facilities = []
        this.bees = []
    }
    addPhoto (photo) {
        this.photos.push(photo);
    }
    addFacility (facility) {
        this.facilities.push(facility);
    }
    addBee (bee) {
        this.bees.push(bee);
    }
}
//Resident profile:
class Bee {
    constructor (name, age, bio) {
        this.name = name
        this.age = age
        this.bio = bio
        this.profilePic = "defaultPic.jpg"
        this.interests = []
    }
    addProfilePic (pic) {
        this.profilePic.push(pic);
    }
    addInterest (interest) {
        this.interests.push(interest);
    }
}
//Create profile for new Hive (coliving space):
function newHive (name, location, description) {
    return new Hive (name, location, description);
}
//Create profile for new Bee (coliving resident);
function newBee (name, age, bio) {
    return new Bee (name, age, bio);
}

console.log(newBee('Maria', 25, 'hello'));