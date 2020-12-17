json.partial! "api/users/user", user: @user

#json.partial! "api/boards/board", board: board
#json.pinIds board.pins.pluck(:id)
#json.partial! "api/boards_pins/board_pin", boardPin: boardPin
#json.partial! "api/pins/pin", pin: pin


