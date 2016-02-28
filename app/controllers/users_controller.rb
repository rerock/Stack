class UsersController < ApplicationController
  def create
   @user = User.new(user_params)
   team_id = team_id = params[:user][:team_id]

   if @user.save
     login! @user
     redirect_to "/api/teams/#{team_id}"
   else
     flash[:errors] = @user.errors.full_messages
     redirect_to "/teams/#{team_id}/sign_up"
   end
 end

 def new
   @user = User.new
   render :new
 end

 private

 def user_params
   params.require(:user).permit(:password, :username, :team_id)
 end

end
