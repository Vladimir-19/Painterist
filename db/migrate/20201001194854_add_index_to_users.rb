class AddIndexToUsers < ActiveRecord::Migration[5.2]
  
    add_index :users, :email, unique: true
  
end
