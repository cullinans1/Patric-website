const { AuthenticationError } = require("apollo-server-express");
const { User, Blog, Client } = require("../models");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    blogs: async () => {
      return await Blog.find().populate("blogs");
    },
    blog: async (parent, { _id }) => {
      return await Blog.findById(_id).populate("blogs");
    },
    user: async () => {
      return await User.find().populate("user");
    },
    clients: async () => {
      // console.log(parent, args)
      return await Client.find().populate("clients");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addBlog: async (
      parent,
      { title, description, content, image, link },
      args
    ) => {
      // console.log(args.headers.token);
      if (args.headers.token) {
        return await Blog.create({ title, description, content, image, link });
      }
      throw new AuthenticationError("Not authorized");
    },
    editBlog: async (parent, { _id, title, description, content, image, link }, args) => {
      return await Blog.findOneAndUpdate({ _id }, {title, description, content, image, link}, {new: true});
    },
    deleteBlog: async(parent, { _id }) => {
      return await Blog.findOneAndDelete({ _id });
    },
    contactMe: async (parent, { name, email, phone, message }, args) => {
      // console.log(name, email, phone, message)
      return await Client.create({ name, email, phone, message });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      //only will allow one account to login (admin account) change to Patric.sepulveda@honestlyeasyrealty.com later
      if (email != "admin@admin.com") {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const corrrectPw = await user.isCorrectPassword(password);

      if (!corrrectPw) {
        throw new AuthenticationError("Incorrect Credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
