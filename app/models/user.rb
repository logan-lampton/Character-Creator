class User < ApplicationRecord
    has_many :character_connections
    has_many :characters, through: :character_connections

    has_secure_password
end
