@users.each do |user|
  json.set! user.id do # ERROR id something 
    json.partial! "api/users/user", user: @user
  end
end