#@pins.each do |pin| 
    #json.set! pin.id do 
        #json.partial! "api/pins/pin", pin: pin 
    #end
#end

json.array! @pins do |pin|
    json.extract! pin, :id, :title
    json.photoUrl url_for(pin.photo)
    #json.partial!('pin', pin: pin)
end