class CreateCharacterDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :character_details do |t|
      t.string :alignment
      t.string :faith
      t.string :lifestyle
      t.integer :character_id

      t.timestamps
    end
  end
end
