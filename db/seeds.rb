# Team.delete_all
# User.delete_all
# Channel.delete_all
# Message.delete_all

TEAMS = %w(
  Uber
  Slack
  Zenefits
)

TEAMS.each do |team|
  Team.create(name: team)
end

Team.all.each do |team|
  30.times do
    User.create(
      password: "12345678",
      username: Faker::Internet.email,
      team_id: team.id,
      is_admin: true
    )
  end
end

CHANNELS = %w(
  administration
  analytics
  engineering
  finance
  HR
  marketing
  production
  sales
)

Team.all.each do |team|
  CHANNELS.each do |chan|
    Channel.create(
      team_id: team.id,
      title: chan
    )
  end
end

User.all.each do |user|
  team_id = user.team_id
  channel_id = Channel.where(team_id: team_id, title:"administration")[0].id
  user.update!(last_receivable_type: "Channel")
  user.update!(last_receivable_id: channel_id)
end


TEXT = %w(
  dog
  code
  boss
  hacker
  working\ out
  computer\ working
  frustrated\ why
  cat\ workplace
  yes
  binary
  selection\ sort
  recursion
  merge\ sort
  insertion\ sort
  bowling
  crazy\ cat
  music
  testing
  off-by-one
  vertices
)

URL = %w(
  http://media4.giphy.com/media/Ki2GJjJTlLK2k/giphy.gif
  http://media1.giphy.com/media/A06UFEx8jxEwU/giphy.gif
  http://media2.giphy.com/media/YwpylUojkfOZa/giphy.gif
  http://media4.giphy.com/media/ZHlGzvZb130nm/giphy.gif
  http://media2.giphy.com/media/xThuWwRYOZdfcODqVy/giphy.gif
  http://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif
  http://media2.giphy.com/media/LAFShX32UwUj6/giphy.gif
  http://media2.giphy.com/media/LHZyixOnHwDDy/giphy.gif
  http://media4.giphy.com/media/yqvZOIcgo4YI8/giphy.gif
  http://media3.giphy.com/media/zUcie4crEx0wE/giphy.gif
  http://media0.giphy.com/media/eUo2LyzAqeddS/giphy.gif
  http://media1.giphy.com/media/iThaM3NlpjH0Y/giphy.gif
  http://media3.giphy.com/media/cPQKPK5OushA4/giphy.gif
  http://media4.giphy.com/media/YpfoyGrmsfjLa/giphy.gif
  http://media2.giphy.com/media/j3N408mLpIXWU/giphy.gif
  http://media1.giphy.com/media/OU7akB4CMwg0/giphy.gif
  http://media0.giphy.com/media/26FPLgDJm8kZV4rEk/giphy.gif
  http://media1.giphy.com/media/Zp3dDTwtkKKU8/giphy.gif
  http://media1.giphy.com/media/OrNVu6wBe7uuY/giphy.gif
  http://media3.giphy.com/media/XCQ4DTzQfr7xe/giphy.gif
)

Team.all.each do |team|
  Channel.where(team_id: team.id).each do |channel|
    # DATE = []
    # 50.times do
    #   DATE << Faker::Time.between(2.days.ago, Time.now, :all)
    # end
    # DATE.sort!
    User.where(team_id: team.id).each do |user|
      if user.id % 5 == 0
        Message.create(
          sender_id: user.id,
          receivable_id: channel.id,
          receivable_type: "Channel",
          text: Faker::Hacker.say_something_smart
          # created_at: DATE.shift
        )
      end
      if user.id % 3 == 0
        Message.create(
          sender_id: user.id,
          receivable_id: channel.id,
          receivable_type: "Channel",
          text: "/giphy "+TEXT[user.id % 10 +channel.id % 10],
          img_url: URL[user.id % 10 +channel.id % 10]
          # created_at: DATE.shift
        )
      end
    end
  end
end


Team.all.each do |team|
  # DATE = []
  # 200.times do
  #   DATE << Faker::Time.between(2.days.ago, Time.now, :all)
  # end
  # DATE.sort!

  User.where(team_id: team.id).each do |user|
    # other_users = User.where(team_id: team.id).select{ |other| other.id != user.id }
    other_users = User.where(team_id: team.id)
    other_users.each do |other_user|
      Message.create(
        sender_id: other_user.id,
        receivable_id: user.id,
        receivable_type: "User",
        text: Faker::StarWars.quote
        # created_at: DATE.shift
      )
      if other_user.id % 3 == 0
        random = rand(11)
        Message.create(
          sender_id: other_user.id,
          receivable_id: user.id,
          receivable_type: "User",
          text: "/giphy "+TEXT[random],
          img_url: URL[random]
          # created_at: DATE.shift
        )
      end
    end
  end
end
