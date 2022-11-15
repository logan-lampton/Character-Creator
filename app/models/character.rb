class Character < ApplicationRecord
    belongs_to :user
    belongs_to :campaign
    has_many :abilities, dependent: :destroy
    has_many :character_classes, dependent: :destroy
    has_many :races, dependent: :destroy
    has_many :descriptions, dependent: :destroy

    validates :name, presence: true
    validates :image, presence: true
end
