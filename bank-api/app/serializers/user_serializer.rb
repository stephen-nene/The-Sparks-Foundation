class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :account_number, :account_balance
end  