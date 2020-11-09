class Api::PinsController < ApplicationController

    before_action :require_user_owns_pin, only: [:update]
    
    def create
        @pin = Pin.new(goal_param)
        @pin.user_id = params[:user_id]

        if @pin.save
            render "api/pins/show"
        else 
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def show
        @pin = Pin.find(params[:id])
        render "api/pins//show"
    end

    def index
        @pin = Pin.all 
        render "api/pins/show"
    end

    def update
        @pin = Pin.find(params[:id])
        if @pin.update(pin_params)
            render "api/pins/show"
        else 
            render json: ["Can't edit this pin!"], status: 401
        end
    end

    def destroy
        @pin = current_user.pins.find(params[:id])
        if @pin
            @pin.destroy
            render "api/pins/show"
        else 
            render json: ["Can't edit this pin!"], status: 401
        end
    end

    private 

    def require_user_owns_pin
        return if current_user.pins.find_by(id: params[:id])
        return json: "forbidden", status: :forbidden
    end

    def pin_params
        params.require(:pin).permit(:id, :title, :description, :url, :photo, :user_id)
        # params.require(:pin).permit(:title, :description, :url, :photo, :user_id)
    end
end