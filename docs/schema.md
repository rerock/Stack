# Schema Information

##  Team
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
name           | string    | not null, unique

## Users
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
team_id        | integer   | not null
is_admin       | bool      | (if they are an administrator for team)
username       | string    | not null, (email address)
password_digest| string    | not null
session_token  | string    | not null, unique
handle         | string    | not null (defaults to first part of email)

unique_together (team_id, username)

## Channels
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
team_id        | integer   | not null, foreign key (references  Team)
title          | string    | not null, unique
announcement   | text      | channel announcement

## Messages
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
sender_id        | integer   | not null, foreign key (references users)
receivable_id      | integer   | not null, foreign key (references users or channels)
receivable_type    | string    | not null (either user or channel)
text             | string    | not null



## Channel_Users
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users)
channel_id     | integer   | not null, foreign key (references channels)


## Mentions
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users)
message_id     | integer   | not null, foreign key (references channels)


## Reaction
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users)
message_id     | integer   | not null, foreign key (references channels)
symbol_id      | integer   | not null, foreign key (references symbols)


## Symbols
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
symbol         | string    | not null, url for icon
