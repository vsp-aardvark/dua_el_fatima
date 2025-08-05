import { Access } from 'payload'

// @ts-expect-error
export const adminOnly: Access = ({ req }) => req.user?.role === 'admin'
