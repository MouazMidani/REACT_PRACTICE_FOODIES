import { CreateUserParams, SignInParams } from "@/type";
import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite"
import * as Sentry from "@sentry/react-native"
export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    platform: "com.veloxen.foodies",
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseId: "690413b20011f94e4c7a",
    userCollectionId: "user"
}


export const client: any = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)

export const account = new Account(client)
export const databases = new Databases(client)
export const avatars = new Avatars(client)

export const createUser = async ({ email, password, name }: CreateUserParams) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, name)

        if(!newAccount)
            throw new Error;

        const avatarUrl = avatars.getInitialsURL(name)
        await signIn({email, password})

        return await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            { email, name, accountId: newAccount.$id, avatar: avatarUrl }
        )
    } catch (error) {
        Sentry.captureEvent(error)
        throw new Error(error as string)   
    }
}


export const signIn =  async ({email, password} : SignInParams) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
    } catch (error: any) {
        Sentry.captureEvent(error)
        throw new Error(error as string)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()
        if (!currentAccount) throw Error

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error

        return currentUser.documents[0]
    } catch (error: any) {
        Sentry.captureEvent(error)
        throw new Error(error as string)   
    }
}