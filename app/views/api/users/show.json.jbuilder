#json.partial! "api/users/user", user: @user



json.users do
  json.set! @user.id do
    json.partial! "api/users/user", user: @user
    json.boardIds @user.boards.pluck(:id)
    # json.pinIds @user.pins.pluck(:id)
  end
end