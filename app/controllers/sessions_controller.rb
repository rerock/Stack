class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    team_id = params[:user][:team_id]
    @user = User.find_by_credentials(username, team_id, password)
    if @user
      login!(@user)
      redirect_to "/teams/#{team_id}/main"
    else
      flash[:errors] = ["Incorrect Credentials"]
      redirect_to "/teams/#{team_id}/login/"
    end
  end

  def destroy
    sign_out!
    redirect_to  "/teams/#{team_id}/login/"
  end

end
