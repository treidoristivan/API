const response = require('./response');
const redis = require('./redis');
const paramParser = require('./paramParser');
const urlParser = require('./urlParser');
const { hashString, compareHashedString } = require('./bcrypt');
const { signToken, verifyToken } = require('./token');
const {
  randomString, randomNumber, range, generateOTP
} = require('./generator');
const { dateRange, convertDate } = require('./date');
const { uploadCategoryIcon, uploadMenuImages, uploadRestaurantImage, uploadProfilePhoto } = require('./multer');
const { sendEmail } = require('./mail');

module.exports = {
  response,
  redis,
  paramParser,
  urlParser,
  signToken,
  verifyToken,
  hashString,
  compareHashedString,
  randomString,
  randomNumber,
  range,
  generateOTP,
  dateRange,
  convertDate,
  uploadCategoryIcon,
  uploadMenuImages,
  uploadProfilePhoto,
  uploadRestaurantImage,
  sendEmail
};
