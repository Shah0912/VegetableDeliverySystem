CREATE USER dbadmin WITH PASSWORD 'admin';



CREATE DATABASE deliverysystem;

GRANT ALL PRIVILEGES ON DATABASE deliverysystem TO dbadmin;


CREATE SEQUENCE farmer_id_seq;
CREATE SEQUENCE delivery_person_id_seq;
CREATE SEQUENCE customer_id_seq;


SELECT setval('farmer_id_seq',100);
SELECT setval('delivery_person_id_seq',100);
SELECT setval('customer_id_seq',100);


CREATE TABLE Farmer
(
  FarmerId VARCHAR(255) DEFAULT 'F' || nextval('farmer_id_seq') NOT NULL,
  Name VARCHAR(255) NOT NULL,
  Date_Of_Birth DATE NOT NULL,
  Farmer_Rating INT NOT NULL,
  Street VARCHAR(255) NOT NULL,
  State VARCHAR(255) NOT NULL,
  Locality VARCHAR(255) NOT NULL,
  PinCode VARCHAR(7) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (FarmerId)
);

CREATE TABLE Crop
(
  CropId INT NOT NULL,
  Rate INT NOT NULL,
  Name VARCHAR(255) NOT NULL,
  FarmSize INT NOT NULL,
  FarmAge INT NOT NULL,
  Season VARCHAR(255) NOT NULL,
  Age INT NOT NULL,
  Location VARCHAR(255) NOT NULL,
  PRIMARY KEY (CropId)
);

CREATE TABLE Storage
(
  StorageId INT NOT NULL,
  Capacity INT NOT NULL,
  State VARCHAR(255) NOT NULL,
  Street VARCHAR(255) NOT NULL,
  PinCode VARCHAR(7) NOT NULL,
  Locality VARCHAR(255) NOT NULL,
  PRIMARY KEY (StorageId)
);

CREATE TABLE Delivery_Person
(
  Delivery_Person_Rating INT NOT NULL,
  DeliveryId VARCHAR(255) DEFAULT 'D' || nextval('delivery_person_id_seq') NOT NULL,
  Name VARCHAR(255) NOT NULL,
  Date_of_Birth DATE NOT NULL,
  Street VARCHAR(255) NOT NULL,
  State VARCHAR(255) NOT NULL,
  PinCode VARCHAR(7) NOT NULL,
  Locality VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (DeliveryId)
);

CREATE TABLE Vehicles
(
  VehicleNo INT NOT NULL,
  Volume_Capacity INT NOT NULL,
  Licence_Number VARCHAR(10) NOT NULL,
  Type VARCHAR(20) NOT NULL,
  PRIMARY KEY (VehicleNo)
);

CREATE TABLE Orders
(
  OrderId INT NOT NULL,
  Quantity INT NOT NULL,
  Price INT NOT NULL,
  PRIMARY KEY (OrderId)
);

CREATE TABLE Customer
(
  Customer_Rating INT NOT NULL,
  CustomerId VARCHAR(255) DEFAULT 'C' || nextval('customer_id_seq') NOT NULL,
  Name VARCHAR(255) NOT NULL,
  Date_of_Birth DATE NOT NULL,
  Phone_Number VARCHAR(10) NOT NULL,
  Street VARCHAR(255) NOT NULL,
  State VARCHAR(255) NOT NULL,
  Pin_Code VARCHAR(7) NOT NULL,
  Locality VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (CustomerId)
);

CREATE TABLE Feedback
(
  Friendliness INT NOT NULL,
  Knowledge INT NOT NULL,
  Type INT NOT NULL,
  Efficiency INT NOT NULL,
  Comment VARCHAR(255) NOT NULL,
  Quality INT NOT NULL,
  Reviewee VARCHAR(10) NOT NULL
);

CREATE TABLE Delivery_Person_Phone_Number
(
  Phone_Number VARCHAR(10) NOT NULL,
  DeliveryId VARCHAR(255) NOT NULL,
  PRIMARY KEY (Phone_Number, DeliveryId),
  FOREIGN KEY (DeliveryId) REFERENCES Delivery_Person(DeliveryId)
);


CREATE TABLE Farmer_Phone_Number
(
  Phone_Number VARCHAR(10) NOT NULL,
  FarmerId VARCHAR(255) NOT NULL,
  PRIMARY KEY (Phone_Number, FarmerId),
  FOREIGN KEY (FarmerId) REFERENCES Farmer(FarmerId)
);


CREATE TABLE Customer_Phone_Number
(
  Phone_Number VARCHAR(10) NOT NULL,
  CustomerId VARCHAR(255) NOT NULL,
  PRIMARY KEY (Phone_Number, CustomerId),
  FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId)
);







CREATE TABLE Grown_By
(
  CropId INT NOT NULL,
  FarmerId VARCHAR(255) NOT NULL,
  PRIMARY KEY (CropId, FarmerId),
  FOREIGN KEY (CropId) REFERENCES Crop(CropId),
  FOREIGN KEY (FarmerId) REFERENCES Farmer(FarmerId)

);

CREATE TABLE Cultivating
(
  CropId INT NOT NULL,
  FarmerId VARCHAR(255) NOT NULL,
  Size INT NOT NULL,
  PRIMARY KEY (CropId, FarmerId),
  FOREIGN KEY (CropId) REFERENCES Crop(CropId),
  FOREIGN KEY (FarmerId) REFERENCES Farmer(FarmerId)

);

CREATE TABLE Ordered
(
  CropId INT NOT NULL,
  OrderId INT NOT NULL,
  PRIMARY KEY (CropId, OrderId),
  FOREIGN KEY (CropId) REFERENCES Crop(CropId),
  FOREIGN KEY (OrderId) REFERENCES Orders(OrderId)

);

CREATE TABLE Gives_to
(
  FarmerId VARCHAR(255) NOT NULL,
  DeliveryId VARCHAR(255) NOT NULL,
  PRIMARY KEY (FarmerId,  DeliveryId),
  FOREIGN KEY (FarmerId) REFERENCES Farmer(FarmerId),
  FOREIGN KEY (DeliveryId) REFERENCES  Delivery_Person(DeliveryId),
);

CREATE TABLE DEvaluates
(
  DeliveryId VARCHAR(255) NOT NULL,
  PRIMARY KEY (DeliveryId),
  FOREIGN KEY (DeliveryId) REFERENCES Delivery_Person(DeliveryId)
);

CREATE TABLE CEvaluates
(
  CustomerId VARCHAR(255) NOT NULL,
  PRIMARY KEY (CustomerId),
  FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId)
);


CREATE TABLE FEvaluates
(
   FarmerId VARCHAR(255) NOT NULL,
   PRIMARY KEY (FarmerId),
   FOREIGN KEY (FarmerId) REFERENCES  Farmer(FarmerId)
);

CREATE TABLE Delivers_To
(
  DeliveryId VARCHAR(255) NOT NULL,
  CustomerId VARCHAR(255) NOT NULL,
  PRIMARY KEY (CustomerId, DeliveryId),
  FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId),
  FOREIGN KEY (DeliveryId) REFERENCES Delivery_Person(DeliveryId)
);