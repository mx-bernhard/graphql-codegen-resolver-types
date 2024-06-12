import { ApolloServer } from "apollo-server";
import { readFileSync } from "node:fs";
import {
  HumanResource,
  JsonAttribute,
  Resolvers,
  ResolversTypes,
} from "./resolvers";

const typeDefs = readFileSync("./schema.graphql", "utf8");

const resolverJsonAttribute: ResolversTypes["Attribute"] = {
  __typename: "JSONAttribute",
  id: "1",
  json: "json",
};

const nonResolverJsonAttribute: JsonAttribute = {
  __typename: "JSONAttribute",
  id: "1",
  json: "json",
};

const resolverTextAttribute: ResolversTypes["Attribute"] = {
  __typename: "TextAttribute",
  id: "1",
  text: "text",
};

const resolverHumanResource: ResolversTypes["HumanResource"] = {
  __typename: "HumanResource",
  id: "1",
  fullName: "Mr. Smith",
  attributes: [resolverJsonAttribute, resolverTextAttribute],
};

const nonResolverHumanResource: HumanResource = {
  attributes: [nonResolverJsonAttribute],
  fullName: "Mr. Smith",
  id: "1",
};

const resolverAssignment: ResolversTypes["Assignment"] = {
  __typename: "Assignment",
  resource: nonResolverHumanResource,
};

// Type 'Omit<HumanResource, "attribute"> & { attribute: ResolverTypeWrapper<JsonAttribute | TextAttribute>[]; }' is not assignable to type 'Maybe<HumanResource>'.
//   Type 'Omit<HumanResource, "attribute"> & { attribute: ResolverTypeWrapper<JsonAttribute | TextAttribute>[]; }' is not assignable to type 'HumanResource'.
//     Type 'Omit<HumanResource, "attribute"> & { attribute: ResolverTypeWrapper<JsonAttribute | TextAttribute>[]; }' is not assignable to type 'Resource'.
//       Types of property 'attribute' are incompatible.
//         Type 'ResolverTypeWrapper<JsonAttribute | TextAttribute>[]' is not assignable to type 'Attribute[]'.
//           Type 'ResolverTypeWrapper<JsonAttribute | TextAttribute>' is not assignable to type 'Attribute'.
//             Property 'id' is missing in type 'Promise<JsonAttribute | TextAttribute>' but required in type 'Attribute'.ts(2322)
const errorResolverAssignment: ResolversTypes["Assignment"] = {
  __typename: "Assignment",
  resource: resolverHumanResource,
};

const resolvers: Resolvers = {
  Query: {
    assignment() {
      return resolverAssignment;
    },
    attribute() {
      if (Math.random() > 0.5) {
        return resolverTextAttribute;
      }
      return resolverJsonAttribute;
    },
    humanResource() {
      return resolverHumanResource;
    },
    resource() {
      return resolverHumanResource;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
