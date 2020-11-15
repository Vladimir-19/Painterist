class Api::BoardsController < ApplicationController 

    before_action :require_logged_in

    def create
        @board = Bpard.new(board_params)
        # @board.user_id = params[:user_id]
        @board.user_id = current_user.id

        if @board.save
            render "api/boards/show"            
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def show
        @board = Board.includes(:pins).find(params[:id]])
        render "api/boards/show"
    end

    def index 
        @boards = Board.all.includes(:pins)
        render "api/boards/index"
    end

    def update
        # @board = Board.find(params[:id])
        @board = current_user.boards.find(params[:id])

        if @board.update(board_params)
            render "api/boards/show"
        else 
            render json: ["Can't edit this pin!"], status: 401
        end
    end

    def destroy 
        @board = current_user.boards.find(params[:id])
        if @board 
            @board.destroy
            render "api/boards/show"
        else 
            render json: ["Can't edit this pin!"], status: 401
        end
    end

    private
    def board_params
        params.require(:board).permit(:title, :description, :secret, :user_id)
    end
end