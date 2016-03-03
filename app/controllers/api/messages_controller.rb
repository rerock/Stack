require 'pusher'

Pusher.app_id = '184370'
Pusher.key = '112508624b4e735a4749'
Pusher.secret = 'fef4de8157a5a59e5d5e'
Pusher.logger = Rails.logger
Pusher.encrypted = true

class Api::MessagesController < ApplicationController
  def index
    messages=[]
    if params[:receivable_type] == 'Channel'
      messages = Message.all.select { |msg| (msg.receivable_type == 'Channel') && (msg.receivable_id == params[:receivable_id].to_i)}
    elsif params[:receivable_type] == 'User'
     messages = Message.all.select { |msg|((msg.receivable_type == 'User')&& (((msg.receivable_id == params[:receivable_id].to_i)&& (msg.sender_id == params[:current_user_id].to_i))||((msg.receivable_id == params[:current_user_id].to_i)&& (msg.sender_id == params[:receivable_id].to_i))))}
    else
      p('invalid receivable_type message_contoller')
    end
    user = User.find_by_id(params[:current_user_id])
    user.last_receivable_id = params[:receivable_id].to_i
    user.last_receivable_type = params[:receivable_type]
    user.save
    render json: messages.to_json
  end

  def create
    message = Message.new(message_params)
    if message.save
      Pusher.trigger('chat_channel', 'forward_message', message.as_json)
      render json: message
    else
      render json: { errors: message.errors.full_messages }, status: 422
    end
  end

  def message_params
    params.require(:message).permit(:sender_id, :receivable_id, :receivable_type, :text)
  end
end
