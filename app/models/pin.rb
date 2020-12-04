class Pin < ApplicationRecord

    # validates :user_id, :photo, presence: true
        # validates :title, :user_id, presence: true
  validates :title, presence: { message: "Please enter a valid title" }

    belongs_to :user 

    # has_many :boards_pins,
    #     class_name: :BoardsPins,
    #     foreign_key: :pin_id,
    #     dependent: :destroy

    # has_many :boards,
    #     through: :boards_pins,
    #     source: :board

    # has_one_attached :photo
    has_one_attached :photo
  # api board pins routes needs a post and a delete 
  has_many :associated_boards,
    class_name: :BoardsPins,
    foreign_key: :pin_id,
    dependent: :destroy
    #a pin has many associations on the join pin board table. if the pin is destroyed. destroy the association between that pin and that board
  has_many :boards,
    through: :associated_boards,
    source: :board
  
end