CREATE USER dbadmin WITH PASSWORD 'admin';



CREATE DATABASE deliverysystem;

GRANT ALL PRIVILEGES ON DATABASE deliverysystem TO dbadmin;


CREATE SEQUENCE farmer_id_seq;
CREATE SEQUENCE delivery_person_id_seq;
CREATE SEQUENCE customer_id_seq;
CREATE SEQUENCE crop_id_seq;
CREATE SEQUENCE vehicle_id;
CREATE SEQUENCE order_id_seq;
CREATE SEQUENCE cart_id_seq;


SELECT setval('farmer_id_seq',100);
SELECT setval('delivery_person_id_seq',100);
SELECT setval('customer_id_seq',100);
SELECT setval('crop_id_seq',100);
SELECT setval('vehicle_id', 100);
SELECT setval('order_id_seq', 100);
SELECT setval('cart_id_seq', 100);



CREATE TABLE Farmer
(
  FarmerId VARCHAR(255) DEFAULT 'F' || nextval('farmer_id_seq') NOT NULL,
  Name VARCHAR(255) NOT NULL,
  Date_Of_Birth DATE NOT NULL,
  Farmer_Rating VARCHAR(10) DEFAULT('0'),
  nor INT DEFAULT(0),
  Street VARCHAR(255) NOT NULL,
  State VARCHAR(255) NOT NULL,
  Locality VARCHAR(255) NOT NULL,
  PinCode VARCHAR(7) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (FarmerId)
);

CREATE TABLE Crop
(
  CropId VARCHAR(255) DEFAULT 'C' || nextval('crop_id_seq') NOT NULL,
  FarmerId VARCHAR(255),
  Rate INT NOT NULL,
  Name VARCHAR(255) NOT NULL,
  FarmSize INT NOT NULL,
  FarmAge INT NOT NULL,
  Type VARCHAR(255) NOT NULL,
  Season VARCHAR(255) NOT NULL,
  completed INT DEFAULT 0,
  PRIMARY KEY (CropId,FarmerId),
  FOREIGN KEY (FarmerId) REFERENCES Farmer(FarmerId)
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
  Delivery_Person_Rating VARCHAR(10) DEFAULT('0'),
  nor INT DEFAULT(0),
  DeliveryId VARCHAR(255) DEFAULT 'D' || nextval('delivery_person_id_seq') NOT NULL,
  Name VARCHAR(255) NOT NULL,
  Date_of_Birth DATE NOT NULL,
  Street VARCHAR(255) NOT NULL,
  State VARCHAR(255) NOT NULL,
  PinCode VARCHAR(7) NOT NULL,
  Locality VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  vehicleid VARCHAR(255),
  FOREIGN KEY (Vehicleid) REFERENCES Vehicles(VehicleId),
  PRIMARY KEY (DeliveryId)
);

CREATE TABLE Vehicles
(
  Vehicleid VARCHAR(255) DEFAULT 'V' || nextval('vehicle_id')  NOT NULL,
  VehicleNo VARCHAR(255) NOT NULL,
  Volume_Capacity INT NOT NULL,
  Licence_Number VARCHAR(255) NOT NULL,
  Type VARCHAR(20) NOT NULL,
  PRIMARY KEY (VehicleId)
);

CREATE TABLE Orders
(
  OrderId VARCHAR(255) DEFAULT 'O' || nextval('order_id_seq') NOT NULL,
  Quantity INT NOT NULL,
  Price INT NOT NULL,
  PRIMARY KEY (OrderId)
);

CREATE TABLE Customer
(
  Customer_Rating VARCHAR(10) DEFAULT('0'),
  nor INT DEFAULT(0),
  CustomerId VARCHAR(255) DEFAULT 'C' || nextval('customer_id_seq') NOT NULL,
  Name VARCHAR(255) NOT NULL,
  Date_of_Birth DATE NOT NULL,
  Street VARCHAR(255) NOT NULL,
  State VARCHAR(255) NOT NULL,
  PinCode VARCHAR(7) NOT NULL,
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

/* CREATE TABLE stored_in
(
  CropId VARCHAR(255) NOT NULL,
  FarmerId VARCHAR(255) NOT NULL,
  Size INT NOT NULL,
  PRIMARY KEY (CropId, FarmerId),
  FOREIGN KEY (CropId) REFERENCES Crop(CropId),
  FOREIGN KEY (FarmerId) REFERENCES Farmer(FarmerId)

);
 */
CREATE TABLE Ordered
(
  CropId VARCHAR(255) NOT NULL,
  FarmerId VARCHAR(255) NOT NULL,
  OrderId VARCHAR(255) NOT NULL,
  amount INT NOT NULL,
  PRIMARY KEY (CropId, OrderId),
  FOREIGN KEY (CropId, FarmerId) REFERENCES Crop(CropId, FarmerId),
  --FOREIGN KEY (FarmerId) REFERENCES Farmer(FarmerId),
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

/*
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

*/

CREATE TABLE Delivers_To
(
  DeliveryId VARCHAR(255) NOT NULL,
  CustomerId VARCHAR(255) NOT NULL,
  PRIMARY KEY (CustomerId, DeliveryId),
  FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId),
  FOREIGN KEY (DeliveryId) REFERENCES Delivery_Person(DeliveryId)
);




CREATE TABLE cart
(
  CustomerId VARCHAR(255) NOT NULL,
  PRIMARY KEY(CustomerId),
  FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId)
);

CREATE TABLE temporder
(
  CropId VARCHAR(255) NOT NULL,
  FarmerId VARCHAR(255) NOT NULL,
  --OrderId VARCHAR(255) NOT NULL,
  CustomerId VARCHAR(255) NOT NULL,
  amount INT NOT NULL,
  PRIMARY KEY (CropId, CustomerId),
  FOREIGN KEY (CropId, FarmerId) REFERENCES Crop(CropId, FarmerId),
  --FOREIGN KEY (FarmerId) REFERENCES Farmer(FarmerId),
  --FOREIGN KEY (OrderId) REFERENCES Orders(OrderId)
  FOREIGN KEY (CustomerId) REFERENCES cart(CustomerId)
);

