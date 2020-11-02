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

# user_id: 28
user = User.creatr(
    first_name: 'Vladimir',
    last_name: 'Solovey',
    email: 'vladimir@gmail.com',
    password: '123123',
    location: 'NYC',
    description: 'Hello World!'
)

file = open("https://painterest-seeds.s3-us-west-1.amazonaws.com/profile_photos/bob_ross.jpg")
user.photo.attach(io: file, filename: "bob_ross.jpg")

pin1 = Pin.create!(title: 'Milking stool', description: 'poss option for steven''s renno', user_id: user.id, source_link: 'www.dwr.com')
file = open('https://active-storage-pinteriors-seeds.s3.amazonaws.com/pin1.jpeg')
pin1.photo.attach(io: file, filename: 'pin1.jpeg')

pin = Pin.create(
  title: "",
  description: "Abstract Art 1",
  url: "",
  user_id: 28
)

file = open("https://painterest-seeds.s3-us-west-1.amazonaws.com/abstract_art/AB00001.jpg")
pin.photo.attach(io: file, filename: "AB00001.jpg")