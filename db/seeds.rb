TEAMS = %w(
  Uber
  Slack
  Zenefits
)

TEAMS.each do |team|
  Team.create(name: team)
end

Team.all.each do |team|
  4.times do
    User.create(
      password: "12345678",
      username: Faker::Internet.email,
      team_id: team.id,
      is_admin: true,
      avatar_url: Faker::Avatar.image
    )
  end
end

CHANNELS = %w(
  Analytics
  Engineering
  HR
  Production
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
  channel_id = Channel.where(team_id: team_id, title:"HR")[0].id
  user.update!(last_receivable_type: "Channel")
  user.update!(last_receivable_id: channel_id)
end


TEXT = %w(
  vertices
  binary
  selection\ sort
  dog
)

URL = %w(
  http://media3.giphy.com/media/XCQ4DTzQfr7xe/giphy.gif
  http://media3.giphy.com/media/zUcie4crEx0wE/giphy.gif
  http://media0.giphy.com/media/eUo2LyzAqeddS/giphy.gif
  http://media4.giphy.com/media/Ki2GJjJTlLK2k/giphy.gif
)

Team.all.each do |team|
  Channel.where(team_id: team.id).each do |channel|
    # DATE = []
    # 50.times do
    #   DATE << Faker::Time.between(2.days.ago, Time.now, :all)
    # end
    # DATE.sort!
    User.where(team_id: team.id).each do |user|
      if user.id % 4 == 0
        Message.create(
          sender_id: user.id,
          receivable_id: channel.id,
          receivable_type: "Channel",
          text: "/giphy "+TEXT[channel.id% 4],
          img_url: URL[channel.id% 4]
          # created_at: DATE.shift
        )
      elsif user.id % 2 == 0
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
        text: "/vote Arrays Records Pointers None"
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
        random = rand(4)
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
