const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const Schema = mongoose.Schema;

const ActivitylogSchema = new Schema({
    logdate: {type:Date, required: true},
    userid: {type:String},
    activitytype:{type:String, required: true},
    remarks: {type:String, required: true},
    status: {type:String, required: true},
    performedby: {type:String},
    objuserid: { type:mongoose.Schema.ObjectId},
    objperformedby: { type:mongoose.Schema.ObjectId}
});

ActivitylogSchema.plugin(mongoosePaginate);
ActivitylogSchema.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('activitylog', ActivitylogSchema, 'activitylog');