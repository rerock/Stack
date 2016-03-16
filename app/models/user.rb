class User < ActiveRecord::Base
  EMAIL_REGEX = /^([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})$/i

  validates :session_token, :password_digest, :username, presence: true
  validates :session_token, :password_digest, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates_format_of :username, with: EMAIL_REGEX, multiline: true

  after_initialize :ensure_session_token

  attr_reader :password
  has_many :messages, class_name: "Message"
  has_many :messages, as: :receivable

  def self.find_by_credentials(username, team_id, password)
    @user = User.find_by(username: username, team_id: team_id)
    return nil unless @user && @user.valid_password?(password)
    @user
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  after_initialize :default_values
  def default_values
    if self.username
      self.handle = self.username.split(/\W/)[0]
    end

    self.is_admin ||= true
  end
end
