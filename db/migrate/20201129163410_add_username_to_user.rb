class AddUsernameToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, null: true
    add_index :users, :username, unique: true
  end
end
