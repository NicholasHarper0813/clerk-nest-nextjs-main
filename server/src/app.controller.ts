import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from './clerk-auth.guard';
import { AppService } from './app.service';

@Controller()
export class AppController 
{
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(ClerkAuthGuard)
  async getUsers()
  {
    return this.appService.getUsers();
  }
}
