"use server"

import { revalidatePath } from 'next/cache';
import {connectToDB} from '../actions/mongoose'
import User from '../models/user.model';

interface Params {
    userId: string
    username: string;
    name: string;
    bio: string;
    image: string;
    path: string;
}
export async function updateUser({
    userId,
    username,
    name,
    bio,
    image,
    path,
}: Params): Promise<void> {
    
    try {
    connectToDB;
await User.findOneAndUpdate(
        { id: userId }, { username: username.toLocaleLowerCase(),
        name,
        bio, 
        image, 
        onboarded: true 
    },
    { upsert: true}

    );

    if(path === '/profile/edit'){
        revalidatePath(path);
    }
    
  } catch (error: any) {
    console.error('Error during user update:', error);
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
 }  