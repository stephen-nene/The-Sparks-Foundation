class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :profile
      t.string :account_number
      t.decimal :account_balance
      t.string :password

      t.timestamps
    end
  end
end
