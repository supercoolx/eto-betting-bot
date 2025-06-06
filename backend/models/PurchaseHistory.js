const mongoose = require('mongoose');

const PurchaseHistorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    purchaseDate: { type: Date, default: Date.now },
    quantity: { type: Number, default: 1 },
    telegramPaymentChargeId: { type: String, default: '' },
    providerPaymentChargeId: { type: String, default: '' },
    payment: { type: String, default: '' },
});

module.exports = mongoose.model('PurchaseHistory', PurchaseHistorySchema);