## Notes

* Devise vs JWT
* User vs producer & consumer

## Running with Docker

```sh
docker-compose -f docker-compose.dev.yml --profile rails up --build
```

## Generators

```sh
rails generate resource product title:string description:text image:string user:references cost:decimal available:boolean
rails generate resource order total_cost:decimal image:string user:references status:integer
rails generate resource line_item cost:decimal product:references
rails generate migration add_addresses_to_users delivery_address:string billing_address:string
```