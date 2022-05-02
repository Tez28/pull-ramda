const { Schema, } = require('mongoose');
const Any = new Schema({ any: Schema.Types.Mixed });

module.exports = Any;