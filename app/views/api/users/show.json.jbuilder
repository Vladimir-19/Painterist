json.partial! "api/users/user", user: @user



json.pins do 
    @user.pins.each do |pin| 
        json.set! pin.id do
            json.partial! "api/pins/pin", pin: pin 
        end 
    end
end