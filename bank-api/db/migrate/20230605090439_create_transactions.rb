class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.belongs_to :sender, null: false, foreign_key: { to_table: :users }
      t.belongs_to :recipient, null: false, foreign_key: { to_table: :users }
      t.decimal :amount, null: false
      t.decimal :sender_before_balance, null: false
      t.decimal :recipient_before_balance, null: false

      t.timestamps
    end
  end
end
