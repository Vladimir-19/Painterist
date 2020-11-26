json.partial! "api/users/user", user: @user

json.boardsPins do
  @user.boards_pins.each do |boardPin|
    json.set! boardPin.id do
      json.partial! "api/boards_pins/board_pin", boardPin: boardPin
    end
  end
end

json.pins do
  @user.pins.each do |pin|
    json.set! pin.id do
      json.partial! "api/pins/pin", pin: pin
    end
  end
end