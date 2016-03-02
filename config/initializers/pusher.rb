require 'pusher'

# Pusher.app_id = '184370'
# Pusher.key = '112508624b4e735a4749'
# Pusher.secret = 'fef4de8157a5a59e5d5e'
# Pusher.logger = Rails.logger
# Pusher.encrypted = true

pusher_client = Pusher.new(
  app_id: '184370',
  key: '112508624b4e735a4749',
  secret: 'fef4de8157a5a59e5d5e'
)
