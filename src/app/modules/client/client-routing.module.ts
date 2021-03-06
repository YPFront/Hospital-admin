import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { ChatComponent } from './chat/chat.component';
import { ChartsComponent } from './charts/charts.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BlogComponent } from './blog/blog.component';
import { SocialComponent } from './social/social.component';
import { SettingsComponent } from './settings/settings.component';
import { ComposeEmailComponent } from './email/compose-email/compose-email.component';

import { ComposeEmailDetailsComponent } from './email/compose-email-details/compose-email-details.component';
import { InvoicesComponent } from './payments/invoices/invoices.component';
import { InvoiceDetailComponent } from './payments/invoices/invoice-detail/invoice-detail.component';
import { PaymentsComponent } from './payments/payments.component';
import { AddpaymentsComponent } from './payments/addpayments/addpayments.component';
import { DepartmentComponent } from './department/department.component';
import { OurCentersComponent } from './our-centers/our-centers.component';
import { OurStaffComponent } from './our-staff/our-staff.component';
import { AllotedRoomsComponent } from './room-allotment/alloted-rooms/alloted-rooms.component';
import { AddAllotmentComponent } from './room-allotment/add-allotment/add-allotment.component';
import { RoomAllotmentComponent } from './room-allotment/room-allotment.component';
import { PatientsComponent } from './patients/patients.component';
import { AllPatientsComponent } from './patients/all-patients/all-patients.component';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';
import { PatientProfileComponent } from './patients/patient-profile/patient-profile.component';
import { PatientInvoicesComponent } from './patients/patient-invoices/patient-invoices.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AllDoctorsComponent } from './doctors/all-doctors/all-doctors.component';
import { AddDoctorsComponent } from './doctors/add-doctors/add-doctors.component';
import { DoctorsProfileComponent } from './doctors/doctors-profile/doctors-profile.component';
import { DoctorsScheduleComponent } from './doctors/doctors-schedule/doctors-schedule.component';
import { EventsComponent } from './doctors/doctors-schedule/events/events.component';
import { CovidComponent } from './dashboard/covid/covid.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Doctor-Slava | Dashboard' }
  },

  {
    path: 'app-inbox',
    component: EmailComponent,
    data: { title: 'Doctor-Slava | Inbox' }
  },
  {
    path: 'app-chat',
    component: ChatComponent,
    data: { title: 'Doctor-Slava | Chat' }
  },
  {
    path: 'chartelement',
    component: ChartsComponent,
    data: { title: 'Doctor-Slava | Chart-element' }
  },

  {
    path: 'todolist',
    component: TodoListComponent,
    data: { title: 'Doctor-Slava | TodoList' }
  },
  {
    path: 'filemanager',
    component: FilemanagerComponent,
    data: { title: 'Doctor-Slava | Filemanager' }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Doctor-Slava | Contacts' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { title: 'Doctor-Slava | Blog' }
  },
  {
    path: 'social',
    component: SocialComponent,
    data: { title: 'Doctor-Slava | Social' }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Doctor-Slava | Settings' }
  },
  {
    path: 'composeemail',
    component: ComposeEmailComponent,
    data: { title: 'Doctor-Slava | ComposeEmail' }
  },
  {
    path: 'composeemail/composeemail-details',
    component: ComposeEmailDetailsComponent,
    data: { title: 'Doctor-Slava | ComposeEmailDetails' }
  },

  {
    path: 'doctorschedule/events',
    component: EventsComponent,
    data: { title: 'Doctor-Slava | Events' }
  },

  {
    path: 'payments',
    component: PaymentsComponent,
    data: { title: 'Doctor-Slava | Payments' }
  },
  {
    path: 'payments/addpayment',
    component: AddpaymentsComponent,
    data: { title: 'Doctor-Slava | AddPayments' }
  },
  {
    path: 'payments/invoices',
    component: InvoicesComponent,
    data: { title: 'Doctor-Slava | Invoices' }
  },
  {
    path: 'payments/invoices/invoice-detail',
    component: InvoiceDetailComponent,
    data: { title: 'Doctor-Slava | InvoiceDetail' }
  },
  {
    path: 'pages/signup',
    component: SignupComponent,
    data: { title: 'Doctor-Slava | Signup' }
  },
  {
    path: 'departments',
    component: DepartmentComponent,
    data: { title: 'Doctor-Slava | Departments' }
  },
  {
    path: 'our-centers',
    component: OurCentersComponent,
    data: { title: 'Doctor-Slava | OurCenters' }
  },
  {
    path: 'our-staff',
    component: OurStaffComponent,
    data: { title: 'Doctor-Slava | OurStaff' }
  },
  {
    path: 'room-allotment',
    component: RoomAllotmentComponent,
    data: { title: 'Doctor-Slava | RoomAllotment' }
  },
  {
    path: 'room-allotment/alloted-rooms',
    component: AllotedRoomsComponent,
    data: { title: 'Doctor-Slava | AllotedRooms' }
  },
  {
    path: 'room-allotment/add-alloted-rooms',
    component: AddAllotmentComponent,
    data: { title: 'Doctor-Slava | Add-Allotment-Rooms' }
  },
  {
    path: 'patients',
    component: PatientsComponent,
    data: { title: 'Doctor-Slava | Patients' }
  },
  {
    path: 'patients/all-patients',
    component: AllPatientsComponent,
    data: { title: 'Doctor-Slava | AllPatients' }
  },
  {
    path: 'patients/add-patient',
    component: AddPatientComponent,
    data: { title: 'Doctor-Slava | AddPatient' }
  },
  {
    path: 'patients/patient-profile',
    component: PatientProfileComponent,
    data: { title: 'Doctor-Slava | PatientProfile' }
  },
  {
    path: 'patients/patient-invoices',
    component: PatientInvoicesComponent,
    data: { title: 'Doctor-Slava | PatientInvoices' }
  },
  {
    path: 'appointments',
    component: AppointmentComponent,
    data: { title: 'Doctor-Slava | Appointment' }
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
    data: { title: 'Doctor-Slava | Doctors' }
  },
  {
    path: 'all-doctors',
    component: AllDoctorsComponent,
    data: { title: 'Doctor-Slava | AllDoctors' }
  },
  {
    path: 'add-doctors',
    component: AddDoctorsComponent,
    data: { title: 'Doctor-Slava | AddDoctors' }
  },
  {
    path: 'doctors-profile',
    component: DoctorsProfileComponent,
    data: { title: 'Doctor-Slava | DoctorsProfile' }
  },
  {
    path: 'doctors-schedule',
    component: DoctorsScheduleComponent,
    data: { title: 'Doctor-Slava | DoctorsSchedule' }
  },
  {
    path: 'covid-19',
    component: CovidComponent,
    data: { title: 'Doctor-Slava | Covid-19' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
  static components = [
    SignupComponent,
    DashboardComponent

  ];

}