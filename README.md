# interactive-api

Interactive API provides a lightweight and user-friendly interface for quickly exploring REST JSON APIs.

## Requests

Requests can be broken down into three components:

  - Input
  - Request HTTP data
  - Output

In Interactive API, `Input` and `Output` are first-class objects, they are the primary unit of data and the goal of
this software is to allow this information to be easily manipulated by simple mapping functions defined by the
user and translated from one set of data to another by API requests.

## Usage
Imagine having an API token for a service such as Trello. If you were interested in getting a subset of cards in JSON
format you would have to construct requests to retrieve all your Boards, for each Board you'd need a request to retrieve
all Lists, for each List you'd need a requests to get all Cards, and you'd need to filter those Cards based on certain
parameters. This software seeks to make this a simpler process by allowing you to pipe data from one request through
mapping functions to construct sets of data that can be immediately passed through as input for another request, or even
use that data to generate a set of requests.

## Input Mappers
TODO

## Output Mappers
For each item in the output from the request, you can define what fields and in what structure the resultant output is
ultimately constructed. This allows a user to take a raw request output and map it to a format that another request can
understand as input.