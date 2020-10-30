# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
Board.destroy_all
Pin.destroy_all
BoardPins.destroy_all

user = User.creatr(
    email: 'vladimir.gmail.com',
    first_name: 'Vladimir',
    last_name: 'Solovey',
    password: '123123',
    location: 'NYC',
    description: 'Hello World!'
)

file = open("https://painterest-seeds.s3-us-west-1.amazonaws.com/profile_photos/bob_ross.jpg")
user.photo.attach(io: file, filename: "bob_ross.jpg")
