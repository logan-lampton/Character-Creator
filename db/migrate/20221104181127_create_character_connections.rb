class CreateCharacterConnections < ActiveRecord::Migration[7.0]
  def change
    create_table :character_connections do |t|
      t.integer :user_id
      t.integer :character_id

      t.timestamps
    end
  end
end
