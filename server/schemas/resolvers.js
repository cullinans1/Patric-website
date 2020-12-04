const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    posts: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { user, token };
    },
    addPost: async(parent, { postinfo }, context) => {
      if (context.user){
        const post = new Post({ postinfo });
        await User.findOneAndUpdate(context.user._id, {
          $push: { orders: order },
        });
        return post;
      }
      throw new AuthenticationError('Not authorized');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      //only will allow one account to login (admin account) change to Patric.sepulveda@honestlyeasyrealty.com later
      if (email != 'admin@admin.com') {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const corrrectPw = await user.isCorrectPassword(password);

      if (!corrrectPw) {
        throw new AuthenticationError("Incorrect Credentials");
      }
      const token = signToken(user);
      return { user, token };
    },
  },
};

module.exports = resolvers;