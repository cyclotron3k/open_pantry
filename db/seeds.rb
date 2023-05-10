# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

farmer_joe = User.find_or_create_by!(
    email: 'farmer.joe@example.com',
    display_name: 'Farmer Joe',
    contact_name: 'Farmer Joe',
    delivery_address: '',
    billing_address: 'The Farm, Farmville, VIC 3031',
) { |o| o.password = '123456' }

sugar_mills = User.find_or_create_by!(
    email: 'sugar_mills@example.com',
    display_name: 'Sugar Mills Baking Supplies',
    contact_name: 'Milli Smith',
    delivery_address: '',
    billing_address: 'Lot 104, Surgarloaf Mtn., QLD 4041',
) { |o| o.password = '123456' }

Product.find_or_create_by!(
    title: 'Beetroot (per kilo)',
    description: 'Best beetroot you ever tasted',
    image: '',
    user: farmer_joe,
    cost: 6.50,
    available: true,
)

Product.find_or_create_by!(
    title: 'Corn (per kilo)',
    description: 'Best corn you ever tasted',
    image: '',
    user: farmer_joe,
    cost: 4.50,
    available: true,
)

Product.find_or_create_by!(
    title: 'Carrots (per kilo)',
    description: 'Best carrots you ever tasted',
    image: '',
    user: farmer_joe,
    cost: 2.40,
    available: true,
)

Product.find_or_create_by!(
    title: 'Peas (per kilo)',
    description: 'Best peas you ever tasted',
    image: '',
    user: farmer_joe,
    cost: 2.70,
    available: true,
)

Product.find_or_create_by!(
    title: 'Flour - Plain (per kilo)',
    description: 'For making cakes and stuff',
    image: '',
    user: sugar_mills,
    cost: 1.25,
    available: true,
)

Product.find_or_create_by!(
    title: 'Flour - Self Raising (per kilo)',
    description: 'For making cakes and stuff',
    image: '',
    user: sugar_mills,
    cost: 2.50,
    available: true,
)

Product.find_or_create_by!(
    title: 'Sugar - Granulated (500g)',
    description: 'For making cakes and stuff',
    image: '',
    user: sugar_mills,
    cost: 1.50,
    available: true,
)

Product.find_or_create_by!(
    title: 'Sugar - Caster (500g)',
    description: 'For making things sweet',
    image: '',
    user: sugar_mills,
    cost: 1.50,
    available: true,
)

Product.find_or_create_by!(
    title: 'Sugar - Icing (500g)',
    description: 'For making icing',
    image: '',
    user: sugar_mills,
    cost: 1.50,
    available: false,
)