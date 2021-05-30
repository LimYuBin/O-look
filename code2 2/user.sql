CREATE TABLE nodejs.user
(
	id                   INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nickname             VARCHAR(20),
	pw                   VARCHAR(20),
	email                VARCHAR(30),
	enroll_date          DATETIME,
	user_age             INT,
	user_name            VARCHAR(5),
	user_gender          CHAR(1),
	prefer_style         VARCHAR(20),
	prefer_color         VARCHAR(20),
	prefer_brand         VARCHAR(20),
	user_height          INT, -- height -> user_height (예약어 때문에 수정)
	user_weight          INT, -- weight -> user_weight (예약어 때문에 수정)
	price_range          VARCHAR(20),
	job_title            VARCHAR(20),
	unregister           CHAR(1)
);
