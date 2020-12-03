class Api::BoardsPinsController < ApplicationController

    before_action :require_logged_in

#     def create
#         @boardPin = BoardsPins.new(boardPin_params)
#         if @boardPin.save
#             render 'api/boards_pins/show'
#         else
#             render json: @boardPin.errors.full_messages, status: 422
#         end
#     end

#     def index 
#         @boardsPins = BoardsPins.all 
#         render 'api/boards_pins/index'
#     end

#     def destroy
#         @boardPin = current_user.boards_pins.find(params[:id])
#         if @boardPin
#             @boardPin.destroy
#             render 'api/boards_pins/show'
#         else
#             render json: @boardPin.errors.full_messages, status: 401
#         end
#     end

#     private
#     def boardPin_params
#         params.require(:boardPin).permit(:board_id, :pin_id)
#     end
# end

def create
    @boardPin = BoardsPins.new(boardPin_params)
    if @boardPin.save
      # render 'api/boards_pins/show'
      @board = Board.find(@boardPin.board_id)
      render "api/boards/show"
    else
      render json: @boardPin.errors.full_messages, status: 422
    end
  end

  # def index
  #   @boardsPins = BoardsPins.all
  #   render 'api/boards_pins/index'
  # end

  def destroy
    # @boardPin = current_user.boards_pins.find(params[:id])
      @boardPin = BoardsPins.find_by_credentials(params[:pin_id], params[:board_id])

    if @boardPin
      @boardPin.destroy
      render 'api/boards_pins/show'
    else
      render json: @boardPin.errors.full_messages, status: 401
    end
  end

  private
  def boardPin_params
    params.require(:boardPin).permit(:board_id, :pin_id)
    # params.permit(:baord_id, :pin_id)
  end

end
