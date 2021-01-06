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

module.exports = Bee