class Board < ApplicationRecord 

    validate :title, presence: { message: "Don't forget to name your board!"}
    validate :secret, :inclusion => { :in => [true, false]}
    validate :user_id, presence: true

    belongs_to :user 

    has_many :boards_pins,
    class_name: BoardsPins,
    foreign_key: :board_id,
    dependent: :destroy

    has_many :pins,
    through: :boards_pins,
    source: :pin,
    dependent: :destroy

    
end