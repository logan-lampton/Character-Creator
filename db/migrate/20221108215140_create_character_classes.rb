class CreateCharacterClasses < ActiveRecord::Migration[7.0]
  def change
    create_table :character_classes do |t|
      t.string :name
      t.integer :character_id

      t.timestamps
    end
  end
end
