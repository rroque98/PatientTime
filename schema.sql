DROP DATABASE IF EXISTS notable_calendar;
CREATE DATABASE notable_calendar;

USE notable_calendar;

CREATE TABLE physicians
(
  id int NOT NULL,
  firstName varchar(50),
  lastName varchar(50),
  email varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE appointments
(
  id int NOT NULL,
  patientId int NOT NULL,
  time varchar(50),
  name varchar(50),
  kind varchar(50),
  PRIMARY KEY(patientId)
);

INSERT into physicians
  (id, firstName, lastName, email)
VALUES
  ('1', 'Morris', 'Coppedge', 'MorrisCoppedge@dr.com');
INSERT into physicians
  (id, firstName, lastName, email)
VALUES
  ('2', 'Evela', 'Lonergan', 'EvelaLonergan@dr.com');
INSERT into physicians
  (id, firstName, lastName, email)
VALUES
  ('3', 'Bob', 'Real', 'BobReal@dr.com');
INSERT into physicians
  (id, firstName, lastName, email)
VALUES
  ('4', 'Elizabeth', 'Walker', 'ElizabethWalker@dr.com');
INSERT into physicians
  (id, firstName, lastName, email)
VALUES
  ('5', 'Rani', 'Peltarik', 'RaniPeltarik@dr.com');

INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('1', '1', '8:15', 'Tameka Facer', 'New Patient');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('1', '2', '9:15', 'Elma Lewallen', 'Follow Up');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('1', '3', '11:30', 'Rusty Montufar', 'Follow Up');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('1', '4', '2:15', 'Belma Flinn', 'New Patient');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('2', '5', '7:15', 'Bill Joll', 'Follow Up');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('2', '6', '10:30', 'Will Beldot', 'New Patient');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('2', '7', '2:30', 'Bill Wycoff', 'New Patient');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('3', '8', '8:15', 'Gisela Joll', 'Follow Up');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('3', '9', '9:30', 'Aletha Beldot', 'New Patient');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('3', '10', '11:30', 'Delois Wycoff', 'New Patient');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('4', '11', '9:15', 'Miriam Najarro', 'New Patient');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('4', '12', '11:45', 'Vern Duckett', 'Follow Up');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('4', '13', '3:00', 'Briana Fetzer', 'New Patient');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('5', '14', '9:15', 'Kimmy Bela', 'Follow Up');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('5', '15', '10:30', 'Reggie Noell', 'New Patient');
INSERT into appointments
  (id, patientId, time, name, kind)
VALUES
  ('5', '16', '4:30', 'Dianna Henslee', 'Follow Up');