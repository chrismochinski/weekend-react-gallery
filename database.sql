-- utilizing branch feature-database

CREATE TABLE "gallery" ( 
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(60),
	"description" VARCHAR(400),
	"location" VARCHAR(100), 
	"likes" INT DEFAULT 0
);

INSERT INTO "gallery" 
	("path", "description", "location")
VALUES
    ('images/1greenland.png', 'On our way to Europe, over the southern tip of Greenland', 'Atlantic Ocean'),
    ('images/2london.png', 'London Heathrow Airport', 'London, UK'),
    ('images/3seville.png', 'Parque de María Luisa', 'Seville, Spain'),
    ('images/4venice.png', 'St. Marks Square', 'Venice, Italy'),
    ('images/5garmisch.png', 'Ehrwald-Zugspitzplatt (2962 m above sea level)', 'Garmisch, Germany'),
    ('images/6sicily.png', 'Taormina', 'Sicily, Italy'),
    ('images/7seville.png', 'Plaza De España', 'Seville, Spain'),
    ('images/8chania.png', 'Radio interview', 'Chania, Greece'),
    ('images/9rota.png', 'Who gave Mo a grenade launcher again?!', 'Rota, Spain');