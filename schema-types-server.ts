import { readFileSync } from "node:fs";
import { ApolloServer } from "apollo-server";
import {
  Assignment,
  HumanResource,
  JsonAttribute,
  Resolvers,
  TextAttribute,
} from "./resolvers";

const typeDefs = readFileSync("./schema.graphql", "utf8");

const textAttribute: TextAttribute = {
  __typename: "TextAttribute",
  id: "1",
  text: "text",
};

const jsonAttribute: JsonAttribute = {
  __typename: "JSONAttribute",
  id: "1",
  json: "json",
};

const resource: HumanResource = {
  __typename: "HumanResource",
  id: "1",
  fullName: "Mr. Smith",
  attributes: [textAttribute],
};

const assignment: Assignment = {
  __typename: "Assignment",
  resource,
};

const resolvers: Resolvers = {
  Query: {
    assignment(_, __, ___, ____) {
      return assignment;
    },
    attribute() {
      if (Math.random() > 0.5) {
        return textAttribute;
      }
      return jsonAttribute;
    },
    resource() {
      return resource;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
