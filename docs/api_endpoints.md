# API Endpoints

## HTML API

### Root

#### Unauthenticated user
- `GET /sessions#new` - loads Login template

#### Authenticated user
- `GET /static_pages#root` - loads React chat interface

### Users

- `GET /users/sign_in`
- `POST /users/sign_in`
- `DELETE /users/sign_out`
- `GET /users/sign_up`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Messages

- `GET /api/messages`
  - loads channel specific messages based on what channel the user clicks
  - relies on passing in channel id based on react router url :id, will filter in store when all messages come back
- `POST /api/messages`

### Channels

- `GET /api/channels`
- `POST /api/channels`
  - as soon as a channel is successfully created, trigger a post request to make channel_user join table entry

### Channel_users

- `POST /api/channel_users`
  - when a user adds a person to the channel, must link the person they want to add to the join table so there is a relationship between channel and specified user (found through email)
