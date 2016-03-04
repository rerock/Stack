require 'pusher'

Pusher.app_id = '184370'
Pusher.key = '112508624b4e735a4749'
Pusher.secret = 'fef4de8157a5a59e5d5e'
Pusher.logger = Rails.logger
Pusher.encrypted = true

class Api::ChannelsController < ApplicationController
  def index
    channels = Channel.all.select { |chan| chan.team_id == params[:team_id].to_i }
    # render json: Channel.all.includes(:messages).to_json(include: :messages)
    render json: channels.to_json
    # render json: Channel.all.select{ |chan| chan.team_id == params[:channel][:team_id]}.to_json
  end



  def create
    channel = Channel.new(channel_params)
    if channel.save
      Pusher.trigger('my_channels', 'new_channel', channel.as_json)
      render json: channel
    else
      render json: { errors: channel.errors.full_messages }, status: 422
    end
  end

  def channel_params
    params.require(:channel).permit(:team_id, :title)
  end
end
