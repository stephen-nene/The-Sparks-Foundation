require 'faker'

puts "👤 Creating main user..."
User.create!(
  name: "steve nene",
  email: "stevekid705@gmail.com",
  account_number: 834283428342,
  account_balance: 2000000000000,
  password: "Constletvar99!"
)
puts "🔐 Creating main user..."

puts "🔐 Seeding users..."

20.times do |n|
  User.create!(
    name: Faker::Name.unique.name,
    email: Faker::Internet.unique.email,
    account_number: Faker::Bank.unique.account_number(digits: 10),
    account_balance: 2000,
    password: "password"
  )

  # print "👤 Creating user #{n + 1}..."
  # sleep(0.005)
  # puts " ✅"
end

puts "🎉 User seeding complete!"

puts "💸 Seeding transactions..."

User.all.each do |sender|
  recipient = User.where.not(id: sender.id).sample
  amount = 100

  sender_before_balance = sender.account_balance
  recipient_before_balance = recipient.account_balance

  sender.update(account_balance: sender_before_balance - amount.to_f)
  recipient.update(account_balance: recipient_before_balance + amount.to_f)

  Transaction.create!(
    sender_id: sender.id,
    recipient_id: recipient.id,
    amount: amount,
    sender_before_balance: sender_before_balance,
    recipient_before_balance: recipient_before_balance
  )

  # print "💰 Creating transaction..."
  # sleep(0.005)
  # puts " ✅"
end

puts "🎉 Transaction seeding complete!"
