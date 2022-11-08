class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :create]

    # GET /users
    def index
        users = User.all
        render json: users, status: :ok
    end

    # GET /users/:id
    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "User not found"}, status: :not_found
        end
    end

    # POST /users
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end
