class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :account_number, :account_balance
end  