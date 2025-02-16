import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: { title: 'login' },
    loadComponent: () =>
      import('./start/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'verify_otp',
    loadComponent: () =>
      import('./start/verify-otp/verify-otp.component').then(
        (c) => c.VerifyOtpComponent
      ),
  },
  {
    path: 'reset_password/:clientCode/:userId',
    loadComponent: () =>
      import('./start/reset-password/reset-password.component').then(
        (c) => c.ResetPasswordComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),

    children: [
      {
        path: 'my_task-workflow_list',
        loadComponent: () =>
          import(
            './home/application/my-task-workflow-list/my-task-workflow-list.component'
          ).then((r) => r.MyTaskWorkflowListComponent),
        data: { reuse: false }
      },
      {
        path: 'registration/employer/employer_registration',
        loadComponent: () =>
          import(
            './home/application/registration/employer/employer-registration/employer-registration.component'
          ).then((r) => r.EmployerRegistrationComponent),
        data: { reuse: true }
      },
      {
        path: 'registration/employer/employer_registration_detail/:id',
        loadComponent: () =>
          import(
            './home/application/registration/employer/employer-registration-detail/employer-registration-detail.component'
          ).then((r) => r.EmployerRegistrationDetailComponent),
      },
      {
        path: 'registration/employer/view_employer',
        loadComponent: () =>
          import(
            './home/application/registration/employer/view-employer/view-employer.component'
          ).then((r) => r.ViewEmployerComponent),
        data: { reuse: true }
      },
      {
        path: 'registration/employer/view_employer_detail/:id',
        loadComponent: () =>
          import(
            './home/application/registration/employer/view-employer-detail/view-employer-detail.component'
          ).then((r) => r.ViewEmployerDetailComponent),
      },
      {
        path: 'registration/agent/agent_registration',
        loadComponent: () =>
          import(
            './home/application/registration/agent/agent-registration/agent-registration.component'
          ).then((r) => r.AgentRegistrationComponent),
        data: { reuse: true }
      },
      {
        path: 'registration/agent/agent_registration_detail/:id',
        loadComponent: () =>
          import(
            './home/application/registration/agent/agent-registration-detail/agent-registration-detail.component'
          ).then((r) => r.AgentRegistrationDetailComponent),
      },
      {
        path: 'registration/agent/view_agent',
        loadComponent: () =>
          import(
            './home/application/registration/agent/view-agent/view-agent.component'
          ).then((r) => r.ViewAgentComponent),
        data: { reuse: true }
      },
      {
        path: 'registration/agent/view_agent_detail/:id',
        loadComponent: () =>
          import(
            './home/application/registration/agent/view-agent-detail/view-agent-detail.component'
          ).then((r) => r.ViewAgentDetailComponent),
      },
      {
        path: 'registration/individual/view_individual',
        loadComponent: () =>
          import(
            './home/application/registration/individual/view-individual-search/view-individual-search.component'
          ).then((r) => r.ViewIndividualSearchComponent),
        data: { reuse: true }
      },
      {
        path: 'registration/individual/view_individual_detail/:id',
        loadComponent: () =>
          import(
            './home/application/registration/individual/view-individual-detail/view-individual-detail.component'
          ).then((r) => r.ViewIndividualDetailComponent),
      },
      {
        path: 'registration/embassy/embassy_registration',
        loadComponent: () => import('./home/application/registration/embassy/embassy-registration/embassy-registration.component').then((r) => r.EmbassyRegistrationComponent)
      },
      {
        path: 'registration/embassy/embassy_registration_detail/:id',
        loadComponent: () => import('./home/application/registration/embassy/embassy-registration-detail/embassy-registration-detail.component').then((r) => r.EmbassyRegistrationDetailComponent)
      },
      {
        path: 'registration/embassy/view_embassy',
        loadComponent: () => import('./home/application/registration/embassy/view-embassy/view-embassy.component').then((r) => r.ViewEmbassyComponent)
      },
      {
        path: 'registration/embassy/view_embassy_detail/:id',
        loadComponent: () => import('./home/application/registration/embassy/view-embassy-detail/view-embassy-detail.component').then((r) => r.ViewEmbassyDetailComponent)
      },
      
      
      {
        path: 'registration/institution/institution_registration',
        loadComponent: () => import('./home/application/registration/insitution/insitution-registration/insitution-registration.component').then((r) => r.InsitutionRegistrationComponent)
      },
      {
        path: 'registration/institution/institution_registration_detail/:id',
        loadComponent: () => import('./home/application/registration/insitution/insitution-registration-detail/insitution-registration-detail.component').then((r) => r.InsitutionRegistrationDetailComponent)
      },
      {
        path: 'registration/institution/view_institution',
        loadComponent: () => import('./home/application/registration/insitution/view-insitution/view-insitution.component').then((r) => r.ViewInsitutionComponent)
      },
      {
        path: 'registration/institution/view_institution_detail/:id',
        loadComponent: () => import('./home/application/registration/insitution/view-insitution-detail/view-insitution-detail.component').then((r) => r.ViewInsitutionDetailComponent)
      },


      {
        path: 'work-permit/categories_one_year_or_less',
        loadComponent: () =>
          import(
            './home/application/work-permit/categories-oneyear-or-less/categories-oneyear-or-less.component'
          ).then((r) => r.CategoriesOneyearOrLessComponent),
        data: { reuse: true }
      },
      {
        path: 'work-permit/categories_one_year_or_less_detail/:id',
        loadComponent: () =>
          import(
            './home/application/work-permit/categories-oneyear-or-less-detail/categories-oneyear-or-less-detail.component'
          ).then((r) => r.CategoriesOneyearOrLessDetailComponent),
      },

      {
        path: 'work-permit/non_government_organization/:id',
        loadComponent: () =>
          import(
            './home/application/work-permit/non-government-organization/non-government-organization-search/non-government-organization-search.component'
          ).then((r) => r.NonGovernmentOrganizationSearchComponent),
      },
      {
        path: 'work-permit/non_government_organization_detail',
        loadComponent: () =>
          import(
            './home/application/work-permit/non-government-organization/non-government-organization-detail/non-government-organization-detail.component'
          ).then((r) => r.NonGovernmentOrganizationDetailComponent),
        data: { reuse: true }
      },
      {
        path: 'work-permit/maritime_and_fishing/:id',
        loadComponent: () =>
          import(
            './home/application/work-permit/maritime-and-fishing/maritime-and-fishing-search/maritime-and-fishing-search.component'
          ).then((r) => r.MaritimeAndFishingSearchComponent),
      },
      {
        path: 'work-permit/overseas_employers_and_secondments/:id',
        loadComponent: () =>
          import(
            './home/application/work-permit/overseas-employer-and-secondments/overseas-employer-and-secondments-search/overseas-employer-and-secondments-search.component'
          ).then((r) => r.OverseasEmployerAndSecondmentsSearchComponent),
      },
      {
        path: 'work-permit/overseas_employers_and_secondments_detail',
        loadComponent: () =>
          import(
            './home/application/work-permit/overseas-employer-and-secondments/overseas-employer-and-secondments-detail/overseas-employer-and-secondments-detail.component'
          ).then((r) => r.OverseasEmployerAndSecondmentsDetailComponent),
        data: { reuse: true }
      },
      {
        path: 'work-permit/maritime_and_fishing_detail',
        loadComponent: () =>
          import(
            './home/application/work-permit/maritime-and-fishing/maritime-and-fishing-detail/maritime-and-fishing-detail.component'
          ).then((r) => r.MaritimeAndFishingDetailComponent),
        data: { reuse: true }
      },
      {
        path: 'work-permit/categories_longterm_three_years/:id',
        loadComponent: () =>
          import(
            './home/application/work-permit/categories-longterm-three-years/categories-longterm-three-years-search/categories-longterm-three-years-search.component'
          ).then((r) => r.CategoriesLongtermThreeYearsSearchComponent),
      },
      {
        path: 'work-permit/categories_longterm_three_years_detail',
        loadComponent: () =>
          import(
            './home/application/work-permit/categories-longterm-three-years/categories-longterm-three-years-detail/categories-longterm-three-years-detail.component'
          ).then((r) => r.CategoriesLongtermThreeYearsDetailComponent),
        data: { reuse: true }
      },
      {
        path: 'work-permit/view-permit-search/:id',
        loadComponent: () =>
          import(
            './home/application/work-permit/view-permit/view-permit-search/view-permit-search.component'
          ).then((r) => r.ViewPermitSearchComponent),
        data: { reuse: false }
      },
      {
        path: 'work-permit/view-permit-detail/:id',
        loadComponent: () =>
          import(
            './home/application/work-permit/view-permit/new-view-permit-detail/new-view-permit-detail.component'
          ).then((r) => r.NewViewPermitDetailComponent),
      },
      {
        path: 'work-permit/common-permit-search/:id',
        loadComponent: () =>
          import(
            './home/application/work-permit/permit-common-search/permit-common-search.component'
          ).then((r) => r.PermitCommonSearchComponent),
        data: { reuse: true }
      },
      {
        path: 'work-permit/common-permit-info/:id',
        loadComponent: () =>
          import(
            './home/application/work-permit/permit-common-info/permit-common-info.component'
          ).then((r) => r.PermitCommonInfoComponent),
      },
      {
        path: 'appeal/appeal-search/:id',
        loadComponent: () =>
          import(
            './home/application/appeal/appeal-search/appeal-search.component'
          ).then((r) => r.AppealSearchComponent),
        data: { reuse: true }
      },
      {
        path: 'appeal/appeal-detail/:id',
        loadComponent: () =>
          import(
            './home/application/appeal/appeal-detail/appeal-detail.component'
          ).then((r) => r.AppealDetailComponent),
      },
      {
        path: 'investor/investor-search/:id',
        loadComponent: () =>
          import(
            './home/application/investor-permit/investor-permit-search/investor-permit-search.component'
          ).then((r) => r.InvestorPermitSearchComponent),
        data: { reuse: true }
      },
      {
        path: 'investor/investor-detail/:id',
        loadComponent: () =>
          import(
            './home/application/investor-permit/investor-permit-detail/investor-permit-detail.component'
          ).then((r) => r.InvestorPermitDetailComponent),
      },
      {
        path: 'payment-verification/payment-verification-search',
        loadComponent: () =>
          import(
            './home/application/payment-verification/payment-verification.component'
          ).then((r) => r.PaymentVerificationComponent),
        data: { reuse: true }
      },
      {
        path: 'user-request/user-request-search',
        loadComponent: () =>
          import(
            './home/application/user-request/user-request-search/user-request-search.component'
          ).then((r) => r.UserRequestSearchComponent),
        data: { reuse: true }
      },
      {
        path: 'user-request/user-request-detail/:id',
        loadComponent: () =>
          import(
            './home/application/user-request/user-request-detail/user-request-detail.component'
          ).then((r) => r.UserRequestDetailComponent),
      },
      {
        path: 'finance/view-receipt',
        loadComponent: () =>
          import('./home/application/view-receipt/view-receipt.component').then(
            (r) => r.ViewReceiptComponent
          ),
        data: { reuse: true }
      },
      {
        path: 'finance/payment-verification',
        loadComponent: () =>
          import('./home/application/finance-report/payment-verification/payment-verification.component').then(
            (r) => r.PaymentVerificationComponent
          ),
        data: { reuse: true }
      },
      {
        path: 'investor/view-investor/search',
        loadComponent: () =>
          import(
            './home/application/investor-permit/view-investor-permit/view-investor-permit-search/view-investor-permit-search.component'
          ).then((r) => r.ViewInvestorPermitSearchComponent),
        data: { reuse: true }
      },
      {
        path: 'investor/view-investor/detail/:id',
        loadComponent: () =>
          import(
            './home/application/investor-permit/view-investor-permit/view-investor-permit-detail/view-investor-permit-detail.component'
          ).then((r) => r.ViewInvestorPermitDetailComponent),
      },
      {
        path: 'permit/permit-application/list',
        loadComponent: () =>
          import(
            './home/application/permit-application-list/permit-application-list.component'
          ).then((r) => r.PermitApplicationListComponent),
        data: { reuse: true }
      },
      {
        path: 'payment/banking-details',
        loadComponent: () =>
          import(
            './home/application/payment/banking-details/banking-details.component'
          ).then((r) => r.BankingDetailsComponent),
        data: { reuse: true }
      },
      {
        path: 'payment/offline-payment/:id',
        loadComponent: () =>
          import(
            './home/application/payment/offline-payment/offline-payment.component'
          ).then((r) => r.OfflinePaymentComponent),
        data: { reuse: true }
      },
      {
        path: 'registration/employer/qualified-employer',
        loadComponent: () =>
          import(
            './home/application/qualified-employer-list/qualified-employer-list.component'
          ).then((r) => r.QualifiedEmployerListComponent),
        data: { reuse: true }
      },
      {
        path: 'report/summary-report',
        loadComponent: () =>
          import(
            './home/application/finance-report/internal-finance-reports/internal-finance-reports.component'
          ).then((r) => r.InternalFinanceReportsComponent),
        data: { reuse: false }
      },
      {
        path: 'report/summary-detail-report/:id',
        loadComponent: () =>
          import(
            './home/application/finance-report/internal-finance-detail-report/internal-finance-detail-report.component'
          ).then((r) => r.InternalFinanceDetailReportComponent),
        data: { reuse: false }
      },
      {
        path: 'report/approve-reject',
        loadComponent: () =>
          import(
            './home/application/reports/internal-user-check/internal-user-check.component'
          ).then((r) => r.InternalUserCheckComponent),
        data: { reuse: false }
      },
      {
        path: 'report/officer-task',
        loadComponent: () =>
          import(
            './home/application/reports/officer-task-report/officer-task-report.component'
          ).then((r) => r.OfficerTaskReportComponent),
        data: { reuse: false }
      },
      {
        path: 'payment/payment-detail/:id',
        loadComponent: () =>
          import(
            './home/application/payment/payment-detail/payment-detail.component'
          ).then((r) => r.PaymentDetailComponent),
      },
      {
        path: 'report/rbl-summary-report',
        loadComponent: () =>
          import(
            './home/application/reports/rbl-summary-report/rbl-summary-report.component'
          ).then((r) => r.RblSummaryReportComponent),
        data: { reuse: false }
      },
      {
        path: 'report/rbl-summary-detail-report',
        loadComponent: () =>
          import(
            './home/application/reports/rbl-summary-detail/rbl-summary-detail.component'
          ).then((r) => r.RblSummaryDetailComponent),
        data: { reuse: false }
      },
      {
        path: 'report/approved-rejected',
        loadComponent: () =>
          import(
            './home/application/reports/approve-reject-report/approve-reject-report.component'
          ).then((r) => r.ApproveRejectReportComponent),
        data: { reuse: false }
      },
      {
        path: 'report/officer-assigned-history',
        loadComponent: () =>
          import(
            './home/application/reports/officer-assign-history/officer-assign-history.component'
          ).then((r) => r.OfficerAssignHistoryComponent),
        data: { reuse: false }
      },


      //visitor-visa
      {
        path: 'visitor-visa/visitor-visa-search/:id',
        loadComponent: () => import('./home/application/visitors-visa/visitors-visa-search/visitors-visa-search.component').then((r) => r.VisitorsVisaSearchComponent)
      },
      {
        path: 'visitor-visa/visitor-visa-extension-search',
        loadComponent: () => import('./home/application/visitors-visa/visitor-visa-extension-search/visitor-visa-extension-search.component').then((r) => r.VisitorVisaExtensionSearchComponent)
      },
      {
        path: 'visitor-visa/visitor-visa-detail/:id',
        loadComponent: () => import('./home/application/visitors-visa/visitors-visa-detail/visitors-visa-detail.component').then((r) => r.VisitorsVisaDetailComponent)
      },
      {
        path: 'visitor-visa/view-visitor-visa-search',
        loadComponent: () => import('./home/application/visitors-visa/view-visitors-visa/view-visitors-visa-search/view-visitors-visa-search.component').then((r) => r.ViewVisitorsVisaSearchComponent)
      },

      {
        path: 'visitor-visa/view-visitor-visa-detail/:id',
        loadComponent: () => import('./home/application/visitors-visa/view-visitors-visa/view-visitors-visa-detail/view-visitors-visa-detail.component').then((r) => r.ViewVisitorsVisaDetailComponent)
      },
      {
        path: 'visitor-visa/view-visitor-visa-extension-search',
        loadComponent: () => import('./home/application/visitors-visa/view-visitor-visa-extension/view-extension-search/view-extension-search.component').then((r) => r.ViewExtensionSearchComponent)
      },
      {
        path: 'visitor-visa/view-visitor-visa-extension-detail/:id',
        loadComponent: () => import('./home/application/visitors-visa/view-visitor-visa-extension/view-extension-detail/view-extension-detail.component').then((r) => r.ViewExtensionDetailComponent)
      },
      //study permit
      {
        path: 'study-permit/study-permit-search/:id',
        loadComponent: () => import('./home/application/study-permit/study-permit-search/study-permit-search.component').then((r) => r.StudyPermitSearchComponent)
      },
      {
        path: 'study-permit/study-permit-detail/:id',
        loadComponent: () => import('./home/application/study-permit/study-permit-detail/study-permit-detail.component').then((r) => r.StudyPermitDetailComponent)
      },
      {
        path: 'study-permit/view-study-permit-search',
        loadComponent: () => import('./home/application/study-permit/view-study-permit-search/view-study-permit-search.component').then((r) => r.ViewStudyPermitSearchComponent)
      },
      {
        path: 'study-permit/view-study-permit-detail/:id',
        loadComponent: () => import('./home/application/study-permit/view-study-permit-detail/view-study-permit-detail.component').then((r) => r.ViewStudyPermitDetailComponent)
      },

      // resident permit
      {
        path: 'resident-permit/resident-permit-search/:id',
        loadComponent: () => import('./home/application/resident-permit/resident-permit-search/resident-permit-search.component').then((r) => r.ResidentPermitSearchComponent)
      },
      {
        path: 'resident-permit/resident-permit-detail/:id',
        loadComponent: () => import('./home/application/resident-permit/resident-permit-detail/resident-permit-detail.component').then((r) => r.ResidentPermitDetailComponent)
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
