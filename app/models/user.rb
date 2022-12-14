class User < ApplicationRecord
    has_many :moods, dependent: :destroy
    has_many :characters, dependent: :destroy
    has_many :campaigns, through: :characters

    has_secure_password
end
