#json.partial! "api/users/user", user: @user
                        #json.partial! "api/boards/board", board: board
                    # json.pinIds board.pins.pluck(:id)
                    # json.partial! "api/boards_pins/board_pin", boardPin: boardPin
                        #json.partial! "api/pins/pin", pin: pin
#json.user do
  # json.extract! (@user, :id, :username, :description, :profile_picture)
 # json.id @user['id']
 # json.username @user['username']
 # json.description @user['description']
 # json.profile_picture @user['profile_picture']
  #json.is_following @is_following
  #json.owner @owner
 # json.pins @pins
 # json.boards @boards
  #json.followed_by @followed_by
  #json.following @following
#end
