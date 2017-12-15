insert into inventory(name, shelf, bin, image, price)
values ($1, $2, $3, $4, $5)
returning *;