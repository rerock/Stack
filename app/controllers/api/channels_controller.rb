class Api::ChannelsController < ApplicationController
  def index
    render json: Channel.all.includes(:messages).to_json(include: :messages)
  end

  def create
    channel = Channel.new(channel_params)
    if channel.save
      render json: channel
    else
      render json: { errors: channel.errors.full_messages }, status: 422
    end
  end

  def channel_params
    params.require(:channel).permit(:team_id, :title)
  end
end
