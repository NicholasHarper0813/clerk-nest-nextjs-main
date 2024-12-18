import clerkClient from '@clerk/clerk-sdk-node';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService 
{
  async getUsers() 
  {
    return clerkClient.users.getUserList();
  }
}
