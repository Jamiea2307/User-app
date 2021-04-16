const Joi = require("joi");

const postValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().messages({
      "string.empty": `Please add a title for your post`,
    }),
    body: Joi.string().required().messages({
      "string.empty": `Please add body content to your post`,
    }),
  });
  return schema.validate(data);
};

module.exports.postValidation = postValidation;
