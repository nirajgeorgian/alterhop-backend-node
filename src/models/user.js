import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
	fullname: {
		type: String,
		trim: true,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		required: true,
	},
	password: {
		current: {
			type: String,
			trim: true,
			required: true,
		},
		reset_token: {
			type: String,
		},
	},
	mobile: {
		no: {
			type: Number,
			trim: true,
		},
		c_code: {
			type: String,
			trim: true,
		},
	},
})

export default userSchema
