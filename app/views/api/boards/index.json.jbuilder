    #json.partial! "api/boards/board", board: board
json.array!(@boards) do |board|
  json.partial!('board', board: board)
end


 #@boards.each do |board|
  #json.set! board.id do 
    #json.extract! board, :id, :title, :description, :secret
    #json.userId board.user_id
    #json.pinIds board.pin_ids
    #json.pins board.pins
    #end
#end