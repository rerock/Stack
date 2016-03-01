# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Team.delete_all
User.delete_all
Channel.delete_all
Message.delete_all
team1 = Team.create(name: "Hello")
team2 = Team.create(name: "Jan 2016")
team3 = Team.create(name: "Good JOB")
user1 = User.create(
  password: "GuestUser",
  username: "GuestUser@example.com",
  team_id: team1.id,
  is_admin: true
)

user2 = User.create(
  password: "GuestUser2",
  username: "GuestUser2@example.com",
  team_id: team1.id,
  is_admin: true
)

user3 = User.create(
  password: "GuestUser3",
  username: "GuestUser3@example.com",
  team_id: team1.id,
  is_admin: true
)

user4 = User.create(
  password: "GuestUser4",
  username: "GuestUser4@example.com",
  team_id: team1.id,
  is_admin: true
)

user5 = User.create(
  password: "GuestUser",
  username: "GuestUser@example.com",
  team_id: team2.id,
  is_admin: true
)
user6 = User.create(
  password: "GuestUser",
  username: "GuestUser@example.com",
  team_id: team3.id,
  is_admin: true
)

chan1 = Channel.create(team_id: team1.id, title:"yolo1")
chan11 = Channel.create(team_id: team1.id, title:"yolo11")
chan2 = Channel.create(team_id: team2.id, title:"yolo2")
chan22 = Channel.create(team_id: team2.id, title:"yolo22")
chan3 = Channel.create(team_id: team3.id, title:"yolo3")
chan33 = Channel.create(team_id: team3.id, title:"yolo33")


message1 = Message.create(sender_id: user1.id, receivable_id: chan1.id, receivable_type: "Channel", text: "add oil")
