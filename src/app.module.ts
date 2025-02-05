// root module for this applicationm
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AdminModule } from './admin/admin.module';
import { WorkerModule } from './worker/worker.module';
import { UploadsModule } from './uploads/uploads.module';
import { ReviewsModule } from './reviews/reviews.module';
import { JobsModule } from './jobs/jobs.module';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { ClientsModule } from './clients/clients.module';
import { FreelancersModule } from './freelancers/freelancers.module';

@Module({
  imports: [
    UsersModule,
    FreelancersModule,
    ClientsModule,
    ProjectsModule,
    TasksModule,
    JobsModule,
    ReviewsModule,
    UploadsModule,
    WorkerModule,
    AdminModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
