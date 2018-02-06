UPDATE simulation_master
SET email = $2, password = $2
WHERE id = $1;
SELECT * FROM simulation_master;