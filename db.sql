CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    country TEXT NOT NULL,
    population INT NOT NULL,
    size INT NOT NULL
);
