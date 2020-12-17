    json.partial! "api/boards/board", board: board


 #@boards.each do |board|
  #json.set! board.id do 
    #json.extract! board, :id, :title, :description, :secret
    #json.userId board.user_id
    #json.pinIds board.pin_ids
    #json.pins board.pins
    #end
#end