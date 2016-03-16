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

EMAILS = %w(
  Wen@stack.com
  Liang@stack.com
)

28.times do
  EMAILS.unshift(Faker::Internet.email)
end

Team.all.each do |team|
  EMAILS.each do |email|
    User.create(
      password: "12345678",
      username: email,
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
  Channel.all.each do |channel|
    Message.create(
      sender_id: user.id,
      receivable_id: channel.id,
      receivable_type: "Channel",
      text: Faker::Hacker.say_something_smart
    )
  end
end




User.all.each do |user|
  other_users = User.all.select{ |other| other.id != user.id }
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
