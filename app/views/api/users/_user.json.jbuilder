
json.extract! user, :id, :age, :username, :email, :location, :description
 json.firstName user.first_name
 json.lastName user.last_name 
json.photo url_for(user.photo) if user.photo.attached?
