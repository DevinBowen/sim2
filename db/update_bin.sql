update inventory
set name = $3, price = $4
where shelf = $1 and bin = $2
returning *;