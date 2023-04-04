# BC text moderation

This is a NestJS backend designed to perform automatic moderation on text. This system provides an efficient solution
for moderating user-generated content such as comments or posts by utilizing a pre-defined list of banned words.

## Development

Start mongodb-dev `docker-compose -p bc-text-moderation-dev -f ./docker-compose-dev.yml up -d`

Seed db `npx nestjs-command seed:word-list`

Start dev server `start:dev`

## Deployment

Start mongodb-dev `docker-compose -p bc-text-moderation -f ./docker-compose.yml up -d`

Seed db `npx nestjs-command seed:word-list`

## How to use

### Moderate All

Moderate all performs selected checks on all values of `textFields`. If one of strings violates at least one of the
options selected in `moderationOptions` the `isAcceptable` field for this item will be set to false

POST
http://localhost:3000/api/v1/moderator/moderate-all

Body example

```json
{
  "moderationOptions": {
    "wordList": true
  },
  "language": "en",
  "items": [
    {
      "textFields": {
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "username": "User1"
      }
    }
  ]
}
```

Response example

```json
{
  "moderationOptions": {
    "wordList": true
  },
  "language": "en",
  "items": [
    {
      "textFields": {
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "username": "User1"
      },
      "isAcceptable": false
    }
  ]
}
```

### Word list

This is a list of banned words.

This resource supports default CRUD operations.

```js
 const WordList: CreateWordListDto = {
    name: 'word_list_name',
    language: 'en',
    items: [
        'word1',
        'word2',
        'word3'
    ]
}
```

