class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title
      t.text :description
      t.string :url
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :pins, :user_id
  end
end
