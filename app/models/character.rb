class Character < ApplicationRecord
    has_many :character_connections
    has_many :users, through: :character_connections
end
