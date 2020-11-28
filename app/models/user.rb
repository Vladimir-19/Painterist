class User < ApplicationRecord

  validates :email, :age, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}
  
  validates :first_name, :last_name, length: { maximum: 30 }
  validates :location, length: { maximum: 50 }

  

  after_initialize :ensure_session_token  #:parse_email

  attr_reader :password 

  has_one_attached :photo
  has_many :boards
  has_many :pins
  has_many :boards_pins,
    through: :boards,
    source: :boards_pins

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64(64)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.base64(64)
  end

  # def parse_email
  #   self.email ||= self.email.split("@")[0]
  # end

end