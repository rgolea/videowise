import { ClassSerializerInterceptor, Module, ValidationPipe } from '@nestjs/common';
import { FilesModule } from './files/files.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environment';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';


@Module({
  imports: [
    MongooseModule.forRoot(environment.MONGODB_URI, {
      useNewUrlParser: true,
    }),
    FilesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ],
})
export class AppModule {}
