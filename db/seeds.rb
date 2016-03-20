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


Team.all.each do |team|
  User.where(team_id: team.id).each do |user|
    Channel.where(team_id: team.id).each do |channel|
      Message.create(
        sender_id: user.id,
        receivable_id: channel.id,
        receivable_type: "Channel",
        text: Faker::Hacker.say_something_smart
      )
    end
  end
end


Team.all.each do |team|
  User.where(team_id: team.id).each do |user|
    other_users = User.where(team_id: team.id).select{ |other| other.id != user.id }
    other_users.each do |other_user|
      Message.create(
        sender_id: user.id,
        receivable_id: other_user.id,
        receivable_type: "User",
        text: Faker::StarWars.quote
      )
      Message.create(
        sender_id: other_user.id,
        receivable_id: user.id,
        receivable_type: "User",
        text: Faker::StarWars.quote
      )
    end
  end
end
