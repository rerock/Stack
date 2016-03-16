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
  EMAILS << Faker::Internet.email
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
      text: Faker::StarWars.quote
    )
  end
end

#
# message1 = Message.create(sender_id: user1.id, receivable_id: chan1.id, receivable_type: "Channel", text: "Working hard")
# message2 = Message.create(sender_id: user1.id, receivable_id: chan11.id, receivable_type: "Channel", text: "Welcome!")
# message3 = Message.create(sender_id: user1.id, receivable_id: chan2.id, receivable_type: "Channel", text: "Good Morning")
# message4 = Message.create(sender_id: user1.id, receivable_id: chan22.id, receivable_type: "Channel", text: "Work, Play, Relax, Rest")
# message5 = Message.create(sender_id: user1.id, receivable_id: chan3.id, receivable_type: "Channel", text: "Good Afternoon")
# message6 = Message.create(sender_id: user1.id, receivable_id: chan33.id, receivable_type: "Channel", text: "Welcome to App Academy")
