import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import prisma from '@/app/libs/prismadb';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	pages: {
		signIn: '/',
	},
	debug: process.env.NODE_ENV == 'development',
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
