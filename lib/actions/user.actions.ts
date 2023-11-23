"use server"

import { revalidatePath } from 'next/cache';
import {connectToDB} from '../actions/mongoose'
import User from '../models/user.model';
export async function updateUser(
    userId: string,
    username: string,
    name: string,
    bio: string,
    image: string,
    path: string,
): Promise<void> {
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
}