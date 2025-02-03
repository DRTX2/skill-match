// root module for this applicationm
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { WorkerModule } from './worker/worker.module';
import { ProfileModule } from './profile/profile.module';
import { UploadsModule } from './uploads/uploads.module';
import { ReviewsModule } from './reviews/reviews.module';
import { JobsModule } from './jobs/jobs.module';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { ClientsModule } from './clients/clients.module';
import { ClientesModule } from './clientes/clientes.module';
import { FreelancersModule } from './freelancers/freelancers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UserModule, UsersModule, FreelancersModule, ClientesModule, ClientsModule, ProjectsModule, TasksModule, JobsModule, ReviewsModule, UploadsModule, ProfileModule, WorkerModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
