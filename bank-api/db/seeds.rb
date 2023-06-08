require 'faker'

puts "👤 Creating main user..."
User.create!(
  name: "Stephen Nene",
  email: "stevekid705@gmail.com",
  profile: "https://images.unsplash.com/photo-1685390656477-565389d3b79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  account_number: 834283428342,
  account_balance: 2000000000000,
  password: "Constletvar99!"
)
puts "🔐 Creating main user..."

puts "🔐 Seeding users..."


image_index = 1

25.times do |n|
  User.create!(
    name: Faker::Name.unique.name,
    email: Faker::Internet.unique.email,
    profile: "https://mdbootstrap.com/img/new/avatars/#{image_index}.jpg",
    account_number: Faker::Bank.unique.account_number(digits: 10),
    account_balance: 2000,
    password: "password"
  )

  image_index += 1

  # print "👤 Creating user #{n + 1}..."
  # sleep(0.005)
  # puts " ✅"
end


puts "🎉 User seeding complete!"

puts "💸 Seeding transactions..."

# User.all.each do |sender|
#   recipient = User.where.not(id: sender.id).sample
#   amount = 100

#   sender_before_balance = sender.account_balance
#   recipient_before_balance = recipient.account_balance

#   sender.update(account_balance: sender_before_balance - amount.to_f)
#   recipient.update(account_balance: recipient_before_balance + amount.to_f)

#   Transaction.create!(
#     sender_id: sender.id,
#     recipient_id: recipient.id,
#     amount: amount,
#     sender_before_balance: sender_before_balance,
#     recipient_before_balance: recipient_before_balance
#   )

  # print "💰 Creating transaction..."
  # sleep(0.005)
  # puts " ✅"
# end

puts "🎉 Transaction seeding complete!"
