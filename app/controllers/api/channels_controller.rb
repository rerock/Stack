class Api::ChannelsController < ApplicationController
  def index
    channels = Channel.all.select { |chan| chan.team_id == params[:team_id].to_i }
    # debugger
    # render json: Channel.all.includes(:messages).to_json(include: :messages)
    render json: channels.to_json
    # render json: Channel.all.select{ |chan| chan.team_id == params[:channel][:team_id]}.to_json
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
