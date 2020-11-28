#@users.each do |user|
  #json.set! user.id do # ERROR id somehing 
    json.partial! "api/users/user", user: @user
  #end
#end