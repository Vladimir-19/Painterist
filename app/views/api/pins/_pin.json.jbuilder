json.extract! pin, :id, :title, :description, :url, :user_id
json.photo url_for(pin.photo) if pin.photo.attached? 
#it will not let to login back with demo user