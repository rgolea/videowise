import { Module } from '@nestjs/common';
import { FilesModule } from './files/files.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environment';


@Module({
  imports: [
    MongooseModule.forRoot(environment.MONGODB_URI, {
      useNewUrlParser: true,
    }),
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
