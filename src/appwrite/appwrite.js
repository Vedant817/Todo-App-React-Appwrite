import {Client, Account, Databases} from 'appwrite'

const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('6557996fc8fe417af449')

export const account = new Account(client)

//? Databases
export const database = new Databases(client, '6557999e89b90559651d')