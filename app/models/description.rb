class Description < ApplicationRecord
    belongs_to :character

    validates :background, presence: true
    validates :alignment, presence: true
    validates :faith, presence: true
    validates :lifestyle, presence: true
    validates :hair, presence: true
    validates :skin, presence: true
    validates :eyes, presence: true
    validates :height, presence: true
    validates :weight, presence: true
    validates :age, presence: true
    validates :personality_traits, presence: true
    validates :ideals, presence: true
    validates :bonds, presence: true
    validates :flaws, presence: true
    validates :organizations, presence: true
    validates :allies, presence: true
    validates :enemies, presence: true
    validates :backstory, presence: true
    validates :other, presence: true
end
