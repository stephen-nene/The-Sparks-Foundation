class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.references :sender, null: false, foreign_key: true
      t.references :recipient, null: false, foreign_key: true
      t.decimal :amount
      t.decimal :sender_before_balance
      t.decimal :recipient_before_balance

      t.timestamps
    end
  end
end
