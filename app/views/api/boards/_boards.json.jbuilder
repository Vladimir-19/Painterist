json.extract! board, :id, :title, :description, :secret, :user_id

#json.id board.id
#json.title. board.title
#json.description board.description
#json.secret board.secret
#json.user_id board.user_id

#json.extract!(
  #board,
  #:id, :title, :description, :user)
  
  #json.pins do
    #board.pins.each do |pin|
      #json.set! pin.id do
        #json.partial! 'api/pins/pin', pin: pin
      #end
    #end
  #end