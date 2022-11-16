class CreateMoods < ActiveRecord::Migration[7.0]
  def change
    create_table :moods do |t|
      t.string "status"
      t.string "name"
      t.integer "user_id"

      t.timestamps
    end
  end
end
