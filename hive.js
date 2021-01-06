//Coliving house profile:
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

module.exports = Hive