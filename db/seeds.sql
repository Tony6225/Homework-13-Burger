-- add burgers to burger table
INSERT INTO 
	burgers (burger_name, devoured)
VALUES 
	("The Big Boofer", false),
    ("The Cheese Champ", false),
    ("Quad Stacker", true),
    ("The Big Regret", true),
    ("Pickle Surprise", false),
    ("Go Home Hungry", true);
    
-- displays all burgers  
SELECT * FROM burgers;