# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding..."

puts "Seeding Users..."

User.create([{
    name: "Blake",
    email: "blake@gmail.com",
    password: "123"
},
{
    name: "Logan",
    email: "logan@gmail.com",
    password: "123"
},
{
    name: "Rae",
    email: "Rae@gmail.com",
    password: "123"
}])

puts "Seeding Campaigns..."

Campaign.create!([{
    name: "Ghosts of Saltmarsh",
    description: "A nautical-themed adventure centered around the town of Saltmarsh"
},
{
    name: "Descent into Avernus",
    description: "Have a Hells of a good time in the first layer of the nine Hells, Avernus, in an adventure where players can reshape the rulership of the plane permanently"
},
{
    name: "The Wild Beyond the Witchlight",
    description: "Attend the mysterious, traveling Witchlight Carnival; but beware, it hides entrances to the beautiful and dangerous realm of fairies."
}])

puts "Seeding Characters..."

Character.create!([{
    name: "George",
    image: "https://cdnb.artstation.com/p/assets/images/images/019/652/707/large/marisa-rani-lalwal-p.jpg?1564443295",
    user_id: 1,
    campaign_id: 1
},
{
    name: "Michael",
    image: "https://i.pinimg.com/236x/c4/d9/9d/c4d99d9143a2b9b9d2c17e32ee3dc627.jpg",
    user_id: 1,
    campaign_id: 2
},
{
    name: "Svik",
    image: "https://i.pinimg.com/736x/ce/b2/63/ceb2637761ddd58cb448c1da7e5ca2c8.jpg",
    campaign_id: 1,
    user_id: 2
},
{
    name: "Darla",
    image: "https://64.media.tumblr.com/5b73a7ab5291d617dfb668ff5e163c91/52366311bb4398eb-5a/s1280x1920/a497b18a4ba7b0d37473cc1f4349d2e35d4cb42c.png",
    campaign_id: 2,
    user_id: 3
}
])

puts "Seeding Abilities..."

Ability.create!([{
    strength: 16,
    dexterity: 14,
    constitution: 18,
    intelligence: 10,
    wisdom: 12,
    charisma: 8,
    character_id: 1
},
{
    strength: 8,
    dexterity: 14,
    constitution: 12,
    intelligence: 17,
    wisdom: 14,
    charisma: 10,
    character_id: 3
},
{
    strength: 14,
    dexterity: 16,
    constitution: 14,
    intelligence: 12,
    wisdom: 10,
    charisma: 16,
    character_id: 2
},
{
    strength: 14,
    dexterity: 12,
    constitution: 16,
    intelligence: 10,
    wisdom: 16,
    charisma: 14,
    character_id: 4
}])

puts "Seeding Character Classes..."

CharacterClass.create!([{
    name: "Fighter",
    character_id: 1
},
{
    name: "Sorcerer",
    character_id: 2
},
{
    name: "Wizard",
    character_id: 3
},
{
    name: "Cleric",
    character_id: 4

}])

puts "Seeding Races..."

Race.create!([{
    name: "Half-elf",
    character_id: 1
},
{
    name: "Human",
    character_id: 2
},
{
    name: "Gnome",
    character_id: 3
},
{
    name: "Half-orc",
    character_id: 4
}])

puts "Seeding Character Details..."

CharacterDetail.create!([{
    alignment: "Chaotic Good",
    faith: "Tempus",
    lifestyle: "Modest",
    character_id: 1
},
{
    alignment: "Neutral Good",
    faith: "Lathander",
    lifestyle: "Modest",
    character_id: 2
},
{
    alignment: "Chaotic Good",
    faith: "Tymora",
    lifestyle: "Modest",
    character_id: 3
},
{
    alignment: "Lawful Neutral",
    faith: "Kelemvor",
    lifestyle: "Modest",
    character_id: 4
}])

puts "Seeding Descriptions..."

