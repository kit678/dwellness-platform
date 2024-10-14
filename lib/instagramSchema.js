import clientPromise from './mongodb';

export async function getInstagramPosts() {
  const client = await clientPromise;
  const db = client.db('dwellness');

  const posts = await db.collection('instagramPosts').find({}).toArray();
  return posts;
}

export async function addInstagramPost(post) {
  const client = await clientPromise;
  const db = client.db('dwellness');

  const result = await db.collection('instagramPosts').insertOne(post);
  return result;
}