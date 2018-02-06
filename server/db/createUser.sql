INSERT INTO simulation_master (email, password) VALUES ($1, $2);
SELECT * FROM simulation_master WHERE email = $1 AND password = $2;