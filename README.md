# Stack


## Minimum Viable Product

Stack is a slack-inspired chat web app built on rails and react with a flux architecture. It is a full-stack messaging app that allows many users to chat together in real time. The minimum viable product for this app  will have the following features

- [x] New account creation, login, and guest/demo login
- [x] Real time chat messaging
- [x] Channel creation and administration
- [x] Hosting on Heroku with a custom domain name
- [x] CSS styling that is satisfactorily visually appealing

## Product Goals and Priorities

Stack will allow users to do the following:

- [x] Create an account (MVP)
- [x] Log in / Log out, including as a Guest/Demo User (MVP)
- [x] Read and write chat messages (MVP)
- [x] Edit user profiles (MVP)
- [x] Create chat channels (MVP)
- [x] Search
- [x] Code Snippets

## Bonus Features

Users Can:
- [ ] Upload Images and Documents (In progress)
- [ ] Have visual feedback while their chat partner is typing, similar to Facebook chat or iMessage
- [ ] Create links to specific chat items
- [ ] View other users by clicking on their username
- [ ] Opt to post anonymously in public channels

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux_cycles.md
[api-endpoints]: ./docs/api_endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1 day)

**Objective:** Functioning rails project with Authentication

- [x] Setup new Rails project with Flux architecture skeleton
- [x] setup Webpack & Flux scaffold
- [x] create `User` model
- [x] user signup/signin pages
- [x] authentication
- [x] redirect to placeholder index

### Phase 2: Chat (2 days)

**Objective:** Implement real time chat within Rails/React

- [x] create `Message` model
- [x] seed the database with a small amount of test data (users, messages)
- [x] CRUD API for messages ('MessageController')
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.
- [x] create `MessageView`, `Message`, `ChatBox` components
- [x] implement Pusher websocket listeners on `MessageView` component
- [x] add MessagesController#index functionality to return messages after given timestamp
- [ ] style `Chat` and children components
- [x] infinite scroll upwards
- [x] display edited timestamp
- [x] Day separators

### Phase 3: Channel integration with chat and users (1.5 days)

**Objective:** Users can interact with global channels

- [x] Integrate channel id within messages model
- [x] setup React Router
- [x] implement Channel component, will be alongside Chat component
  - [x] `ChannelView`
  - [x] `ChannelIndexItem`
- [x] Create/Destroy Channels
- [x] Delete/Edit Messages
- [x] Message timestamps
- [ ] Join/Leave channels
- [ ] Invite to private channels
- [ ] Highlight channels with new messages

### Phase 4: Initial Styling (1 days)

**Objective:** Complete initial styling, bringing unified look and color to all pages. I plan to use bootstrap to style the app.

- [x] create a basic style guide
- [x] Style and flesh out splash page
- [x] position elements on the page
- [x] add basic colors & styles

### Phase 5: Guest Accounts & Bug Fixing(.5 days)

**Objective:** Fully flesh out the guest account. Make sure initial user experience is smooth and bug free.

- [x] Decide on and implement UX for guest accounts
- [x] Provide appropriate default settings for guest account
- [x] Do polishing of user experience so MVP experience is bug free and smooth.


### Phase 6: Seed Data (0.5 days)

**objective:** Provide seed data for both bots and conversations.

- [x] Add seed data to conversations to flesh out their contents
- [x] Implement multiple channels with different behavior to simulate various interactions.


### TODO
- [x] fix multiple GET requests for messages by only attaching websocket listener after initial fetchMessages succeeds
- [ ] sanity check incoming messages in MessageStore
- [ ] remove extraneous console logs
- [x] separate pusher keys for prod and dev (Figaro)
