# Schema Information

## channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
public      | boolean   | not null
message     | boolean   | not null

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
channel_id  | integer   | not null, foreign key (references messages), indexed
text        | string    | not null

## users
column name       | data type | details
----------------  |-----------|-----------------------
id                | integer   | not null, primary key
email             | string    | not null, indexed, unique
password_digest   | string    | not null
session_token     | string    | not null, indexed, unique
profile_image_url | string    | 

## channel_users
column name       | data type | details
----------------  |-----------|-----------------------
id                | integer   | not null, primary key
channel_id        | integer   | not null, indexed
user_id           | integer   | not null, indexed
