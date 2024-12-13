import mongoose, { Schema, Document } from 'mongoose';

interface IStock extends Document {
  Date: Date;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
  Brand_Name: string;
  Ticker: string;
  Industry_Tag: string;
  Country: string;
  Dividends: number;
  Stock_Splits: number;
}

const stockSchema: Schema = new Schema({
  Date: { type: Date, required: true },
  Open: { type: Number, required: true },
  High: { type: Number, required: true },
  Low: { type: Number, required: true },
  Close: { type: Number, required: true },
  Volume: { type: Number, required: true },
  Brand_Name: { type: String, required: true },
  Ticker: { type: String, required: true },
  Industry_Tag: { type: String, required: true },
  Country: { type: String, required: true },
  Dividends: { type: Number, required: true },
  Stock_Splits: { type: Number, required: true }
}, { collection: 'stock_prices' });

export default mongoose.model<IStock>('Stock', stockSchema);