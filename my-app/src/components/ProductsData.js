
const images = {
 weeding: require('../assets/wedding-photo.jpg'),
 graduation: require('../assets/graduation-photo.jpg'),
 birthday: require('../assets/birthday-photo.jpg'),
 artist: require('../assets/artist-photo.jpg'),
}

 const IMAGES = [
 {
  id: 1,
  img: `${images.weeding}`, 
  imageAlt:"wedding",
  startValue:"5.0",
  peopleVote:"6",
  info:"We know it's your special day and we want to make it more specia",
  price:"320$",
  openSpots: 0
 },
 {
  id: 2,
  img: `${images.graduation}`, 
  imageAlt:"graduation",
  startValue:"5.0",
  peopleVote:"6",
  info:"You did it!, and we want to celebrate it with beautiful memories.",
  price:"320$",
  openSpots: 1
 },
 {
  id: 3,
  img:`${images.birthday}`, 
  imageAlt:"birthday",
  startValue:"5.0",
  peopleVote:"6",
  info:"the birthday is the must special day for any person, for that reason we save this moment in a picture collection",
  price:"320$",
  openSpots: 1
 },
 {
  id: 4,
  img:`${images.artist}`, 
  imageAlt:"artist",
  startValue:"5.0",
  peopleVote:"6",
  info:"It doesn't matter if you don't have to celebrate, everyone has an artist inside that wants to come out",
  price:"320$",
  openSpots: 1
 }
]

export default IMAGES