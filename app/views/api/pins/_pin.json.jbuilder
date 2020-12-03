#json.extract! pin, :id, :title, :description, :url, :user_id
#json.photo url_for(pin.photo) if pin.photo.attached? 
#json.photo url_for(pin.photo)
#it will not let to login back with demo user
json.id pin.id
json.title pin.title
json.description pin.description.josn
json.url pin.url
json.userId pin.user_id
json.photoUrl url_for(pin.photo)