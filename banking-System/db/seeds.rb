require 'faker'

puts "🔐 Seeding users..."

20.times do |n|
  User.create!(
    name: Faker::Name.unique.name,
    email: Faker::Internet.unique.email,
    account_number: Faker::Bank.unique.account_number(digits: 10),
    account_balance: Faker::Number.decimal(l_digits: 4, r_digits: 2),
    password: "password"
  )

  print "👤 Creating user #{n + 1}..."
  sleep(0.005)
  puts " ✅"
end

puts "🎉 User seeding complete!"