Description.create!([{
    background: "Gladiator",
    alignment: "Chaotic Good",
    faith: "Tempus",
    lifestyle: "Modest",
    hair: "Gray-blue",
    skin: "Pale",
    eyes: "blue",
    height: "6'",
    weight: 200,
    age: 29,
    personality_traits: "Very serious, likes to protect others, can be aggressive",
    ideals: "Greatly values friendship, Hates goblins",
    bonds: "Michael is like a brother to George",
    flaws: "George picks fights with bad people that he probably could have avoided",
    organizations: "The Harpers",
    allies: "Michael, Svik",
    enemies: "The Great Gobo the goblin king",
    backstory: "George has always been a skilled fighter, but truly earned his reputation in the gladiator rings in Thay, before earning his freedom and traveling the world to right the injustices that he experienced and saw growing up.",
    other: "n/a",
    character_id: 1
},
{
    background: "Folk Hero",
    alignment: "Neutral Good",
    faith: "Lathander",
    lifestyle: "Modest",
    hair: "Brown",
    skin: "Tanned",
    eyes: "Green",
    height: "5'10",
    weight: 180,
    age: 31,
    personality_traits: "Fun-loving, Helps others whenever he can",
    ideals: "We are the change we want to see in the world",
    bonds: "Sees George as his brother by deeds, if not blood",
    flaws: "Wants to see the best in everyone, so is susceptible to lies and trickery",
    organizations: "The Harpers",
    allies: "George, Svik",
    enemies: "The Great Gobo the goblin king",
    backstory: "Michael grew up helping others, it was just what he did. He was blessed with the blood of dragons and used his sorcerous blood to do good deeds and quickly gained a reputation as a the person to help the commonfolk out of any troubles. The newly freed gladiator George was in need of a place to stay and was referred to Michael's home. They've been friends and adventurers together, ever since.",
    other: "n/a",
    character_id: 2
},
{
    background: "Entertainer",
    alignment: "Chaotic Good",
    faith: "Tymora",
    lifestyle: "Modest",
    hair: "Dark brown with a dashing mustache",
    skin: "Pale",
    eyes: "Gray",
    height: "2'10",
    weight: 55,
    age: 101,
    personality_traits: "Loves attention, Needs to be liked",
    ideals: "Being popular makes you powerful; Being a goodly adventurer is the best way to become a beloved hero",
    bonds: "By his measure, Michael and George are the best traveling companions Svik has ever had",
    flaws: "Svik can make a scene to get extra attention.",
    organizations: "The Harpers",
    allies: "George, Michael",
    enemies: "The Great Gobo the goblin king",
    backstory: "Svik was having a bit of a midlife crisis as he approached 100 years old, so left behind his lucerative position as a professor in a wizard's tower of Waterdeep to become a traveling magical entertainer. On the road he met the Harpers George and Michael, who have introduced Svik to using his flashy magic for good.",
    other: "n/a",
    character_id: 3
},
{
    background: "Outlander",
    alignment: "Lawful Neutral",
    faith: "Kelemvor",
    lifestyle: "Modest",
    hair: "Black, partly-shaved",
    skin: "Light green",
    eyes: "Hazel",
    height: "6'",
    weight: 155,
    age: 25,
    personality_traits: "Stoic, Darla has a quiet warmth to her that sets others at ease",
    ideals: "We all die, but it need not be a bad experience; I will help others transition to the next life.",
    bonds: "Darla has an orc father that she visits once a year in the mountains to share her treasures and thank him for being there for her whilst so many other orc fathers throughout history have chosen to be absent.",
    flaws: "Darla is thoughtful and patient, but this can make her slow to come to decisions",
    organizations: "The Harpers",
    allies: "Humgruff the friendly minotaur",
    enemies: "Selzckovak, the black dragon",
    backstory: "Darla had a relatively peaceful childhood, especially for a half-orc. Her mother and father loved and cared for her in a small mountain village. The mountains can be harsh, though, and the peoples can succumb to disease or the elements before help can arrive. In this world Kelemvor, the god of Death, helps to shephard the mountain folk to their rightful afterlives. Kelemvor teaches helping others and when it is their time, to ease them into the grave as peacefully as possible. Darla dedicated her life to these teachings and travels the land administering her aid in the form of divine magic granted to her by Kelemvor.",
    other: "n/a",
    character_id: 4
}])

  puts "Finished seeding!"