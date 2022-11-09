class Character < ApplicationRecord
    has_many :character_connections, dependent: :destroy
    has_many :users, through: :character_connections
    has_many :abilities, dependent: :destroy
    has_many :character_classes, dependent: :destroy
    has_many :races, dependent: :destroy
    has_many :descriptions, dependent: :destroy
end
