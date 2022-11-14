class CreateDescriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :descriptions do |t|
      t.string :background
      t.string :alignment
      t.string :faith
      t.string :lifestyle
      t.string :hair
      t.string :skin
      t.string :eyes
      t.string :height
      t.integer :weight
      t.integer :age
      t.string :personality_traits
      t.string :ideals
      t.string :bonds
      t.string :flaws
      t.string :organizations
      t.string :allies
      t.string :enemies
      t.string :backstory
      t.string :other
      t.integer :character_id
      t.integer :user_id

      t.timestamps
    end
  end
end
