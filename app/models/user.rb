class User < ApplicationRecord
    has_many :character_connections, dependent: :destroy
    has_many :characters, through: :character_connections, dependent: :destroy

    has_secure_password
end
