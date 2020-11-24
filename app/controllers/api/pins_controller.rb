class Api::PinsController < ApplicationController

    before_action :require_user_owns_pin, only: [:update]
    
    def create
        @pin = Pin.new(pin_params)
        @pin.user_id = current_user.id

        if @pin.save
            render "api/pins/show"
        else 
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def show
        @pin = Pin.find(params[:id])
        # render "api/pins//show"
        return :show
    end

    def index
        @pins = Pin.all 
        render "api/pins/show"
    end

    def update
        # @pin = Pin.find(params[:id])
        @pin = current_user.pins.find(params[:id])
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
        render json: "forbidden", status: :forbidden
    end

    def pin_params
        # params.require(:pin).permit(:id, :title, :description, :url, :photo, :user_id)
        params.require(:pin).permit(:id, :title, :photo, :user_id)

    end
end