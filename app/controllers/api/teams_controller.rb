class Api::TeamsController < ApplicationController

  def create
    @team = Team.new(name: params[:team][:name])
    @team.save

    render json: @team
  end

  def index
    @teams = Team.all.sort_by { |team| team.name }
    render json: @teams
  end

  def show
    @team = Team.find_by_id(params[:id])

    render json: @team
  end

end
