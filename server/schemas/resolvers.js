const { AuthenticationError } = require("apollo-server-express");
const { User, Blog } = require("../models");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    blogs: async () => {
      return await Blog.find().populate("blogs");
    },
    user: async () => {
      return await User.find().populate("user");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { user, token };
    },
    addBlog: async(parent, { title, content, image, link } , context) => {
      // if (context.user){
        const blog = new Blog({ title, content, image, link });
        // await User.findOneAndUpdate(context.user._id, {
        //   $push: { blogs: blog },
        // });
        return blog;
      // }
      // throw new AuthenticationError('Not authorized');
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