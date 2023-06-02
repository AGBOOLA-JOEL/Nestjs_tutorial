import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentSchema } from "./schema/student.schema"
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017", { dbname: "nestdb" }),
    MongooseModule.forFeature([{ name: "student", schema: StudentSchema }])

  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule { }
