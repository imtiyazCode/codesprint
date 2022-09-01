const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const orderSchema = new Schema({
    userId: { type: String, required: true },
    products: [{
        productId: { type: String },
        quantity: { type: Number, default: 1 }
    }],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

const Order = models.Order || model('Order', orderSchema)

export default Order;