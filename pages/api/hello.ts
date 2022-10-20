// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import FirbaseAdmin from '@/models/firebase_admin';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  FirbaseAdmin.getInstance().Firebase.collection('test');
  res.status(200).json({ name: 'John Doe' });
}
