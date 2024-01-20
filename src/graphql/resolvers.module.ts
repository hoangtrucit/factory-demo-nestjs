import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { UserResolver } from './user/user.resolver';

@Module({
  imports: [UserModule],
  providers: [UserResolver],
})
export class ResolversModule {}
