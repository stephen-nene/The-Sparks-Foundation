class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :amount, :sender_before_balance, :recipient_before_balance ,:created_at
  belongs_to :sender
  belongs_to :recipient

  # def sender
  #   UserSerializer.new(object.sender, include_balances: { object.sender.id => object.sender_before_balance })
  # end

  # def recipient
  #   UserSerializer.new(object.recipient, include_balances: { object.recipient.id => object.recipient_before_balance })
  # end
end