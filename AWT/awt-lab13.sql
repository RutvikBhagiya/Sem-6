Create database awt_lab13;
Use awt_lab13;

CREATE TABLE users (
UserID INT PRIMARY KEY AUTO_INCREMENT,
UserName VARCHAR(50),
Password VARCHAR(50)
);

CREATE TABLE tasks (
TaskID INT PRIMARY KEY AUTO_INCREMENT,
TaskTitle VARCHAR(100),
TaskDescription TEXT,
IsCompleted BOOLEAN,
UserID INT,
FOREIGN KEY (UserID) REFERENCES users(UserID)
);


INSERT INTO users (UserName, Password) VALUES
('Chirag', '1234'),
('Lallu', '5678');

INSERT INTO tasks (TaskTitle, TaskDescription, IsCompleted, UserID) VALUES
('DB Assignment', 'Complete MySQL lab', false, 1),
('AWT Project', 'Build Prisma app', true, 1),
('Testing', 'Unit testing', false, 2);