class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :amount, :sender_before_balance, :recipient_before_balance
  belongs_to :sender
  belongs_to :recipient

  # def sender
  #   UserSerializer.new(object.sender, include_balances: { object.sender.id => object.sender_before_balance })
  # end

  # def recipient
  #   UserSerializer.new(object.recipient, include_balances: { object.recipient.id => object.recipient_before_balance })
  # end
end

# "id": 1,
# "sender_id": 1,
# "recipient_id": 18,
# "amount": "100.0",
# "sender_before_balance": "2000000000000.0",
# "recipient_before_balance": "2000.0",
# "created_at": "2023-06-05T09:30:10.053Z",
# "updated_at": "2023-06-05T09:30:10.053Z"