"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const resolvers_1 = require("./resolvers");
const queries_1 = require("./queries");
const mutations_1 = require("./mutations");
const typedef_1 = require("./typedef");
exports.User = { typeDefs: typedef_1.typeDefs, mutations: mutations_1.mutations, queries: queries_1.queries, resolvers: resolvers_1.resolvers };
