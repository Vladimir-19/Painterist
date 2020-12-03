#json.extract! user, :id, :email, :username, :age, :location, :description
 #json.firstName user.first_name
 #json.lastName user.last_name 
#json.photo url_for(user.photo) if user.photo.attached?

#json.extract! user, :id, :first_name, :last_name, :email, :location, :description, :pins, :boards
#json.extract! user, :id, :first_name, :last_name, :email, :location, :description, :pins, :boards

# NOT MY
 #json.user user.id
 #json.firstName user.first_name
 #json.lastName user.last_name 

json.photo url_for(user.photo) if user.photo.attached?
