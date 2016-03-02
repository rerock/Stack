class Api::MessagesController < ApplicationController
  def index
    messages = Message.all.select { |chan| chan.receivable_id == params[:receivable_id].to_i }
    # render json: Message.all.includes(:messages).to_json(include: :messages)
    render json: messages.to_json
    # render json: Message.all.select{ |chan| chan.team_id == params[:message][:team_id]}.to_json
  end

  def create
    message = Message.new(message_params)
    if message.save
      Pusher.trigger('chat_channel', 'forward_message', {
        message: message
      })
      render json: message
    else
      render json: { errors: message.errors.full_messages }, status: 422
    end
  end

  def message_params
    params.require(:message).permit(:sender_id, :receivable_id, :receivable_type, :text)
  end
end
