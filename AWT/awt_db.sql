Create Database awt_db;
Use awt_db;

Create Table Products(
	Id Int Primary Key Auto_Increment,
    Title Varchar(100),
    Price Int,
    Category Varchar(50),
    Description Text
);

Create Table User(
	UserId Int Primary Key Auto_Increment,
	UserName Varchar(20),
    Password Varchar(30)
);

Create Table Task(
	TaskId Int Primary Key Auto_Increment,
    TaskTitle Varchar(30),
    TaskDescription Text,
    IsCompleted boolean,
    UserId int,
	Foreign Key (UserId) References User(UserId)
);

INSERT INTO Products (Title, Price, Category, Description) VALUES
('Wireless Mouse', 25, 'Electronics', 'Ergonomic wireless mouse with USB receiver'),
('Mechanical Keyboard', 120, 'Electronics', 'RGB mechanical keyboard with blue switches'),
('Running Shoes', 80, 'Footwear', 'Lightweight running shoes for daily workouts'),
('Office Chair', 150, 'Furniture', 'Adjustable office chair with lumbar support'),
('Bluetooth Speaker', 60, 'Electronics', 'Portable Bluetooth speaker with deep bass'),
('Water Bottle', 15, 'Accessories', 'Stainless steel insulated water bottle'),
('Backpack', 45, 'Bags', 'Durable backpack with multiple compartments'),
('Smart Watch', 200, 'Electronics', 'Fitness tracking smartwatch with heart-rate monitor'),
('Desk Lamp', 35, 'Home Decor', 'LED desk lamp with adjustable brightness'),
('Notebook', 5, 'Stationery', 'A5 ruled notebook for daily notes');

INSERT INTO User (UserName, Password) VALUES
('alice',   'alice123'),
('bob',     'bob123'),
('charlie', 'charlie123'),
('david',   'david123'),
('emma',    'emma123'),
('frank',   'frank123'),
('grace',   'grace123'),
('henry',   'henry123'),
('irene',   'irene123'),
('jack',    'jack123');

INSERT INTO Task (TaskTitle, TaskDescription, IsCompleted, UserId) VALUES
('Buy groceries',    'Buy milk, eggs, and bread', FALSE, 1),
('Finish report',    'Complete monthly sales report', TRUE,  2),
('Workout',          'Go to gym for 1 hour', FALSE, 3),
('Read book',        'Read 30 pages of a book', FALSE, 4),
('Pay bills',        'Pay electricity and water bills', TRUE,  5),
('Clean house',      'Vacuum and dust rooms', FALSE, 6),
('Team meeting',     'Attend project meeting', TRUE,  7),
('Fix bugs',         'Resolve open bug tickets', FALSE, 8),
('Call client',      'Discuss project requirements', TRUE,  9),
('Plan vacation',    'Research travel destinations', FALSE, 10);

