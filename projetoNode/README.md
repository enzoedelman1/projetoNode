
# The Simplest API
This is one of the simplest APIs written in the **API Blueprint**. One plain
resource combined with a method and that's it! We will explain what is going on
in the next installment - 
[Resource and Actions](02.%20Resource%20and%20Actions.md).

**Note:** As we progress through the examples, do not also forget to view the
[Raw](https://raw.github.com/apiaryio/api-blueprint/master/examples/01.%20Simplest%20API.md)
code to see what is really going on in the API Blueprint, as opposed to just
seeing the output of the Github Markdown parser.

Also please keep in mind that every single example in this course is a **real
API Blueprint** and as such you can **parse** it with the 
[API Blueprint parser](https://github.com/apiaryio/drafter) or one of its
[bindings](https://github.com/apiaryio/drafter#bindings).

## API Blueprint
+ [This: Raw API Blueprint](https://raw.github.com/apiaryio/api-blueprint/master/examples/01.%20Simplest%20API.md)
+ [Next: Resource and Actions](02.%20Resource%20and%20Actions.md)

# GET /message
+ Response 200 (text/plain)

 

FORMAT: 1A

# Resource and Actions API
This API example demonstrates how to define a resource with multiple actions.

## API Blueprint
+ [Previous: The Simplest API](01.%20Simplest%20API.md)
+ [This: Raw API Blueprint](https://raw.github.com/apiaryio/api-blueprint/master/examples/02.%20Resource%20and%20Actions.md)
+ [Next: Named Resource and Actions](03.%20Named%20Resource%20and%20Actions.md)

# /message
This is our [resource](http://www.w3.org/TR/di-gloss/#def-resource). It is
defined by its
[URI](http://www.w3.org/TR/di-gloss/#def-uniform-resource-identifier) or, more
precisely, by its [URI Template](http://tools.ietf.org/html/rfc6570).

This resource has no actions specified but we will fix that soon.

## GET
Here we define an action using the `GET` [HTTP request method](http://www.w3schools.com/tags/ref_httpmethods.asp) for our resource `/message`.

As with every good action it should return a
[response](http://www.w3.org/TR/di-gloss/#def-http-response). A response always
bears a status code. Code 200 is great as it means all is green. Responding
with some data can be a great idea as well so let's add a plain text message to
our response.

+ Response 200 (text/plain)

        Hello World!

## PUT
OK, let's add another action. This time to put new data to our resource
(essentially an update action). We will need to send something in a
[request](http://www.w3.org/TR/di-gloss/#def-http-request) and then send a
response back confirming the posting was a success (_HTTP Status Code 204 ~
Resource updated successfully, no content is returned_).

+ Request (text/plain)

        All your base are belong to us.

+ Response 204

 


FORMAT: 1A

# JSON Schema
Every request and response can have a schema. Below you will find examples
using [JSON Schema](http://json-schema.org/) to describe the format of request
and response body content.

## API Blueprint
+ [Previous: Named Endpoints](13.%20Named%20Endpoints.md)
+ [This: Raw API Blueprint](https://raw.github.com/apiaryio/api-blueprint/master/examples/14.%20JSON%20Schema.md)
+ [Next: Advanced JSON Schema](15.%20Advanced%20JSON%20Schema.md)

# Notes [/notes/{id}]

+ Parameters

    + id: abc123 (required) - Unique identifier for a note

## Get a note [GET]
Gets a single note by its unique identifier.

+ Response 200 (application/json)

    + Body

            {
                "id": "abc123",
                "title": "This is a note",
                "content": "This is the note content."
                "tags": [
                    "todo",
                    "home"
                ]
            }

    + Schema

            {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "title": {
                        "type": "string"
                    },
                    "content": {
                        "type": "string"
                    },
                    "tags": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }

## Update a note [PATCH]
Modify a note's data using its unique identifier. You can edit the `title`,
`content`, and `tags`.

+ Request (application/json)

    + Body

            {
                "title": "This is another note",
                "tags": [
                    "todo",
                    "work"
                ]
            }

    + Schema

            {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string"
                    },
                    "content": {
                        "type": "string"
                    },
                    "tags": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                },
                "additionalProperties": false
            }

+ Response 204
