class Race < ApplicationRecord
    belongs_to :character
    belongs_to :user
end
