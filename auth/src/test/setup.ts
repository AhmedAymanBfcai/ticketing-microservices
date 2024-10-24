import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = 'asdfasdf';

  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
function beforeAll(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.');
}

function beforeEach(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.');
}

function afterAll(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.');
}

