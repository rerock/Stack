class Api::UtilsController < ApplicationController

  def search
    @search_results = PgSearch.multisearch(params[:query]).last(params[:limit].to_i)
    team_id = (params[:team_id]).to_i
    @search_results = @search_results.select do |message|
      message_id = message.searchable_id
      user = User.find_by_id(Message.find_by_id(message_id).sender_id)
      user.team_id == team_id
    end

  end

end
