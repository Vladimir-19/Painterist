class Api::UsersController < ApplicationController
    
  
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      # redirect_to "api/users"
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    # @user = User.find(params[:id])
    @user = selected_user
    # render "api/users/show"
    # render :show
  end

  def index 
    @users = User.all
    render "api/users/index"
  end

  def edit
    @user = selected_user
    render "api/users/show"
  end

  def update
    # @user = User.find(params[:id])
    @user = selected_user
    
    if @user.update(edit_user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :age)
  end

   def edit_user_params
    params.require(:user).permit(:first_name, :last_name, :email, :description, :location, :photo)
  end

  def selected_user
    User.includes(:boards, :pins, :boards_pins).find(params[:id])
      # User.includes(:pins).find(params[:id])
  end
  # def profile_params
  #   params.require(:user).permit(:email, :first_name, :last_name, :gender)
  # end
end
