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
team2 = Team.create(name: "Jan 2016")
team3 = Team.create(name: "Good JOB")
team1 = Team.create(name: "App Academy")
user1 = User.create(
  password: "GuestUser",
  username: "Guest@example.com",
  team_id: team1.id,
  is_admin: true
)

user2 = User.create(
  password: "GuestUser2",
  username: "Liang@example.com",
  team_id: team1.id,
  is_admin: true
)

user3 = User.create(
  password: "GuestUser3",
  username: "Devin@example.com",
  team_id: team1.id,
  is_admin: true
)

user4 = User.create(
  password: "wenliang",
  username: "Wen@stack.com",
  team_id: team1.id,
  is_admin: true
)


user1 = User.create(
  password: "GuestUser",
  username: "Guest@example.com",
  team_id: team2.id,
  is_admin: true
)

user2 = User.create(
  password: "GuestUser2",
  username: "Liang@example.com",
  team_id: team2.id,
  is_admin: true
)

user3 = User.create(
  password: "GuestUser3",
  username: "Devin@example.com",
  team_id: team2.id,
  is_admin: true
)

user4 = User.create(
  password: "wenliang",
  username: "Wen@stack.com",
  team_id: team2.id,
  is_admin: true
)

user1 = User.create(
  password: "GuestUser",
  username: "Guest@example.com",
  team_id: team3.id,
  is_admin: true
)

user2 = User.create(
  password: "GuestUser2",
  username: "Liang@example.com",
  team_id: team3.id,
  is_admin: true
)

user3 = User.create(
  password: "GuestUser3",
  username: "Devin@example.com",
  team_id: team3.id,
  is_admin: true
)

user4 = User.create(
  password: "wenliang",
  username: "Wen@stack.com",
  team_id: team3.id,
  is_admin: true
)


chan1 = Channel.create(team_id: team1.id, title:"Ruby")
chan11 = Channel.create(team_id: team1.id, title:"Rails")
chan2 = Channel.create(team_id: team2.id, title:"React")
chan22 = Channel.create(team_id: team2.id, title:"Flux")
chan3 = Channel.create(team_id: team3.id, title:"JavaScript")
chan33 = Channel.create(team_id: team3.id, title:"SQL")


message1 = Message.create(sender_id: user1.id, receivable_id: chan1.id, receivable_type: "Channel", text: "Working hard")
message2 = Message.create(sender_id: user1.id, receivable_id: chan11.id, receivable_type: "Channel", text: "Welcome!")
message3 = Message.create(sender_id: user1.id, receivable_id: chan2.id, receivable_type: "Channel", text: "Good Morning")
message4 = Message.create(sender_id: user1.id, receivable_id: chan22.id, receivable_type: "Channel", text: "Work, Play, Relax, Rest")
message5 = Message.create(sender_id: user1.id, receivable_id: chan3.id, receivable_type: "Channel", text: "Good Afternoon")
message6 = Message.create(sender_id: user1.id, receivable_id: chan33.id, receivable_type: "Channel", text: "Welcome to App Academy")
