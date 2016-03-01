class UsersController < ApplicationController
  def create
   @user = User.new(user_params)
   team_id = params[:user][:team_id]

   if @user.save
     login! @user
     redirect_to "/teams/#{team_id}/main"
   else
     flash[:errors] = @user.errors.full_messages
     redirect_to "/teams/#{team_id}/sign_up/"
   end
 end

 def new
   @user = User.new
   render :new
 end

 def index
   users = User.all
   # render json: Channel.all.includes(:messages).to_json(include: :messages)
   render json: users.to_json
   # render json: Channel.all.select{ |chan| chan.team_id == params[:user][:team_id]}.to_json
 end



 private

 def user_params
   params.require(:user).permit(:password, :username, :team_id)
 end

end
