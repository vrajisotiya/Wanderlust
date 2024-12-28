const Joi = require("joi");
const review = require("./models/review");

//joi
module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().integer().min(0).required(),
    image: Joi.string().allow("", null),
    category: Joi.string()
      .valid(
        "island",
        "room",
        "iconiccities",
        "mountains",
        "castels",
        "amazingpools",
        "camping",
        "desert",
        "arctic",
        "domes",
        "bots",
        "other"
      )
      .required(),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
