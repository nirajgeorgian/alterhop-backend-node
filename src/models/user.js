import crypto from 'crypto'
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema(
	{
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
			verified: {
				type: Boolean,
				default: false,
			},
		},
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

userSchema.methods.hashPassword = function hashPassword(length = 64) {
	const salt = Buffer.from(`${process.env.HASH_SECRET}`, 'base64')
	const key = crypto.pdkdf2Sync(this.password, salt, 100000, length, 'sha512')
	this.password = key.toString('hex')
	return true
}

export default userSchema
