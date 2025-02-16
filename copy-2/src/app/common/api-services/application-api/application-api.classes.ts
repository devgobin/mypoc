export class entAddress {
  addressId = 0;
         referenceTypeId = 0;
         referenceTypeValue = '';
         postBoxNoLocation = '';
         address = '';
         countryId = 0;
         countryValue = '';
         country = '';
         provinceId = 0;
         provinceValue = '';
         provinceState = '';
         islandId = 0;
         islandValue = '';
         islandDistrict = '';
         tikinaId = 0;
         tikinaValue = '';
         cityTown = '';
         cityVillageId = 0;
         cityVillageValue = '';
         line1 = '';
         line2 = '';
         latitude = '';
         longitude = '';
         referenceId = 0;
         islandDescription = '';
         provinceDescription = '';
         countryDescription = '';
         tikinaDescription = '';
         cityVillageDescription = '';
         previousUpdateSeq = 0;
         existingData = '';
         countryType = '';
         addressType = '';
         fullAddress = '';
         idoObjState = '';
         updateSeq = 0;
         msg = new entIEMessage();
         line3 = '';
         mIslandId = 0;
         mProvinceId = 0;
         mTikinaId = 0;
         mVillageId = 0;
         mDivisionId = 0;
         divisionDescription = '';
         cityName = '';
        
}

export class entAgent {
  agentId = 0;
         agentNo = '';
         organizationName = '';
         organizationTypeId = 0;
         organizationTypeValue = '';
         industryTypeId = 0;
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         addressId = 0;
         approvedDate = '';
         website = '';
         employerId = 0;
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         organizationTypeDescription = '';
         industryTypeDescription = '';
         plstentAgentContact: any = [];
         plstentAgentDocuments: any = [];
         pentAgentLogo = new entAgentLogo();
         otherIndustryType = '';
         folderId = 0;
         pentAddress = new entAddress();
         registrationDate = '';
         agentRegistrationId = 0;
         statusId = 0;
         statusValue = '';
         statusDescription = '';
         plstentAgentComments: any = [];
         pentPhotoFile = new entPhotoFile();
         photoFileId = 0;
         token = '';
         totalApplicationCount = 0;
         totalApprovedCount = 0;
         totalRejectedCount = 0;
         approvedPercentage = '';
         rejectPercentage = '';
         pendingPercentage = '';
        
}

export class entAgentComments {
  agentCommentsId = 0;
         agentId = 0;
         comments = '';
         enteredBy = '';
         enteredDate = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         enteredByFullName = '';
        
}

export class entAgentContact {
  agentContactId = 0;
         agentId = 0;
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         contactPhoneNumber = '';
         contactTypeId = 0;
         contactTypeValue = '';
         addressId = 0;
         statusId = 0;
         statusValue = '';
         verifiedEmailId = '';
         verifiedMobileNo = '';
         password = '';
         passwordLastChangedDate = '';
         changePassword = '';
         otp = 0;
         otpSentDatetime = '';
         otpVerified = '';
         isLocked = '';
         retryPasswordCount = 0;
         urlSentDatetime = '';
         currentLoginDatetime = '';
         lastLoginDatetime = '';
         twoFaEnabled = '';
         twoFaModeId = 0;
         twoFaModeValue = '';
         twoFaEmailId = '';
         twoFaMobileNo = '';
         twoFaPasscode = '';
         twoFaVerifiedFlag = '';
         termsConditionAccepted = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         contactTypeDescription = '';
         statusDescription = '';
         pentAddress = new entAddress();
         effectiveDate = '';
         contactDesingation = '';
         encryptionToken: any = [];
         newPassword = '';
         confirmPassword = '';
         endDate = '';
         tempOtp = 0;
         currentPassword = '';
         pentPhotoFile = new entPhotoFile();
         photoFileId = 0;
         token = '';
        
}

export class entAgentDocuments {
  agentDocumentId = 0;
         agentId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         isVerified = '';
         verifiedBy = '';
         verifiedDate = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         documentTypeDescription = '';
         verifiedByFullName = '';
         pentDocumentFile = new entDocumentFile();
         uploadedDate = '';
        
}

export class entAgentLogo {
  agentLogoId = 0;
         agentId = 0;
         logo = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entAgentRegistration {
  agentRegistrationId = 0;
         agentRegistrationRefNo = '';
         organizationName = '';
         organizationTypeId = 0;
         organizationTypeValue = '';
         industryTypeId = 0;
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         statusId = 0;
         statusValue = '';
         addressId = 0;
         approvedDate = '';
         workFlowId = 0;
         registrationPrinted = '';
         oldValue = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         organizationTypeDescription = '';
         industryTypeDescription = '';
         statusDescription = '';
         plstentAgentRegistrationContact: any = [];
         plstentAgentRegistrationNotes: any = [];
         plstentAgentRegistrationAssignedOfficerHistory: any = [];
         plstentAgentRegistrationStatusHistory: any = [];
         plstentAgentRegistrationEmailHistory: any = [];
         plstentAgentRegistrationChecklist: any = [];
         plstentAgentRegistrationSearch: any = [];
         ientAddress = new entAddress();
         ientAgentRegistrationPrimaryContact = new entAgentRegistrationContact();
         plstentAgentRegistrationDocument: any = [];
         otherIndustryType = '';
         folderId = 0;
         strExpiryComment = '';
         agentNo = '';
         registrationDate = '';
         blnShowSelfAssignBtn = '';
         blnShowReAssignBtn = '';
         readOnly = '';
         fullAccess = '';
         blnIsAssignedOfficer = '';
         isDocumentUploaded = '';
        
}

export class entAgentRegistrationAssignedOfficerHistory {
  agentRegistrationAssignedOfficerHistoryId = 0;
         agentRegistrationId = 0;
         assignedBy = '';
         assignedDate = '';
         assignedTo = '';
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         statusDescription = '';
         assignedToFullName = '';
         assignedByFullName = '';
         plstuserlist = new entUserList();
         tat = '';
         workedTatInDays = 0;
         workedTatInHours = 0;
         workedTatInMinutes = 0;
        
}

export class entAgentRegistrationChecklist {
  agentRegistrationChecklistId = 0;
         agentRegistrationId = 0;
         checklistTypeId = 0;
         checklistTypeValue = '';
         comments = '';
         isChecked = '';
         checkedBy = '';
         checkedDate = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         checklistTypeDescription = '';
         checkedByFullName = '';
        
}

export class entAgentRegistrationContact {
  agentRegistrationContactId = 0;
         agentRegistrationId = 0;
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         contactPhoneNumber = '';
         contactDesignation = '';
         addressId = 0;
         oldValue = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         ientAddress = new entAddress();
        
}

export class entAgentRegistrationDocument {
  agentRegistrationDocumentId = 0;
         agentRegistrationId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         isVerified = '';
         comment = '';
         referenceId = 0;
         documentTypeDescription = '';
         ientDocumentFile = new entDocumentFile();
         isforForigner = false;
         dmsFolderID = 0;
         idoObjState = '';
         updateSeq = 0;
         msg = new entIEMessage();
         strExpiryComment = '';
         uploadedDate = '';
         plstentAgentRegistrationDocumentRejectionReason: any = [];
         documentStatusId = 0;
         documentStatusValue = '';
         documentStatusDescription = '';
         verifiedBy = '';
         verifiedByFullName = '';
         verifiedDate = '';
         pentDDLData = new entDDLClass();
        
}

export class entAgentRegistrationDocumentList {
  plstentAgentRegistrationDocument: any = [];
         msg = new entIEMessage();
        
}

export class entAgentRegistrationDocumentRejectionReason {
  agentRegistrationDocumentRejectionReasonId = 0;
         agentRegistrationDocumentId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         otherReason = '';
         reasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entAgentRegistrationEmailHistory {
  agentRegistrationEmailHistoryId = 0;
         agentRegistrationId = 0;
         emailTrackingId = 0;
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         statusDescription = '';
         pentCommunicationTracking = new entCommunicationTracking();
         sentByFullName = '';
        
}

export class entAgentRegistrationNotes {
  agentRegistrationNotesId = 0;
         agentRegistrationId = 0;
         notes = '';
         statusId = 0;
         statusValue = '';
         enteredBy = '';
         enteredDate = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         statusDescription = '';
         enteredByFullName = '';
         plstApplicationStatus: any = [];
         plstentAgentRegistrationNotesRejectionReason: any = [];
        
}

export class entAgentRegistrationNotesRejectionReason {
  agentRegistrationNotesRejectionReasonId = 0;
         agentRegistrationNotesId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         otherReason = '';
         reasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entAgentRegistrationSearch {
  agentRegistrationSearchId = 0;
         agentRegistrationId = 0;
         searchDatetime = '';
         statusId = 0;
         statusValue = '';
         internalRegistrationStatusId = 0;
         internalRegistrationStatusValue = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         statusDescription = '';
         internalRegistrationStatusDescription = '';
        
}

export class entAgentRegistrationSearchResults {
  plstentAgentRegistrationSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         modifiedBy = '';
        
}

export class entAgentRegistrationSearchResultset {
  agentRegistrationId = 0;
         agentRegistrationRefNo = '';
         organizationName = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         statusValue = '';
         approvedDate = '';
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         organizationTypeValue = '';
         completedTatMinutes = 0;
         totalTatMinutes = 0;
         colorCode = '';
        
}

export class entAgentRegistrationSearchscreen {
  agentRegistrationId = '';
         registrationRefNo = '';
         organizationName = '';
         organizationTypeValue = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         statusValue = '';
         approvedDateFrom = '';
         approvedDateTo = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entAgentRegistrationStatusHistory {
  agentRegistrationStatusHistoryId = 0;
         agentRegistrationId = 0;
         statusId = 0;
         statusValue = '';
         changedBy = '';
         changedDate = '';
         tatInHours = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         statusDescription = '';
         changedByFullName = '';
         workedTatInDays = 0;
         workedTatInHours = 0;
         workedTatInMinutes = 0;
        
}

export class entAgentSearch {
  agentNo = '';
         organizationName = '';
         organizationTypeValue = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         agentId = 0;
         statusValue = '';
        
}

export class entAgentSearchResult {
  plstentAgentSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entAgentSearchResultset {
  agentId = 0;
         agentNo = '';
         organizationName = '';
         organizationTypeDescription = '';
         industryTypeDescription = '';
         emailId = '';
         contactNumber = '';
         appliedApplicationCount = 0;
         statusDescription = '';
         statusValue = '';
        
}

export class entAppealApplicationRequiredInformation {
  appealApplicationRequiredInformationId = 0;
         permitApplicationId = 0;
         comments = '';
         reasonForRejection = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         plstentAppealApplicationRequiredDocuments: any = [];
         plstentPermitApplicationRecommendationRejectReason: any = [];
         plstentInvestorAppealApplicationRequiredDocuments: any = [];
         plstentVisitorsVisaApplicationDocuments: any = [];
         plstentStudyPermitApplicationDocuments: any = [];
         plstentResidentPermitApplicationDocuments: any = [];
        
}

export class entApplicationApprovedRejectedCountDetailReport {
  permitApplicationId = 0;
         permitApplicationNo = '';
         employerOrIndividualName = '';
         applicantPassportNumber = '';
         applicationStatus = '';
         submittedDate = '';
         paymentDate = '';
         approvedOrRejectedDate = '';
         completedTat = 0;
         totalTat = 0;
         applicantName = '';
        
}

export class entApplicationApprovedRejectedCountReport {
  totalCount = 0;
         totalApprovedCount = 0;
         totalRejectedCount = 0;
         totalAppealCount = 0;
         averageTatInDays = 0;
         plstentApplicationApprovedRejectedCountDetailReport: any = [];
         msg = new entIEMessage();
        
}

export class entApplicationApprovedRejectedCountReportSearch {
  permitApplicationNo = '';
         employerOrIndividualName = '';
         applicantPassportNumber = '';
         applicationStatusValue = '';
         submittedDateFrom = '';
         submittedDateTo = '';
         paymentDateFrom = '';
         paymentDateTo = '';
         approvedOrRejectedDateFrom = '';
         approvedOrRejectedDateTo = '';
         completedTatFrom = 0;
         completedTatTo = 0;
         applicantName = '';
         fileFormat = '';
        
}

export class entBasedOnBothProviderTypeAnddate {
  lstentBasedOnProviderTypeAndDate: any = [];
         lentBasedOnProviderType = new entBasedOnProviderType();
        
}

export class entBasedOnProviderType {
  mpaisa = '';
         mpaisaCharges = '';
         mpaisaTotal = '';
         master = '';
         masterCharges = '';
         masterTotal = '';
         visa = '';
         visaCharges = '';
         visaTotal = '';
         bspDebitCard = '';
         bspDebitCardCharges = '';
         bspDebitCardTotal = '';
         totalWithCharges = '';
        
}

export class entBasedOnProviderTypeAndDate {
  transactionDate = '';
         mpaisa = '';
         mpaisaCharges = '';
         mpaisaTotal = '';
         master = '';
         masterCharges = '';
         masterTotal = '';
         visa = '';
         visaCharges = '';
         visaTotal = '';
         bspDebitCard = '';
         bspDebitCardCharges = '';
         bspDebitCardTotal = '';
         totalWithCharges = '';
         startDate = '';
         endDate = '';
        
}

export class entByteData {
  byteData: any = [];
         msg = new entIEMessage();
         contentType = '';
         fileName = '';
        
}

export class entCommunicationTracking {
  communicationTrackingId = 0;
         fromEmailId = '';
         toEmailId = '';
         ccEmailIds = '';
         bccEmailIds = '';
         sentDate = '';
         sentStatusId = 0;
         sentStatusValue = '';
         mailContent = '';
         referenceId = 0;
         sentStatusDescription = '';
         modifiedBy = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entConfig {
  configSerialId = 0;
         configId = 0;
         configValue = '';
         configDescription = '';
         modifiedBy = '';
         updateSeq = 0;
         idoObjState = '';
         configValueList: any = [];
         msg = new entIEMessage();
        
}

export class entConfigMetaData {
  configMetaDataId = 0;
         metaDataName = '';
         metaDataType = '';
         metaDataValue = '';
         configValueSerialId = 0;
         msg = new entIEMessage();
         referenceId = 0;
         modifiedBy = '';
         updateSeq = 0;
         idoObjState = '';
         metaDataDescription = '';
        
}

export class entConfigValue {
  configId = 0;
         configConstant = '';
         configConstDescription = '';
         configValueSerialId = 0;
         referenceId = 0;
         modifiedBy = '';
         updateSeq = 0;
         idoObjState = '';
         configMetaDataList: any = [];
         msg = new entIEMessage();
         config = new entConfig();
         configmetaData = new entConfigMetaData();
         lstConfigValue: any = [];
         metaDataValue = '';
        
}

export class entCreateApplicationBasedonQuestionaries {
  applicationTypeQuestioner = '';
         applicantEmployedWithOrganiaztionQuestioner = '';
         applyingPeriod = '';
         industryTypeQuestioner = '';
         applicantTypeQuestioner = '';
         intData1 = 0;
         intData2 = 0;
         intData3 = 0;
         strData1 = '';
         strData2 = '';
         strData3 = '';
         strData4 = '';
         strData5 = '';
         longData1 = 0;
         longData2 = 0;
         longData3 = 0;
         msg = new entIEMessage();
         strData6 = '';
         strData7 = '';
         strData8 = '';
         strData9 = '';
        
}

export class entCredential {
  companyId = 0;
         password = '';
         token: any = [];
         clientcode = '';
         mPin = '';
         emailId = '';
         newPassword = '';
         confirmPassword = '';
         urlDate = '';
         confirmMPin = 0;
         userLoginId = '';
         userSerialId = 0;
         pin = '';
         isPinValidation = '';
         isPasswordValidation = '';
         languagePreference = '';
         screenName = '';
         oldPassword = '';
         msg = new entIEMessage();
         clinetName = '';
         applicationEmailUrl = '';
        
}

export class entDDL {
  key = '';
         value: any = [];
         msg = new entIEMessage();
        
}

export class entDDLClass {
  id = 0;
         code = '';
         description = '';
         name = '';
         parentConstant = '';
         constant = '';
         fullName = '';
         vendorContactNo = '';
         vendorCode = '';
         vendorLegacyCode = '';
         stritemtype = '';
         ledgerId = 0;
         lstDDLClass: any = [];
         msg = new entIEMessage();
         flag1 = false;
         flag2 = false;
         flag3 = false;
        
}

export class entDDLData {
  data: any = [];
         count1 = '';
         count2 = '';
         msg = new entIEMessage();
        
}

export class entDetailForProviderTypeAndDate {
  permitApplicationNo = '';
         applicantName = '';
         employerIndividualName = '';
         paymentTransactionNo = '';
         walletBank = '';
         provider = '';
         transactionAmount = '';
         transactionFees = '';
         totalTransactionAmount = '';
         transactionInitiationTime = '';
         startDate = '';
         endDate = '';
        
}

export class entDetailForProviderTypeAndDateList {
  ilstentDetailForProviderTypeAndDate: any = [];
        
}

export class entDocumentFile {
  documentFileId = 0;
         referenceTypeId = 0;
         referenceTypeValue = '';
         relativePath = '';
         fileContent = '';
         documentSize = '';
         documentType = '';
         documentFileName = '';
         idoObjState = '';
         updateSeq = 0;
         createdBy = '';
         createdDate = '';
         msg = new entIEMessage();
         previousDocumentFileName = '';
         dmsRefNo = '';
         dmsFolderId = 0;
         sourceId = 0;
         sourceReferenceNo = '';
        
}

export class entEmbassy {
  embassyId = 0;
         embassyRegistrationId = 0;
         organizationName = '';
         organizationTypeId = 0;
         organizationTypeValue = '';
         industryTypeId = 0;
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         addressId = 0;
         hasForeignShareholder = '';
         website = '';
         referenceId = 0;
         organizationTypeDescription = '';
         industryTypeDescription = '';
         plstentEmbassyContacts: any = [];
         plstentEmbassyDocuments: any = [];
         plstentEmbassyAgentLink: any = [];
         pentEmbassyLogo = new entEmbassyLogo();
         embassyNo = '';
         otherIndustryType = '';
         folderId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         totalApplicationCount = 0;
         totalApprovedCount = 0;
         totalRejectedCount = 0;
         pentAddress = new entAddress();
         registrationDate = '';
         plstentAgent: any = [];
         pentPhotoFile = new entPhotoFile();
         statusId = 0;
         statusValue = '';
         statusDescription = '';
         plstentEmbassyComments: any = [];
         photoFileId = 0;
         isQualifiedEmbassy = '';
         token = '';
         approvedPercentage = '';
         rejectPercentage = '';
         pendingPercentage = '';
         embassyTypeId = 0;
         embassyTypeValue = '';
         embassyTypeDescription = '';
         isListedEmbassy = '';
         otherEmbassyType = '';
        
}

export class entEmbassyAgentLink {
  embassyAgentLinkId = 0;
         embassyId = 0;
         agentId = 0;
         agentRefNo = '';
         linkedDate = '';
         linkedBy = '';
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         statusDescription = '';
         linkedByFullName = '';
         pentEmbassyAgentLinkSearchResult = new entEmbassyAgentLinkSearchResult();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         pentAgent = new entAgent();
         startDate = '';
         endDate = '';
        
}

export class entEmbassyAgentLinkSearch {
  embassyId = 0;
         agentNo = '';
         organizationName = '';
         linkedDateFrom = '';
         linkedDateTo = '';
         statusValue = '';
         emailId = '';
         contactNumber = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         contactSurName = '';
         contactFirstName = '';
         startDateTo = '';
         endDateFrom = '';
         endDateTo = '';
         startDateFrom = '';
        
}

export class entEmbassyAgentLinkSearchResult {
  plstentEmbassyAgentLinkSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entEmbassyAgentLinkSearchResultset {
  embassyAgentLinkId = 0;
         agentNo = '';
         organizationName = '';
         contactNumber = '';
         linkedDate = '';
         linkedByFullName = '';
         startDate = '';
         endDate = '';
         statusDescription = '';
         emailId = '';
         agentId = 0;
        
}

export class entEmbassyComments {
  embassyCommentsId = 0;
         embassyId = 0;
         comments = '';
         enteredBy = '';
         enteredDate = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         enteredByFullName = '';
        
}

export class entEmbassyContactPermitType {
  embassyContactPermitTypeId = 0;
         embassyContactId = '';
         contactPermitTypeId = '';
         contactPermitTypeValue = '';
         isChecked = '';
         contactPermitTypeDescription = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entEmbassyContacts {
  embassyContactId = 0;
         embassyId = 0;
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         contactPhoneNumber = '';
         contactDesingation = '';
         addressId = 0;
         statusId = 0;
         statusValue = '';
         contactTypeId = 0;
         contactTypeValue = '';
         verifiedEmailId = '';
         verifiedMobileNo = '';
         password = '';
         passwordLastChangedDate = '';
         changePassword = '';
         otp = 0;
         otpSentDatetime = '';
         otpVerified = '';
         isLocked = '';
         retryPasswordCount = 0;
         urlSentDatetime = '';
         currentLoginDatetime = '';
         lastLoginDatetime = '';
         twoFaEnabled = '';
         twoFaModeId = 0;
         twoFaModeValue = '';
         twoFaEmailId = '';
         twoFaMobileNo = '';
         twoFaPasscode = '';
         twoFaVerifiedFlag = '';
         termsConditionAccepted = '';
         referenceId = 0;
         statusDescription = '';
         contactTypeDescription = '';
         twoFaModeDescription = '';
         pentEmbassyContactsSearchResult = new entEmbassyContactsSearchResult();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         pentAddress = new entAddress();
         effectiveDate = '';
         encryptionToken: any = [];
         newPassword = '';
         confirmPassword = '';
         pentPhotoFile = new entPhotoFile();
         endDate = '';
         tempOtp = 0;
         currentPassword = '';
         photoFileId = 0;
         token = '';
         plstentEmbassyContactPermitType: any = [];
        
}

export class entEmbassyContactsSearchResult {
  plstentEmbassyContactsSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entEmbassyContactsSearchResultset {
  embassyContactId = 0;
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         contactPhoneNumber = '';
         effectiveDate = '';
         statusDescription = '';
         contactTypeDescription = '';
         endDate = '';
        
}

export class entEmbassyDocuments {
  embassyDocumentId = 0;
         embassyId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         isVerified = '';
         verifiedBy = '';
         verifiedDate = '';
         referenceId = 0;
         documentTypeDescription = '';
         verifiedByFullName = '';
         pentDocumentFile = new entDocumentFile();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         isforForigner = false;
         uploadedDate = '';
         strExpiryComment = '';
        
}

export class entEmbassyLogo {
  embassyLogoId = 0;
         embassyId = 0;
         logo = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entEmbassyRegistration {
  embassyRegistrationId = 0;
         registrationRefNo = '';
         organizationName = '';
         organizationTypeId = 0;
         organizationTypeValue = '';
         industryTypeId = 0;
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         statusId = 0;
         statusValue = '';
         addressId = 0;
         approvedDate = '';
         workFlowId = 0;
         hasForeignShareholder = '';
         registrationPrinted = '';
         referenceId = 0;
         organizationTypeDescription = '';
         industryTypeDescription = '';
         statusDescription = '';
         plstentEmbassyRegistrationDocument: any = [];
         plstentEmbassyRegistrationContacts: any = [];
         plstentEmbassyRegistrationNotes: any = [];
         plstentEmbassyRegistrationAssignedOfficerHistory: any = [];
         plstentEmbassyRegistrationStatusHistory: any = [];
         plstentEmbassyRegistrationEmailHistory: any = [];
         plstentEmbassyRegistrationChecklist: any = [];
         plstentEmbassyRegistrationSearch: any = [];
         ientAddress = new entAddress();
         ientEmbassyRegistrationPrimaryContacts = new entEmbassyRegistrationContacts();
         msg = new entIEMessage();
         otherIndustryType = '';
         folderId = 0;
         idoObjState = '';
         updateSeq = 0;
         strExpiryComment = '';
         embassyNo = '';
         registrationDate = '';
         blnShowSelfAssignBtn = '';
         blnShowReAssignBtn = '';
         readOnly = '';
         fullAccess = '';
         blnIsAssignedOfficer = '';
         isDocumentUploaded = '';
         nationalityId = 0;
         nationalityValue = '';
         nationalityDescription = '';
         embassyTypeId = 0;
         embassyTypeValue = '';
         embassyTypeDescription = '';
         isListedEmbassy = '';
         otherEmbassyType = '';
        
}

export class entEmbassyRegistrationAssignedOfficerHistory {
  embassyRegistrationAssignedOfficerHistoryId = 0;
         embassyRegistrationId = 0;
         assignedBy = '';
         assignedDate = '';
         assignedTo = '';
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         statusDescription = '';
         assignedByFullName = '';
         assignedToFullName = '';
         idoObjState = '';
         updateSeq = 0;
         msg = new entIEMessage();
         plstuserlist = new entUserList();
         tat = '';
         workedTatInDays = 0;
         workedTatInHours = 0;
         workedTatInMinutes = 0;
        
}

export class entEmbassyRegistrationChecklist {
  embassyRegistrationChecklistId = 0;
         embassyRegistrationId = 0;
         checklistTypeId = 0;
         checklistTypeValue = '';
         comments = '';
         isChecked = '';
         checkedBy = '';
         checkedDate = '';
         referenceId = 0;
         checklistTypeDescription = '';
         checkedByFullName = '';
         idoObjState = '';
         updateSeq = 0;
         msg = new entIEMessage();
        
}

export class entEmbassyRegistrationContacts {
  embassyRegistrationContactId = 0;
         embassyRegistrationId = 0;
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         contactPhoneNumber = '';
         contactDesignation = '';
         contactAddressId = 0;
         referenceId = 0;
         statusDescription = '';
         ientAddress = new entAddress();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entEmbassyRegistrationDocument {
  embassyRegistrationDocumentId = 0;
         embassyRegistrationId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         isVerified = '';
         comment = '';
         referenceId = 0;
         documentTypeDescription = '';
         ientDocumentFile = new entDocumentFile();
         isforForigner = false;
         dmsFolderID = 0;
         idoObjState = '';
         updateSeq = 0;
         msg = new entIEMessage();
         strExpiryComment = '';
         uploadedDate = '';
         plstentEmbassyRegistrationDocumentRejectionReason: any = [];
         documentStatusId = 0;
         documentStatusValue = '';
         documentStatusDescription = '';
         verifiedBy = '';
         verifiedByFullName = '';
         verifiedDate = '';
         pentDDLData = new entDDLClass();
        
}

export class entEmbassyRegistrationDocumentList {
  plstentEmbassyRegistrationDocument: any = [];
         msg = new entIEMessage();
        
}

export class entEmbassyRegistrationDocumentRejectionReason {
  embassyRegistrationDocumentRejectionReasonId = 0;
         embassyRegistrationDocumentId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         otherReason = '';
         reasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entEmbassyRegistrationEmailHistory {
  embassyRegistrationEmailHistoryId = 0;
         embassyRegistrationId = 0;
         emailTrackingId = 0;
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         statusDescription = '';
         idoObjState = '';
         updateSeq = 0;
         pentCommunicationTracking = new entCommunicationTracking();
         sentByFullName = '';
        
}

export class entEmbassyRegistrationNotes {
  embassyRegistrationNotesId = 0;
         embassyRegistrationId = 0;
         notes = '';
         statusId = 0;
         statusValue = '';
         enteredBy = '';
         enteredDate = '';
         referenceId = 0;
         statusDescription = '';
         enteredByFullName = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         plstApplicationStatus: any = [];
         plstentEmbassyRegistrationNotesRejectionReason: any = [];
        
}

export class entEmbassyRegistrationNotesRejectionReason {
  embassyRegistrationNotesRejectionReasonId = 0;
         embassyRegistrationNotesId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         otherReason = '';
         reasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entEmbassyRegistrationSearch {
  embassyRegistrationSearchId = 0;
         embassyRegistrationId = 0;
         searchDatetime = '';
         statusId = 0;
         statusValue = '';
         internalRegistrationStatusId = 0;
         internalRegistrationStatusValue = '';
         referenceId = 0;
         statusDescription = '';
         internalRegistrationStatusDescription = '';
         idoObjState = '';
         updateSeq = 0;
        
}

export class entEmbassyRegistrationSearchResults {
  plstentEmbassyRegistrationSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         modifiedBy = '';
        
}

export class entEmbassyRegistrationSearchResultset {
  embassyRegistrationId = 0;
         registrationRefNo = '';
         organizationName = '';
         organizationTypeValue = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         statusValue = '';
         approvedDate = '';
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         completedTatMinutes = 0;
         totalTatMinutes = 0;
         colorCode = '';
        
}

export class entEmbassyRegistrationSearchscreen {
  embassyRegistrationId = '';
         registrationRefNo = '';
         organizationName = '';
         organizationTypeValue = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         statusValue = '';
         approvedDateFrom = '';
         approvedDateTo = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entEmbassyRegistrationStatusHistory {
  embassyRegistrationStatusHistoryId = 0;
         embassyRegistrationId = 0;
         statusId = 0;
         statusValue = '';
         changedBy = '';
         changedDate = '';
         tatInHours = '';
         referenceId = 0;
         statusDescription = '';
         changedByFullName = '';
         idoObjState = '';
         updateSeq = 0;
         totalTat = 0;
         workedTatInDays = 0;
         workedTatInHours = 0;
         workedTatInMinutes = 0;
        
}

export class entEmbassySearch {
  embassyNo = '';
         organizationName = '';
         organizationTypeValue = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         embassyId = 0;
         statusValue = '';
        
}

export class entEmbassySearchResult {
  plstentEmbassySearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entEmbassySearchResultset {
  embassyId = 0;
         embassyNo = '';
         organizationName = '';
         organizationTypeDescription = '';
         industryTypeDescription = '';
         emailId = '';
         contactNumber = '';
         appliedApplicationCount = 0;
         statusDescription = '';
         statusValue = '';
        
}

export class entEmployer {
  employerId = 0;
         employerRegistrationId = 0;
         organizationName = '';
         organizationTypeId = 0;
         organizationTypeValue = '';
         industryTypeId = 0;
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         addressId = 0;
         hasForeignShareholder = '';
         website = '';
         referenceId = 0;
         organizationTypeDescription = '';
         industryTypeDescription = '';
         plstentEmployerContacts: any = [];
         plstentEmployerDocuments: any = [];
         plstentEmployerAgentLink: any = [];
         pentEmployerLogo = new entEmployerLogo();
         employerNo = '';
         otherIndustryType = '';
         folderId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         totalApplicationCount = 0;
         totalApprovedCount = 0;
         totalRejectedCount = 0;
         pentAddress = new entAddress();
         registrationDate = '';
         plstentAgent: any = [];
         pentPhotoFile = new entPhotoFile();
         statusId = 0;
         statusValue = '';
         statusDescription = '';
         plstentEmployerComments: any = [];
         photoFileId = 0;
         isQualifiedEmployer = '';
         token = '';
         approvedPercentage = '';
         rejectPercentage = '';
         pendingPercentage = '';
        
}

export class entEmployerAgentLink {
  employerAgentLinkId = 0;
         employerId = 0;
         agentId = 0;
         agentRefNo = '';
         linkedDate = '';
         linkedBy = '';
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         statusDescription = '';
         linkedByFullName = '';
         pentEmployerAgentLinkSearchResult = new entEmployerAgentLinkSearchResult();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         pentAgent = new entAgent();
         startDate = '';
         endDate = '';
         plstentEmployerAgentLinkPermitType: any = [];
        
}

export class entEmployerAgentLinkPermitType {
  employerAgentLinkPermitTypeId = 0;
         employerAgentLinkId = 0;
         contactPermitTypeId = '';
         contactPermitTypeValue = '';
         isChecked = '';
         contactPermitTypeDescription = '';
         agentId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entEmployerAgentLinkSearch {
  employerId = 0;
         agentNo = '';
         organizationName = '';
         linkedDateFrom = '';
         linkedDateTo = '';
         statusValue = '';
         emailId = '';
         contactNumber = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         contactSurName = '';
         contactFirstName = '';
         startDateTo = '';
         endDateFrom = '';
         endDateTo = '';
         startDateFrom = '';
        
}

export class entEmployerAgentLinkSearchResult {
  plstentEmployerAgentLinkSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entEmployerAgentLinkSearchResultset {
  employerAgentLinkId = 0;
         agentNo = '';
         organizationName = '';
         contactNumber = '';
         linkedDate = '';
         linkedByFullName = '';
         startDate = '';
         endDate = '';
         statusDescription = '';
         emailId = '';
         agentId = 0;
        
}

export class entEmployerComments {
  employerCommentsId = 0;
         employerId = 0;
         comments = '';
         enteredBy = '';
         enteredDate = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         enteredByFullName = '';
        
}

export class entEmployerContactPermitType {
  employerContactPermitTypeId = 0;
         employerContactId = 0;
         contactPermitTypeId = '';
         contactPermitTypeValue = '';
         isChecked = '';
         contactPermitTypeDescription = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entEmployerContacts {
  employerContactId = 0;
         employerId = 0;
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         contactPhoneNumber = '';
         contactDesingation = '';
         addressId = 0;
         statusId = 0;
         statusValue = '';
         contactTypeId = 0;
         contactTypeValue = '';
         verifiedEmailId = '';
         verifiedMobileNo = '';
         password = '';
         passwordLastChangedDate = '';
         changePassword = '';
         otp = 0;
         otpSentDatetime = '';
         otpVerified = '';
         isLocked = '';
         retryPasswordCount = 0;
         urlSentDatetime = '';
         currentLoginDatetime = '';
         lastLoginDatetime = '';
         twoFaEnabled = '';
         twoFaModeId = 0;
         twoFaModeValue = '';
         twoFaEmailId = '';
         twoFaMobileNo = '';
         twoFaPasscode = '';
         twoFaVerifiedFlag = '';
         termsConditionAccepted = '';
         referenceId = 0;
         statusDescription = '';
         contactTypeDescription = '';
         twoFaModeDescription = '';
         pentEmployerContactsSearchResult = new entEmployerContactsSearchResult();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         pentAddress = new entAddress();
         effectiveDate = '';
         encryptionToken: any = [];
         newPassword = '';
         confirmPassword = '';
         pentPhotoFile = new entPhotoFile();
         endDate = '';
         tempOtp = 0;
         currentPassword = '';
         photoFileId = 0;
         token = '';
         plstentEmployerContactPermitType: any = [];
        
}

export class entEmployerContactsSearchResult {
  plstentEmployerContactsSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entEmployerContactsSearchResultset {
  employerContactId = 0;
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         contactPhoneNumber = '';
         effectiveDate = '';
         statusDescription = '';
         contactTypeDescription = '';
         endDate = '';
        
}

export class entEmployerDocuments {
  employerDocumentId = 0;
         employerId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         isVerified = '';
         verifiedBy = '';
         verifiedDate = '';
         referenceId = 0;
         documentTypeDescription = '';
         verifiedByFullName = '';
         pentDocumentFile = new entDocumentFile();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         isforForigner = false;
         uploadedDate = '';
         strExpiryComment = '';
        
}

export class entEmployerLogo {
  employerLogoId = 0;
         employerId = 0;
         logo = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entEmployerPersonEmployedPositionDetail {
  employerPersonEmployedPositionDetailId = 0;
         workPermitApplicationEmployerDetailId = 0;
         isLocal = '';
         numberOfEmployee = 0;
         position = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entEmployerRegistration {
  employerRegistrationId = 0;
         registrationRefNo = '';
         organizationName = '';
         organizationTypeId = 0;
         organizationTypeValue = '';
         industryTypeId = 0;
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         statusId = 0;
         statusValue = '';
         addressId = 0;
         approvedDate = '';
         workFlowId = 0;
         hasForeignShareholder = '';
         registrationPrinted = '';
         referenceId = 0;
         organizationTypeDescription = '';
         industryTypeDescription = '';
         statusDescription = '';
         plstentEmployerRegistrationDocument: any = [];
         plstentEmployerRegistrationContacts: any = [];
         plstentEmployerRegistrationNotes: any = [];
         plstentEmployerRegistrationAssignedOfficerHistory: any = [];
         plstentEmployerRegistrationStatusHistory: any = [];
         plstentEmployerRegistrationEmailHistory: any = [];
         plstentEmployerRegistrationChecklist: any = [];
         plstentEmployerRegistrationSearch: any = [];
         ientAddress = new entAddress();
         ientEmployerRegistrationPrimaryContacts = new entEmployerRegistrationContacts();
         msg = new entIEMessage();
         otherIndustryType = '';
         folderId = 0;
         idoObjState = '';
         updateSeq = 0;
         strExpiryComment = '';
         employerNo = '';
         registrationDate = '';
         blnShowSelfAssignBtn = '';
         blnShowReAssignBtn = '';
         readOnly = '';
         fullAccess = '';
         blnIsAssignedOfficer = '';
         isDocumentUploaded = '';
        
}

export class entEmployerRegistrationAssignedOfficerHistory {
  employerRegistrationAssignedOfficerHistoryId = 0;
         employerRegistrationId = 0;
         assignedBy = '';
         assignedDate = '';
         assignedTo = '';
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         statusDescription = '';
         assignedByFullName = '';
         assignedToFullName = '';
         idoObjState = '';
         updateSeq = 0;
         msg = new entIEMessage();
         plstuserlist = new entUserList();
         tat = '';
         workedTatInDays = 0;
         workedTatInHours = 0;
         workedTatInMinutes = 0;
        
}

export class entEmployerRegistrationChecklist {
  employerRegistrationChecklistId = 0;
         employerRegistrationId = 0;
         checklistTypeId = 0;
         checklistTypeValue = '';
         comments = '';
         isChecked = '';
         checkedBy = '';
         checkedDate = '';
         referenceId = 0;
         checklistTypeDescription = '';
         checkedByFullName = '';
         idoObjState = '';
         updateSeq = 0;
         msg = new entIEMessage();
        
}

export class entEmployerRegistrationContacts {
  employerRegistrationContactId = 0;
         employerRegistrationId = 0;
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         contactPhoneNumber = '';
         contactDesignation = '';
         contactAddressId = 0;
         referenceId = 0;
         statusDescription = '';
         ientAddress = new entAddress();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entEmployerRegistrationDocument {
  employerRegistrationDocumentId = 0;
         employerRegistrationId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         isVerified = '';
         comment = '';
         referenceId = 0;
         documentTypeDescription = '';
         ientDocumentFile = new entDocumentFile();
         isforForigner = false;
         dmsFolderID = 0;
         idoObjState = '';
         updateSeq = 0;
         msg = new entIEMessage();
         strExpiryComment = '';
         uploadedDate = '';
         plstentEmployerRegistrationDocumentRejectionReason: any = [];
         documentStatusId = 0;
         documentStatusValue = '';
         documentStatusDescription = '';
         verifiedBy = '';
         verifiedByFullName = '';
         verifiedDate = '';
         pentDDLData = new entDDLClass();
        
}

export class entEmployerRegistrationDocumentList {
  plstentEmployerRegistrationDocument: any = [];
         msg = new entIEMessage();
        
}

export class entEmployerRegistrationDocumentRejectionReason {
  employerRegistrationDocumentRejectionReasonId = 0;
         employerRegistrationDocumentId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         otherReason = '';
         reasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entEmployerRegistrationEmailHistory {
  employerRegistrationEmailHistoryId = 0;
         employerRegistrationId = 0;
         emailTrackingId = 0;
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         statusDescription = '';
         idoObjState = '';
         updateSeq = 0;
         pentCommunicationTracking = new entCommunicationTracking();
         sentByFullName = '';
        
}

export class entEmployerRegistrationNotes {
  employerRegistrationNotesId = 0;
         employerRegistrationId = 0;
         notes = '';
         statusId = 0;
         statusValue = '';
         enteredBy = '';
         enteredDate = '';
         referenceId = 0;
         statusDescription = '';
         enteredByFullName = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         plstApplicationStatus: any = [];
         plstentEmployerRegistrationNotesRejectionReason: any = [];
        
}

export class entEmployerRegistrationNotesRejectionReason {
  employerRegistrationNotesRejectionReasonId = 0;
         employerRegistrationNotesId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         otherReason = '';
         reasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entEmployerRegistrationSearch {
  employerRegistrationSearchId = 0;
         employerRegistrationId = 0;
         searchDatetime = '';
         statusId = 0;
         statusValue = '';
         internalRegistrationStatusId = 0;
         internalRegistrationStatusValue = '';
         referenceId = 0;
         statusDescription = '';
         internalRegistrationStatusDescription = '';
         idoObjState = '';
         updateSeq = 0;
        
}

export class entEmployerRegistrationSearchResults {
  plstentEmployerRegistrationSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         modifiedBy = '';
        
}

export class entEmployerRegistrationSearchResultset {
  employerRegistrationId = 0;
         registrationRefNo = '';
         organizationName = '';
         organizationTypeValue = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         statusValue = '';
         approvedDate = '';
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         completedTatMinutes = 0;
         totalTatMinutes = 0;
         colorCode = '';
        
}

export class entEmployerRegistrationSearchscreen {
  employerRegistrationId = '';
         registrationRefNo = '';
         organizationName = '';
         organizationTypeValue = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         statusValue = '';
         approvedDateFrom = '';
         approvedDateTo = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entEmployerRegistrationStatusHistory {
  employerRegistrationStatusHistoryId = 0;
         employerRegistrationId = 0;
         statusId = 0;
         statusValue = '';
         changedBy = '';
         changedDate = '';
         tatInHours = '';
         referenceId = 0;
         statusDescription = '';
         changedByFullName = '';
         idoObjState = '';
         updateSeq = 0;
         totalTat = 0;
         workedTatInDays = 0;
         workedTatInHours = 0;
         workedTatInMinutes = 0;
        
}

export class entEmployerSearch {
  employerNo = '';
         organizationName = '';
         organizationTypeValue = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         employerId = 0;
         statusValue = '';
        
}

export class entEmployerSearchResult {
  plstentEmployerSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entEmployerSearchResultset {
  employerId = 0;
         employerNo = '';
         organizationName = '';
         organizationTypeDescription = '';
         industryTypeDescription = '';
         emailId = '';
         contactNumber = '';
         appliedApplicationCount = 0;
         statusDescription = '';
         statusValue = '';
        
}

export class entGetActiveControversial {
  firstName = '';
         lastName = '';
         dateOfBirth = '';
         passportNo = '';
         reason = '';
         fromDate = '';
         toDate = '';
         nationality = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         errorList: any = [];
        
}

export class entGetActiveControversiallist {
  cllist: any = [];
         msg = new entIEMessage();
         errorList: any = [];
        
}

export class entGetActiveControversiallistInput {
  firstname = '';
         lastname = '';
         dateofbirth = '';
         gender = '';
         nationality = '';
         passportno = '';
        
}

export class entGetListOfPassportInfo {
  firstName = '';
         lastName = '';
         dateofBirth = '';
         gender = '';
         passportList: any = [];
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         errorList: any = [];
        
}

export class entGetListOfPassportInfoDetails {
  passportNo = '';
         dateofIssue = '';
         placeofIssue = '';
         nationality = '';
         validFrom = '';
         validTo = '';
        
}

export class entGetListOfPassportInfoInput {
  firstname = '';
         lastname = '';
         dateofbirth = '';
         gender = '';
        
}

export class entGroup {
  groupId = 0;
         groupName = '';
         beginDate = '';
         endDate = '';
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         statusDescription = '';
         ilstRoleGroup: any = [];
         ilstUserGroup: any = [];
         currentGroupRoleId = 0;
         msg = new entIEMessage();
         activeUserGroupList: any = [];
         inActiveUserGroupList: any = [];
         updateSeq = 0;
         idoObjState = '';
         catetoryId = 0;
         categoryValue = '';
        
}

export class entIBMSMsg {
  messageCode = 0;
         messageType = '';
         messageDescription = '';
        
}

export class entIEMessage {
  infoMessage = new entMsgDetail();
         errorMessage: any = [];
         hasError = false;
        
}

export class entIndividualUser {
  individualUserId = 0;
         individualRegistrationId = 0;
         firstName = '';
         middleName = '';
         lastName = '';
         dateOfBirth = '';
         nationalityId = 0;
         nationalityValue = '';
         newEmailId = '';
         verifiedEmailId = '';
         newMobileNo = '';
         verifiedMobileNo = '';
         genderId = 0;
         genderValue = '';
         password = '';
         passwordLastChangedDate = '';
         changePassword = '';
         otp = 0;
         otpSentDatetime = '';
         otpVerified = '';
         isLocked = '';
         retryPasswordCount = 0;
         urlSentDatetime = '';
         currentLoginDatetime = '';
         lastLoginDatetime = '';
         twoFaEnabled = '';
         twoFaModeId = 0;
         twoFaModeValue = '';
         twoFaEmailId = '';
         twoFaMobileNo = '';
         twoFaPasscode = '';
         twoFaVerifiedFlag = '';
         termsConditionAccepted = '';
         referenceId = 0;
         photoFileId = 0;
         pentPhotoFile = new entPhotoFile();
         tempOtp = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         encryptionToken: any = [];
         newPassword = '';
         confirmPassword = '';
         endDate = '';
         currentPassword = '';
         token = '';
         nationalityDescription = '';
         genderDescription = '';
         totalApplicationCount = 0;
         totalApprovedCount = 0;
         totalRejectedCount = 0;
         approvedPercentage = '';
         rejectPercentage = '';
         pendingPercentage = '';
        
}

export class entIndividualUserSearch {
  firstName = '';
         middleName = '';
         lastName = '';
         nationalityValue = '';
         genderValue = '';
         emailId = '';
         contactNumber = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entIndividualUserSearchResult {
  plstentIndividualUserSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entIndividualUserSearchResultset {
  individualUserId = 0;
         individualUserName = '';
         dateOfBirth = '';
         nationalityDescription = '';
         genderDescription = '';
         emailId = '';
         contactNumber = '';
         appliedApplicationCount = 0;
        
}

export class entInstitution {
  institutionId = 0;
         institutionRegistrationId = 0;
         organizationName = '';
         organizationTypeId = 0;
         organizationTypeValue = '';
         industryTypeId = 0;
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         addressId = 0;
         hasForeignShareholder = '';
         website = '';
         referenceId = 0;
         organizationTypeDescription = '';
         industryTypeDescription = '';
         plstentInstitutionContacts: any = [];
         plstentInstitutionDocuments: any = [];
         plstentInstitutionAgentLink: any = [];
         pentInstitutionLogo = new entInstitutionLogo();
         institutionNo = '';
         otherIndustryType = '';
         folderId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         totalApplicationCount = 0;
         totalApprovedCount = 0;
         totalRejectedCount = 0;
         pentAddress = new entAddress();
         registrationDate = '';
         plstentAgent: any = [];
         pentPhotoFile = new entPhotoFile();
         statusId = 0;
         statusValue = '';
         statusDescription = '';
         plstentInstitutionComments: any = [];
         photoFileId = 0;
         isQualifiedInstitution = '';
         token = '';
         approvedPercentage = '';
         rejectPercentage = '';
         pendingPercentage = '';
         institutionTypeId = 0;
         institutionTypeValue = '';
         institutionTypeDescription = '';
         isListedInstitution = '';
         otherInstitutionType = '';
        
}

export class entInstitutionAgentLink {
  institutionAgentLinkId = 0;
         institutionId = 0;
         agentId = 0;
         agentRefNo = '';
         linkedDate = '';
         linkedBy = '';
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         statusDescription = '';
         linkedByFullName = '';
         pentInstitutionAgentLinkSearchResult = new entInstitutionAgentLinkSearchResult();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         pentAgent = new entAgent();
         startDate = '';
         endDate = '';
        
}

export class entInstitutionAgentLinkSearch {
  institutionId = 0;
         agentNo = '';
         organizationName = '';
         linkedDateFrom = '';
         linkedDateTo = '';
         statusValue = '';
         emailId = '';
         contactNumber = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         contactSurName = '';
         contactFirstName = '';
         startDateTo = '';
         endDateFrom = '';
         endDateTo = '';
         startDateFrom = '';
        
}

export class entInstitutionAgentLinkSearchResult {
  plstentInstitutionAgentLinkSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entInstitutionAgentLinkSearchResultset {
  institutionAgentLinkId = 0;
         agentNo = '';
         organizationName = '';
         contactNumber = '';
         linkedDate = '';
         linkedByFullName = '';
         startDate = '';
         endDate = '';
         statusDescription = '';
         emailId = '';
         agentId = 0;
        
}

export class entInstitutionComments {
  institutionCommentsId = 0;
         institutionId = 0;
         comments = '';
         enteredBy = '';
         enteredDate = '';
         referenceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         enteredByFullName = '';
        
}

export class entInstitutionContactPermitType {
  institutionContactPermitTypeId = 0;
         institutionContactId = '';
         contactPermitTypeId = '';
         contactPermitTypeValue = '';
         isChecked = '';
         contactPermitTypeDescription = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entInstitutionContacts {
  institutionContactId = 0;
         institutionId = 0;
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         contactPhoneNumber = '';
         contactDesingation = '';
         addressId = 0;
         statusId = 0;
         statusValue = '';
         contactTypeId = 0;
         contactTypeValue = '';
         verifiedEmailId = '';
         verifiedMobileNo = '';
         password = '';
         passwordLastChangedDate = '';
         changePassword = '';
         otp = 0;
         otpSentDatetime = '';
         otpVerified = '';
         isLocked = '';
         retryPasswordCount = 0;
         urlSentDatetime = '';
         currentLoginDatetime = '';
         lastLoginDatetime = '';
         twoFaEnabled = '';
         twoFaModeId = 0;
         twoFaModeValue = '';
         twoFaEmailId = '';
         twoFaMobileNo = '';
         twoFaPasscode = '';
         twoFaVerifiedFlag = '';
         termsConditionAccepted = '';
         referenceId = 0;
         statusDescription = '';
         contactTypeDescription = '';
         twoFaModeDescription = '';
         pentInstitutionContactsSearchResult = new entInstitutionContactsSearchResult();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         pentAddress = new entAddress();
         effectiveDate = '';
         encryptionToken: any = [];
         newPassword = '';
         confirmPassword = '';
         pentPhotoFile = new entPhotoFile();
         endDate = '';
         tempOtp = 0;
         currentPassword = '';
         photoFileId = 0;
         token = '';
         plstentInstitutionContactPermitType: any = [];
        
}

export class entInstitutionContactsSearchResult {
  plstentInstitutionContactsSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entInstitutionContactsSearchResultset {
  institutionContactId = 0;
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         contactPhoneNumber = '';
         effectiveDate = '';
         statusDescription = '';
         contactTypeDescription = '';
         endDate = '';
        
}

export class entInstitutionDocuments {
  institutionDocumentId = 0;
         institutionId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         isVerified = '';
         verifiedBy = '';
         verifiedDate = '';
         referenceId = 0;
         documentTypeDescription = '';
         verifiedByFullName = '';
         pentDocumentFile = new entDocumentFile();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         isforForigner = false;
         uploadedDate = '';
         strExpiryComment = '';
        
}

export class entInstitutionLogo {
  institutionLogoId = 0;
         institutionId = 0;
         logo = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entInstitutionRegistration {
  institutionRegistrationId = 0;
         registrationRefNo = '';
         organizationName = '';
         organizationTypeId = 0;
         organizationTypeValue = '';
         industryTypeId = 0;
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         statusId = 0;
         statusValue = '';
         addressId = 0;
         approvedDate = '';
         workFlowId = 0;
         hasForeignShareholder = '';
         registrationPrinted = '';
         referenceId = 0;
         organizationTypeDescription = '';
         industryTypeDescription = '';
         statusDescription = '';
         plstentInstitutionRegistrationDocument: any = [];
         plstentInstitutionRegistrationContacts: any = [];
         plstentInstitutionRegistrationNotes: any = [];
         plstentInstitutionRegistrationAssignedOfficerHistory: any = [];
         plstentInstitutionRegistrationStatusHistory: any = [];
         plstentInstitutionRegistrationEmailHistory: any = [];
         plstentInstitutionRegistrationChecklist: any = [];
         plstentInstitutionRegistrationSearch: any = [];
         ientAddress = new entAddress();
         ientInstitutionRegistrationPrimaryContacts = new entInstitutionRegistrationContacts();
         msg = new entIEMessage();
         otherIndustryType = '';
         folderId = 0;
         idoObjState = '';
         updateSeq = 0;
         strExpiryComment = '';
         institutionNo = '';
         registrationDate = '';
         blnShowSelfAssignBtn = '';
         blnShowReAssignBtn = '';
         readOnly = '';
         fullAccess = '';
         blnIsAssignedOfficer = '';
         isDocumentUploaded = '';
         institutionTypeId = 0;
         institutionTypeValue = '';
         institutionTypeDescription = '';
         isListedInstitution = '';
         otherInstitutionType = '';
        
}

export class entInstitutionRegistrationAssignedOfficerHistory {
  institutionRegistrationAssignedOfficerHistoryId = 0;
         institutionRegistrationId = 0;
         assignedBy = '';
         assignedDate = '';
         assignedTo = '';
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         statusDescription = '';
         assignedByFullName = '';
         assignedToFullName = '';
         idoObjState = '';
         updateSeq = 0;
         msg = new entIEMessage();
         plstuserlist = new entUserList();
         tat = '';
         workedTatInDays = 0;
         workedTatInHours = 0;
         workedTatInMinutes = 0;
        
}

export class entInstitutionRegistrationChecklist {
  institutionRegistrationChecklistId = 0;
         institutionRegistrationId = 0;
         checklistTypeId = 0;
         checklistTypeValue = '';
         comments = '';
         isChecked = '';
         checkedBy = '';
         checkedDate = '';
         referenceId = 0;
         checklistTypeDescription = '';
         checkedByFullName = '';
         idoObjState = '';
         updateSeq = 0;
         msg = new entIEMessage();
        
}

export class entInstitutionRegistrationContacts {
  institutionRegistrationContactId = 0;
         institutionRegistrationId = 0;
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         contactPhoneNumber = '';
         contactDesignation = '';
         contactAddressId = 0;
         referenceId = 0;
         statusDescription = '';
         ientAddress = new entAddress();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entInstitutionRegistrationDocument {
  institutionRegistrationDocumentId = 0;
         institutionRegistrationId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         isVerified = '';
         comment = '';
         referenceId = 0;
         documentTypeDescription = '';
         ientDocumentFile = new entDocumentFile();
         isforForigner = false;
         dmsFolderID = 0;
         idoObjState = '';
         updateSeq = 0;
         msg = new entIEMessage();
         strExpiryComment = '';
         uploadedDate = '';
         plstentInstitutionRegistrationDocumentRejectionReason: any = [];
         documentStatusId = 0;
         documentStatusValue = '';
         documentStatusDescription = '';
         verifiedBy = '';
         verifiedByFullName = '';
         verifiedDate = '';
         pentDDLData = new entDDLClass();
        
}

export class entInstitutionRegistrationDocumentList {
  plstentInstitutionRegistrationDocument: any = [];
         msg = new entIEMessage();
        
}

export class entInstitutionRegistrationDocumentRejectionReason {
  institutionRegistrationDocumentRejectionReasonId = 0;
         institutionRegistrationDocumentId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         otherReason = '';
         reasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entInstitutionRegistrationEmailHistory {
  institutionRegistrationEmailHistoryId = 0;
         institutionRegistrationId = 0;
         emailTrackingId = 0;
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         statusDescription = '';
         idoObjState = '';
         updateSeq = 0;
         pentCommunicationTracking = new entCommunicationTracking();
         sentByFullName = '';
        
}

export class entInstitutionRegistrationNotes {
  institutionRegistrationNotesId = 0;
         institutionRegistrationId = 0;
         notes = '';
         statusId = 0;
         statusValue = '';
         enteredBy = '';
         enteredDate = '';
         referenceId = 0;
         statusDescription = '';
         enteredByFullName = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         plstApplicationStatus: any = [];
         plstentInstitutionRegistrationNotesRejectionReason: any = [];
        
}

export class entInstitutionRegistrationNotesRejectionReason {
  institutionRegistrationNotesRejectionReasonId = 0;
         institutionRegistrationNotesId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         otherReason = '';
         reasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entInstitutionRegistrationSearch {
  institutionRegistrationSearchId = 0;
         institutionRegistrationId = 0;
         searchDatetime = '';
         statusId = 0;
         statusValue = '';
         internalRegistrationStatusId = 0;
         internalRegistrationStatusValue = '';
         referenceId = 0;
         statusDescription = '';
         internalRegistrationStatusDescription = '';
         idoObjState = '';
         updateSeq = 0;
        
}

export class entInstitutionRegistrationSearchResults {
  plstentInstitutionRegistrationSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         modifiedBy = '';
        
}

export class entInstitutionRegistrationSearchResultset {
  institutionRegistrationId = 0;
         registrationRefNo = '';
         organizationName = '';
         organizationTypeValue = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         statusValue = '';
         approvedDate = '';
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         completedTatMinutes = 0;
         totalTatMinutes = 0;
         colorCode = '';
        
}

export class entInstitutionRegistrationSearchscreen {
  institutionRegistrationId = '';
         registrationRefNo = '';
         organizationName = '';
         organizationTypeValue = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         contactFirstName = '';
         contactSurName = '';
         contactMailId = '';
         statusValue = '';
         approvedDateFrom = '';
         approvedDateTo = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entInstitutionRegistrationStatusHistory {
  institutionRegistrationStatusHistoryId = 0;
         institutionRegistrationId = 0;
         statusId = 0;
         statusValue = '';
         changedBy = '';
         changedDate = '';
         tatInHours = '';
         referenceId = 0;
         statusDescription = '';
         changedByFullName = '';
         idoObjState = '';
         updateSeq = 0;
         totalTat = 0;
         workedTatInDays = 0;
         workedTatInHours = 0;
         workedTatInMinutes = 0;
        
}

export class entInstitutionSearch {
  institutionNo = '';
         organizationName = '';
         organizationTypeValue = '';
         industryTypeValue = '';
         emailId = '';
         contactNumber = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         institutionId = 0;
         statusValue = '';
        
}

export class entInstitutionSearchResult {
  plstentInstitutionSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entInstitutionSearchResultset {
  institutionId = 0;
         institutionNo = '';
         organizationName = '';
         organizationTypeDescription = '';
         industryTypeDescription = '';
         emailId = '';
         contactNumber = '';
         appliedApplicationCount = 0;
         statusDescription = '';
         statusValue = '';
        
}

export class entInvestorPermitApplication {
  investorPermitApplicationId = 0;
         permitApplicationId = 0;
         currentlyOutsideOfFiji = '';
         indentedArraivalDate = '';
         isIncludingDependent = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         applicationTypeQuestioner = '';
         applyingPeriod = '';
         pentInvestorPermitApplicationPrimaryApplicantDetail = new entInvestorPermitApplicationPrimaryApplicantDetail();
         plstentInvestorPermitApplicationFees: any = [];
         plstentInvestorPermitApplicationChecklist: any = [];
         comments = '';
         pentInvestorPermitApplicationDocuments = new entInvestorPermitApplicationDocuments();
         oldValue = '';
        
}

export class entInvestorPermitApplicationAssistingPersonDeclarationComment {
  investorPermitApplicationAssistingPersonDeclarationCommentId = 0;
         investorPermitApplicationAssistingPersonDetailId = 0;
         comments = '';
         name = '';
         email = '';
         telephone = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entInvestorPermitApplicationAssistingPersonDetail {
  investorPermitApplicationAssistingPersonDetailId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         fullName = '';
         emailId = '';
         contactNumber = '';
         photoFileId = 0;
         signature = '';
         date = '';
         personDeclarationDocumentFileId = 0;
         oldValue = '';
         pentInvestorPermitApplicationAssistingPersonDetail: any = [];
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         ientInvestorPermitApplicationAssistingPersonDeclarationComment = new entInvestorPermitApplicationAssistingPersonDeclarationComment();
         plstentInvestorPermitApplicationAssistingPersonDeclaration: any = [];
         isFilledBy = '';
        
}

export class entInvestorPermitApplicationAuthorizedPersonDetail {
  investorPermitApplicationAuthorizedPersonDetailId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         isApplicantAuthorzedPerson = '';
         surname = '';
         givenNames = '';
         organisationName = '';
         businessOrResidentialAddressId = 0;
         addressOfCorrespondenceId = 0;
         emailId = '';
         contactNumber = '';
         consentFromAuthorizedPerson = '';
         ientBusinessorResidentialAddress = new entAddress();
         ientCorrespondenceAddress = new entAddress();
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entInvestorPermitApplicationCharacterDeclaration {
  investorPermitApplicationCharactorDeclarationId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         permitMasterCharacterDeclarationId = 0;
         declaration = '';
         comments = '';
         isMandatory = '';
         isChecked = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         declarationForId = 0;
         declarationForValue = '';
         declarationSourceId = 0;
        
}

export class entInvestorPermitApplicationChecklist {
  investorPermitApplicationChecklistId = 0;
         investorPermitApplicationId = 0;
         permitMasterChecklistId = 0;
         checklist = '';
         isMandatory = '';
         oldValue = '';
         checkedBy = '';
         checkDate = '';
         groupId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entInvestorPermitApplicationCompanyDetail {
  investorPermitApplicationCompanyDetailId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         organizationName = '';
         organizationAddressId = 0;
         typeOfBusinessId = 0;
         typeOfBusinessValue = '';
         industryTypeId = 0;
         industryTypeValue = '';
         emailId = '';
         mobileNo = '';
         positionInCompany = '';
         dutiesOfPosition = '';
         commencementDate = '';
         yearsOfInvestmentExperience = '';
         oldValue = '';
         industryTypeDescription = '';
         typeOfBusinessDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         plstentInvestorPermitApplicationEmployedPersonDetail: any = [];
         plstentInvestorPermitApplicationInvestmentThreshold: any = [];
         plstentInvestorPermitApplicationDocuments: any = [];
         pentInvestorPermitApplicationEmployerDeclarationSummary = new entInvestorPermitApplicationEmployerDeclarationSummary();
         otherTypeOfBusiness = '';
         otherIndustryType = '';
         typeOfBusinessDetails = '';
         ientCompanyAddress = new entAddress();
        
}

export class entInvestorPermitApplicationDeclaration {
  investorPermitApplicationDeclarationId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         permitMasterApplicationDeclarationId = 0;
         declaration = '';
         isMandatory = '';
         isChecked = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         declarationForId = 0;
         declarationForValue = '';
         declarationSourceId = 0;
        
}

export class entInvestorPermitApplicationDeclarationComment {
  investorPermitApplicationDeclarationCommentId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         comments = '';
         nameOfDeclarationPerson = '';
         positionInOrganization = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entInvestorPermitApplicationDependentCharactorDeclarationComment {
  investorPermitApplicationDependentCharactorDeclarationCommentId = 0;
         investorPermitApplicationPrimaryApplicantDependentsDetailId = 0;
         comments = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entInvestorPermitApplicationDocumentDetailRejectionReason {
  investorPermitApplicationDocumentDetailRejectionReasonId = 0;
         investorPermitApplicationDocumentDetailId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         otherReason = '';
         reasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entInvestorPermitApplicationDocuments {
  investorPermitApplicationDocumentId = 0;
         investorPermitApplicationId = 0;
         documentForId = 0;
         documentForValue = '';
         documentForSourceId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         documentTypeDescription = '';
         plstentInvestorPermitApplicationDocumentsDetail: any = [];
         permitMasterDocumentId = 0;
         pentDDLData = new entDDLClass();
        
}

export class entInvestorPermitApplicationDocumentsDetail {
  investorPermitApplicationDocumentDetailId = 0;
         investorPermitApplicationDocumentId = 0;
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         documentDate = '';
         issuedDate = '';
         oldValue = '';
         documentStatusId = 0;
         documentStatusValue = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         documentStatusDescription = '';
         pentDocumentFile = new entDocumentFile();
         comments = '';
         changedByFullName = '';
         daysToExpire = '';
         changedBy = '';
         createdDate = '';
         strExpiryComment = '';
         plstentInvestorPermitApplicationDocumentDetailRejectionReason: any = [];
        
}

export class entInvestorPermitApplicationDocumentsDetailList {
  plstentInvestorPermitApplicationDocumentsDetail: any = [];
         msg = new entIEMessage();
        
}

export class entInvestorPermitApplicationEmployedPersonDetail {
  investorPermitApplicationEmployedPersonDetailId = 0;
         investorPermitApplicationCompanyDetailId = 0;
         employedPersonName = '';
         employedPersonPosition = '';
         isLocal = '';
         isExpatriate = '';
         oldValue = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entInvestorPermitApplicationEmployeeDeclaration {
  investorPermitApplicationEmployeeDeclarationId = 0;
         investorPermitApplicationEmployeeDeclarationSummaryId = 0;
         employeeDeclarationId = 0;
         employeeDeclarationValue = '';
         isChecked = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         employeeDeclarationDescription = '';
        
}

export class entInvestorPermitApplicationEmployeeDeclarationSummary {
  investorPermitApplicationEmployeeDeclarationSummaryId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         signature = '';
         date = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         plstentInvestorPermitApplicationEmployeeDeclaration: any = [];
         nameOfAdultWitness = '';
        
}

export class entInvestorPermitApplicationEmployerDeclaration {
  investorPermitApplicationEmployerDeclarationId = 0;
         investorPermitApplicationEmployerDeclarationSummaryId = 0;
         employerDeclarationId = 0;
         employerDeclarationValue = '';
         isChecked = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         employerDeclarationDescription = '';
        
}

export class entInvestorPermitApplicationEmployerDeclarationSummary {
  investorPermitApplicationEmployerDeclarationSummaryId = 0;
         investorPermitApplicationCompanyDetailId = 0;
         signature = '';
         date = '';
         oldValue = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         plstentInvestorPermitApplicationEmployerDeclaration: any = [];
         nameOfPerson = '';
         positionInOrganization = '';
        
}

export class entInvestorPermitApplicationFees {
  investorPermitApplicationFeesId = 0;
         investorPermitApplicationId = 0;
         permitMasterFeesDetailId = 0;
         oldValue = '';
         feesAmount = '';
         feeType = '';
         mandatory = '';
         taxAmount = '';
         totalFee = '';
         taxPercentage = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entInvestorPermitApplicationInvestmentThreshold {
  investorPermitApplicationInvestmentThresholdId = 0;
         investorPermitApplicationCompanyDetailId = 0;
         investmentAmount = '';
         projectedReturnOfInvestment = '';
         businessExpansionPlan = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entInvestorPermitApplicationPersonEducationDetails {
  investorPermitApplicationPersonEducationDetailId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         educationalInstituteName = '';
         qualificationAttained = '';
         attainedDate = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entInvestorPermitApplicationPrimaryApplicantCharactorDeclarationComment {
  investorPermitApplicationPrimaryApplicantCharactorDeclarationId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         comments = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entInvestorPermitApplicationPrimaryApplicantDependentsDetail {
  investorPermitApplicationPrimaryApplicantDependentsDetailId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         surname = '';
         givenNames = '';
         dateOfBirth = '';
         countryOfBirthId = 0;
         countryOfBirthValue = '';
         otherCountryOfBirth = '';
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountryOfPassport = '';
         genderId = 0;
         genderValue = '';
         relationshipId = 0;
         relationshipValue = '';
         oldValue = '';
         countryOfBirthDescription = '';
         countryOfPassportDescription = '';
         genderDescription = '';
         relationshipDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         plstentInvestorPermitApplicationDocuments: any = [];
         ientInvestorPermitApplicationDependentCharactorDeclarationComment = new entInvestorPermitApplicationDependentCharactorDeclarationComment();
         plstentInvestorPermitApplicationCharacterDeclaration: any = [];
         lastEditedByFullName = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         exisitingPermitNumber = '';
         appliedDate = '';
         isQualified = '';
        
}

export class entInvestorPermitApplicationPrimaryApplicantDetail {
  investorPermitApplicationPrimaryApplicantDetailId = 0;
         investorPermitApplicationId = 0;
         preferredTitleId = 0;
         preferredTitleValue = '';
         otherPreferredTitle = '';
         otherTitle = '';
         surname = '';
         givenNames = '';
         emailId = '';
         mobileNo = '';
         isAnyOtherName = '';
         otherGivenNames = '';
         otherSurname = '';
         genderId = 0;
         genderValue = '';
         dateOfBirth = '';
         nationalityId = 0;
         nationalityValue = '';
         otherNationality = '';
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         isAnyOtherPassport = '';
         isAnyPreviousPassports = '';
         currentResidentialAddressId = 0;
         currentPostalAddressId = 0;
         maritalStatusId = 0;
         maritalStatusValue = '';
         isCurrentlyOutsideOfFiji = '';
         isAnyCriminalOffence = '';
         intendedFijiResidentialAddressId = 0;
         intendedFijiPostalAddressId = 0;
         oldValue = '';
         preferredTitleDescription = '';
         genderDescription = '';
         nationalityDescription = '';
         countryOfPassportDescription = '';
         maritalStatusDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         plstentInvestorPermitApplicationDocuments: any = [];
         pentInvestorPermitApplicationPrimaryApplicantPreviousPassports = new entInvestorPermitApplicationPrimaryApplicantPreviousPassports();
         pentInvestorPermitApplicationPrimaryApplicantOtherPassports = new entInvestorPermitApplicationPrimaryApplicantOtherPassports();
         plstentInvestorPermitApplicationPrimaryApplicantDependentsDetail: any = [];
         pentInvestorPermitApplicationCompanyDetail = new entInvestorPermitApplicationCompanyDetail();
         plstentInvestorPermitApplicationShareHoldingStructureDetail: any = [];
         pentInvestorPermitApplicationAssistingPersonDetail = new entInvestorPermitApplicationAssistingPersonDetail();
         pentInvestorPermitApplicationAuthorizedPersonDetail = new entInvestorPermitApplicationAuthorizedPersonDetail();
         ientResidentialAddress = new entAddress();
         ientPostalAddress = new entAddress();
         ientIntentedResidentialAddress = new entAddress();
         ientIntentedPostallAddress = new entAddress();
         ientInvestorPermitApplicationPrimaryApplicantCharactorDeclarationComment = new entInvestorPermitApplicationPrimaryApplicantCharactorDeclarationComment();
         ientInvestorPermitApplicationDeclarationComment = new entInvestorPermitApplicationDeclarationComment();
         plstentInvestorPermitApplicationCharacterDeclaration: any = [];
         plstentInvestorPermitApplicationDeclaration: any = [];
         pentInvestorPermitApplicationPrimaryApplicantDependentsDetail = new entInvestorPermitApplicationPrimaryApplicantDependentsDetail();
         intentedArraivalDate = '';
         existingDateOfEntry = '';
         existingPortOfEntry = '';
         typeOfExistingPermitId = 0;
         typeOfExistingPermitValue = '';
         existingPermitExpiryDate = '';
         isPreviousVisitToFiji = '';
         isInvestor = '';
         pentInvestorPermitApplicationEmployeeDeclarationSummary = new entInvestorPermitApplicationEmployeeDeclarationSummary();
         plstentInvestorPermitApplicationPersonEducationDetails: any = [];
         typeOfExistingPermitDescription = '';
         pentResidentialAddress = new entAddress();
         pentPostalAddress = new entAddress();
         pentIntendedResidentialAddress = new entAddress();
         pentIntendedPostalAddress = new entAddress();
         isSameAsResidentialAddress = '';
         isSameAsIntendedResidentialAddressFiji = '';
         existingPermitNumber = '';
         lastEditedByFullName = '';
        
}

export class entInvestorPermitApplicationPrimaryApplicantOtherPassports {
  investorPermitApplicationPrimaryApplicantOtherPassportsId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         oldValue = '';
         countryOfPassportDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entInvestorPermitApplicationPrimaryApplicantPreviousPassports {
  investorPermitApplicationPrimaryApplicantPreviousPassportsId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         oldValue = '';
         countryOfPassportDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entInvestorPermitApplicationSearch {
  permitApplicationNo = '';
         appliedByValue = '';
         appliedByRefNo = '';
         appliedForEmployerId = 0;
         applicationTypeValue = '';
         permitTypeValue = '';
         permitCategoryValue = '';
         paymentDateFrom = '';
         paymentDateTo = '';
         paymentReceiptNo = '';
         paymentAmountFrom = '';
         paymentAmountTo = '';
         paymentStatusValue = '';
         statusValue = '';
         completedTatInDaysFrom = 0;
         completedTatInDaysTo = 0;
         applicantName = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         startDateFrom = '';
         startDateTo = '';
         endDateFrom = '';
         endDateTo = '';
         permitNumber = '';
         passportNumber = '';
         applicationCategoryValue = '';
         approvedDateFrom = '';
         approvedDateTo = '';
         registrationRefNo = '';
         appliedBySourceId = 0;
         assignedTo = '';
         paymentStatus = '';
         screenMenuName = '';
         assignedDateFrom = '';
         assignedDateTo = '';
         ibmsPermitRefNo = '';
         recommendedForValue = '';
         appliedForEmbassyId = 0;
         appliedForInstitutionId = 0;
        
}

export class entInvestorPermitApplicationSearchResult {
  plstentInvestorPermitApplicationSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entInvestorPermitApplicationSearchResultset {
  permitApplicationId = 0;
         permitApplicationNo = '';
         applicantName = '';
         applicationTypeDescription = '';
         permitTypeDescription = '';
         permitCategoryDescription = '';
         statusDescription = '';
         paymentStatusDescription = '';
         paymentDate = '';
         paymentReceiptNo = '';
         paymentAmount = '';
         completedTatInDays = 0;
         totalTatInDays = 0;
         applicationType = '';
         tat = '';
         appliedDate = '';
         passportNumber = '';
         permitNumber = '';
         endDate = '';
         startDate = '';
         applicationCategoryDescription = '';
         paymentReceiptId = 0;
         paymentReceiptDate = '';
         offlinePaymentTransactionId = 0;
         totalTat = '';
         completedTat = '';
         assignedToFullName = '';
         workFlowId = 0;
         statusValue = '';
         isPaymentBtnShow = '';
         assignedDate = '';
         ibmsPermitRefNo = '';
         permitCategoryValue = '';
         externalStatusValue = '';
         permitStatusDescription = '';
         applicationTypeValue = '';
         completedTatMinutes = 0;
         totalTatMinutes = 0;
         colorCode = '';
         studentPermitStatusId = 0;
         studentPermitStatusDescription = '';
        
}

export class entInvestorPermitApplicationShareHoldingStructureDetail {
  investorPermitApplicationShareHoldingStructureDetailId = 0;
         investorPermitApplicationPrimaryApplicantDetailId = 0;
         name = '';
         shareHoldingPercentage = '';
         monetaryValue = '';
         voutingRights = '';
         oldValue = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entIslanddetails {
  islandId = 0;
         islandName = '';
         provinceId = 0;
         provinceName = '';
        
}

export class entIslanddetailsList {
  plistentIslanddetails: any = [];
        
}

export class entLastTravelRecord {
  firstname = '';
         lastname = '';
         dateofbirth = '';
         lasttravelrecord = new entLastTravelRecordDetails();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         errorList: any = [];
        
}

export class entLastTravelRecordDetails {
  passportno = '';
         nationality = '';
         entrydate = '';
         exitdate = '';
        
}

export class entLastTravelRecordInput {
  passportno = '';
         nationality = '';
         firstname = '';
         lastname = '';
         dateofbirth = '';
         gender = '';
        
}

export class entLongData {
  data = 0;
         msg = new entIEMessage();
        
}

export class entLongData1 {
  data1 = 0;
         data2 = 0;
         msg = new entIEMessage();
        
}

export class entLongStringData {
  data = 0;
         data1 = '';
         msg = new entIEMessage();
        
}

export class entMenuViewNames {
  resourcename = '';
         permission = 0;
         screenName = '';
        
}

export class entMsgDetail {
  msgID = 0;
         msgType = 0;
         msgDescription = '';
        
}

export class entOfficerAssignedHistoryDetailReport {
  permitApplicationNo = '';
         employerOrIndividualName = '';
         applicantPassportNumber = '';
         applicantName = '';
         applicationStatus = '';
         submittedDate = '';
         stepName = '';
         stepStatus = '';
         assignedDateTime = '';
         actualTatInMinutes = '';
         completedTatPercentage = '';
         actualTatInWords = '';
        
}

export class entOfficerAssignedHistoryReport {
  userFullName = '';
         avgTatInMinutes = '';
         avgCompletedTatPercentage = '';
         plstentOfficerAssignedHistoryDetailReport: any = [];
         avgTatInWords = '';
        
}

export class entOfficerAssignedHistoryReportSearch {
  assignedTo = '';
         assignedDateFrom = '';
         assignedDateTo = '';
        
}

export class entOfficerTaskReportDocumentSearch {
  officerTaskReportDocumentId = 0;
         reportDateFrom = '';
         reportDateTo = '';
         fileName = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         orderByColumnName = '';
         ascending = false;
        
}

export class entOfficerTaskReportDocumentSearchResult {
  searchResult: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entOfficerTaskReportDocumentSearchResultSet {
  officerTaskReportDocumentId = 0;
         reportDate = '';
         fileName = '';
        
}

export class entOfflinePaymentTransaction {
  offlinePaymentTransactionId = 0;
         sourceRefId = 0;
         sourceRefValue = '';
         sourcePrimaryKey = 0;
         transactionAmount = '';
         accountNumber = '';
         accountName = '';
         bankName = '';
         narration = '';
         documentId = 0;
         pentDocumentFile = new entDocumentFile();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         sourceRefDescription = '';
         isPaymentVerified = '';
         pentReceipt = new entReceipt();
         flagIsInternal = '';
        
}

export class entOnlinePaymentVerificationSearch {
  sourceRefNo = '';
         paymentTransactionNo = '';
         providerTypeValue = '';
         paymentResponseCodeValue = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         orderByColumnName = '';
         ascending = false;
        
}

export class entOnlinePaymentVerificationSearchResult {
  searchResult: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entOnlinePaymentVerificationSearchResultSet {
  permitApplicationNo = '';
         applicantName = '';
         employerIndividualName = '';
         paymentTransactionNo = '';
         walletBank = '';
         provider = '';
         transactionAmount = '';
         transactionFees = '';
         totalTransactionAmount = '';
         transactionInitiationTime = '';
         paymentImmigrationTransactionId = 0;
         paymentResponseCode = '';
        
}

export class entPassingParam {
  intData1 = 0;
         intData2 = 0;
         intData3 = 0;
         strData1 = '';
         strData2 = '';
         strData3 = '';
         strData4 = '';
         strData5 = '';
         longData1 = 0;
         longData2 = 0;
         longData3 = 0;
         msg = new entIEMessage();
        
}

export class entPaymentVerificationResultSet {
  plstentPaymentVerificationSet: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entPaymentVerificationSet {
  permitApplicationId = 0;
         permitApplicationNo = '';
         appliedByDescription = '';
         applicationTypeDescription = '';
         permitTypeDescription = '';
         permitCategoryDescription = '';
         applicantName = '';
         transactionAmount = 0;
         accountNumber = '';
         accountName = '';
         bankName = '';
         narration = '';
         isPaymentVerified = '';
         sourceRefDescription = '';
         offlinePaymentTransactionId = 0;
         statusDescription = '';
         receiptNo = '';
         cashierName = '';
         receiptDate = '';
        
}

export class entPermit {
  permitId = 0;
         permitApplicationId = 0;
         passportNo = '';
         natioanlityId = 0;
         nationalityValue = '';
         issuedDate = '';
         validFromDate = '';
         validToDate = '';
         permitCategoryId = 0;
         permitCategoryValue = '';
         permitTypeId = 0;
         permitTypeValue = '';
         permitStatusId = 0;
         permitStatusValue = '';
         ibmsPermitRefNo = '';
         isStatusUpdated = '';
         passportExpiryDate = '';
         firstName = '';
         lastName = '';
         dateOfBirth = '';
         genderId = 0;
         gendervalue = '';
         applicationTypeId = 0;
         applicationTypeValue = '';
         permitCategory = '';
         locationCode = '';
         applicantTypeId = 0;
         applicantTypeValue = '';
         permitNumber = '';
         sourcePrimaryId = 0;
         ientPermitChangeRequest = new entPermitChangeRequest();
         ilstentPermitChangeRequest: any = [];
         natioanlityDescription = '';
         permitStatusDescription = '';
         permitCategoryDescription = '';
         permitTypeDescription = '';
         organization = '';
         employedAs = '';
         genderDescription = '';
         applicationTypeDescription = '';
         applicantTypeDescription = '';
         permitApplicationNo = '';
         permitApplicationStatus = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         navigationType = '';
         noOfDaysValid = 0;
        
}

export class entPermitApplication {
  permitApplicationId = 0;
         permitApplicationNo = '';
         appliedById = 0;
         appliedByValue = '';
         appliedBySourceId = 0;
         appliedForEmployerId = 0;
         agentId = 0;
         individualUserId = 0;
         applicationTypeId = 0;
         applicationTypeValue = '';
         permitTypeId = 0;
         permitTypeValue = '';
         previousPermitId = 0;
         permitCategoryId = 0;
         permitCategoryValue = '';
         stageId = 0;
         stageValue = '';
         currentActionId = 0;
         currentActionValue = '';
         statusId = 0;
         statusValue = '';
         oldValue = '';
         referenceId = 0;
         plstentPermitApplicationRecommendation: any = [];
         pentWorkPermitApplication = new entWorkPermitApplication();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         appliedByDescription = '';
         applicationTypeDescription = '';
         permitTypeDescription = '';
         permitCategoryDescription = '';
         stageDescription = '';
         currentActionDescription = '';
         statusDescription = '';
         plstentPermitApplicationAssignedOfficerHistory: any = [];
         plstentPermitApplicationStatusHistory: any = [];
         plstentPermitApplicationEmailHistory: any = [];
         stepNo = '';
         plstentPermitApplicationChecklist: any = [];
         pentInvestorPermitApplication = new entInvestorPermitApplication();
         submittedDate = '';
         appliedDate = '';
         pentAppealApplicationRequiredInformation = new entAppealApplicationRequiredInformation();
         applicationCategoryId = 0;
         applicationCategoryValue = '';
         applicationCategoryDescription = '';
         originalPermitApplicationId = 0;
         permitMasterId = 0;
         referenceType = '';
         recommendationId = 0;
         recommendationValue = '';
         recommendationDescription = '';
         blnShowSelfAssignBtn = '';
         blnShowReAssignBtn = '';
         blnIsAssignedOfficer = '';
         startDate = '';
         endDate = '';
         strExpiryComment = '';
         assignedDate = '';
         assignedByFullName = '';
         permitNumber = '';
         successPercentage = '';
         exisitingPermitNumber = '';
         isQualifiedEmployer = '';
         pentReceipt = new entReceipt();
         totalTat = '';
         completedTat = '';
         ibmsPermitRefNo = '';
         ibmsPermitData = '';
         blnEnableEdit = '';
         referenceDOB = '';
         totalApplicationCount = 0;
         totalApprovedCount = 0;
         totalRejectedCount = 0;
         approvedPercentage = '';
         rejectPercentage = '';
         pendingPercentage = '';
         pentVisitorsVisaApplication = new entVisitorsVisaApplication();
         submittedBySourceId = 0;
         submittedBySourceValue = '';
         submittedBySourcePrimaryKey = 0;
         paymentBySourceId = 0;
         paymentBySourceValue = '';
         paymentBySourcePrimaryKey = 0;
         submittedBySourceDescription = '';
         paymentBySourceDescription = '';
         isPaymentBtnShow = '';
         approvedFromDate = '';
         approvedToDate = '';
         externalStatusId = 0;
         externalStatusValue = '';
         externalStatusDescription = '';
         pentStudyPermitApplication = new entStudyPermitApplication();
         isRemarkToBeInLetter = '';
         letterRemarks = '';
         rejectedApplicationNumber = '';
         pentResidentPermitApplication = new entResidentPermitApplication();
         internalHeaderPermitType = '';
         pentOfflinePaymentTransaction = new entOfflinePaymentTransaction();
         principalApplicantPermitTypeDescription = '';
         principalApplicantApplicationNumber = '';
         principalApplicantPermitNumber = '';
         principalApplicantPermitTypeId = 0;
         principalApplicantPermitTypeValue = '';
         appliedForEmbassyId = 0;
         appliedForInstitutionId = 0;
        
}

export class entPermitApplicationAssignedOfficerHistory {
  permitApplicationAssignedOfficerHistoryId = 0;
         permitApplicationId = 0;
         assignedBy = '';
         assignedDate = '';
         assignedTo = '';
         statusId = 0;
         statusValue = '';
         tatInHours = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         statusDescription = '';
         assignedByFullName = '';
         assignedToFullName = '';
         plstuserlist = new entUserList();
         isHigherOfficer = '';
         workedTatInDays = 0;
         workedTatInHours = 0;
         workedTatInMinutes = 0;
        
}

export class entPermitApplicationChecklist {
  permitApplicationChecklistId = 0;
         permitApplicationId = 0;
         checklistForId = 0;
         checklistForValue = '';
         checklistForSourceId = 0;
         checklistTypeId = 0;
         checklistTypeValue = '';
         isMandatory = '';
         checkedTime = '';
         isChecked = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         checklistTypeDescription = '';
         checklistForDescription = '';
        
}

export class entPermitApplicationEmailHistory {
  permitApplicationEmailHistoryId = 0;
         permitApplicationId = 0;
         emailTrackingId = 0;
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         statusDescription = '';
         pentCommunicationTracking = new entCommunicationTracking();
        
}

export class entPermitApplicationList {
  plstentPermitApplication: any = [];
         msg = new entIEMessage();
        
}

export class entPermitApplicationPaymentDetails {
  permitApplicationId = 0;
         permitApplicationNo = '';
         dateOfBirth = '';
         passportNumber = '';
         applicantName = '';
         applicationTypeDescription = '';
         permitTypeDescription = '';
         permitCategoryDescription = '';
         applicationCategoryDescription = '';
         appliedDate = '';
         statusDescription = '';
         applicationFeesDescription = '';
         appicationFees = '';
         applicationFeesTax = '';
         issuanceFeesDescription = '';
         issuanceFees = '';
         issuanceFeesTax = '';
         totalAmount = '';
         paymentAmountInWords = '';
         receiptNo = '';
         receiptDate = '';
         paymentMode = '';
         paymentResponse = '';
         cashierName = '';
         tinNo = '';
         receiptId = 0;
         permitAppNo = '';
         chequeNo = '';
         organizationName = '';
        
}

export class entPermitApplicationPaymentReceiptResultSet {
  plstentPermitApplicationPaymentReceiptSet: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entPermitApplicationPaymentReceiptSet {
  permitApplicationId = 0;
         receiptId = 0;
         receiptNo = '';
         receiptDate = '';
         paymentDescription = '';
         permitTypeDescription = '';
         totalPaidAmount = '';
         cashierName = '';
         permitApplicationNo = '';
         applicantName = '';
         isChangeable = '';
        
}

export class entPermitApplicationRecommendation {
  permitApplicationRecommendationId = 0;
         permitApplicationId = 0;
         comments = '';
         stageId = 0;
         stageValue = '';
         statusId = 0;
         statusValue = '';
         currentActionId = 0;
         currentActionValue = '';
         currentOfficer = '';
         recommendationId = 0;
         recommendationValue = '';
         nextActionId = 0;
         nextActionValue = '';
         nextOfficer = '';
         enteredBy = '';
         enteredDate = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         stageDescription = '';
         statusDescription = '';
         currentActionDescription = '';
         recommendationDescription = '';
         nextActionDescription = '';
         plstRecommendation: any = [];
         recommendedForId = 0;
         recommendedForValue = '';
         reasonForOnhold = '';
         plstentPermitApplicationRecommendationOnhold: any = [];
         plstentPermitApplicationRecommendationCheckList: any = [];
         pentPermitApplicationRecommendationDocument = new entPermitApplicationRecommendationDocument();
         plstentPermitApplicationRecommendationRejectReason: any = [];
         checkedCount = 0;
         uncheckedCount = 0;
         tabIndex = 0;
         startDate = '';
         endDate = '';
         tillDate = '';
         numberOfYears = 0;
         numberOfMonths = 0;
         numberOfDays = 0;
         parentRecommendationId = 0;
         parentRecommendationValue = '';
         parentRecommendationDescription = '';
         permitValidityTypeValue = '';
         permitValidityTypeId = 0;
         currentOfficerFullName = '';
         nextOfficerFullName = '';
         isRecommendationCompleted = '';
         plstentPermitApplicationRecommendationDocument: any = [];
         approvedFromDate = '';
         approvedToDate = '';
         plstentPermitApplicationRecommendationRemark: any = [];
         isPaymentBtnShow = '';
         isRemarkToBeInLetter = '';
         cancelComments = '';
        
}

export class entPermitApplicationRecommendationCheckList {
  permitApplicationRecommendationCheckListId = 0;
         permitApplicationRecommendationId = 0;
         checkListId = 0;
         checkListValue = '';
         isChecked = '';
         referenceId = 0;
         checkListDescription = '';
        
}

export class entPermitApplicationRecommendationCustomerResponse {
  permitApplicationRecommendationCustomerResponseId = 0;
         permitApplicationRecommendationOnholdId = 0;
         customerResponse = '';
         pentPermitApplicationRecommendationCustomerResponseDocument = new entPermitApplicationRecommendationCustomerResponseDocument();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entPermitApplicationRecommendationCustomerResponseDocument {
  permitApplicationRecommendationCustomerResponseDocumentId = 0;
         permitApplicationRecommendationCustomerResponseId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         permitMasterDocumentId = 0;
         plstentPermitApplicationRecommendationCustomerResponseDocumentDetail: any = [];
         documentTypeDescription = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entPermitApplicationRecommendationCustomerResponseDocumentDetail {
  permitApplicationRecommendationCustomerResponseDocumentDetailId = 0;
         permitApplicationRecommendationCustomerResponseDocumentId = 0;
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         documentDate = '';
         issuedDate = '';
         documentStatusId = 0;
         documentStatusValue = '';
         comment = '';
         pentDocumentFile = new entDocumentFile();
         documentStatusDescription = '';
         changedByFullName = '';
         changedBy = '';
         createdDate = '';
         strExpiryComment = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         plstentPermitApplicationRecommendationCustomerResponseDocumentDetailRejectionReason: any = [];
        
}

export class entPermitApplicationRecommendationCustomerResponseDocumentDetailList {
  plstentPermitApplicationRecommendationCustomerResponseDocumentDetail: any = [];
         msg = new entIEMessage();
        
}

export class entPermitApplicationRecommendationCustomerResponseDocumentDetailRejectionReason {
  permitApplicationRecommendationCustomerResponseDocumentDetailRejectionReasonId = 0;
         permitApplicationRecommendationCustomerResponseDocumentDetailId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         otherReason = '';
         reasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entPermitApplicationRecommendationDocument {
  permitApplicationRecommendationDocumentId = 0;
         permitApplicationRecommendationId = 0;
         documentFileId = 0;
         dmsRefNo = '';
         referenceId = 0;
         pentDocumentFile = new entDocumentFile();
        
}

export class entPermitApplicationRecommendationDocumentList {
  plstentPermitApplicationRecommendationDocument: any = [];
         msg = new entIEMessage();
        
}

export class entPermitApplicationRecommendationOnhold {
  permitApplicationRecommendationOnholdId = 0;
         permitApplicationRecommendationId = 0;
         reasonForOnhold = '';
         isResponded = '';
         onholdDate = '';
         responseDate = '';
         pentPermitApplicationRecommendationCustomerResponse = new entPermitApplicationRecommendationCustomerResponse();
         onholdResponseTillDate = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         plstentPermitApplicationRecommendationOnholdReason: any = [];
        
}

export class entPermitApplicationRecommendationOnholdReason {
  permitApplicationRecommendationOnholdReasonId = 0;
         permitApplicationRecommendationOnholdId = 0;
         onholdReasonId = 0;
         onholdReasonValue = '';
         isChecked = '';
         otherReason = '';
         onholdReasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entPermitApplicationRecommendationRejectReason {
  permitApplicationRecommendationIrejectdReasonId = 0;
         permitApplicationRecommendationId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         reasonDescription = '';
         otherReason = '';
         sectionSuffix1 = '';
         sectionSuffix2 = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entPermitApplicationRecommendationRemark {
  permitApplicationRecommendationRemarkId = 0;
         permitApplicationRecommendationId = 0;
         remarkId = 0;
         remarkValue = '';
         isChecked = '';
         remarkDescription = '';
         otherRemarks = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entPermitApplicationSearch {
  permitApplicationNo = '';
         appliedByValue = '';
         appliedByRefNo = '';
         appliedForEmployerId = 0;
         applicationTypeValue = '';
         permitTypeValue = '';
         permitCategoryValue = '';
         paymentDateFrom = '';
         paymentDateTo = '';
         paymentReceiptNo = '';
         paymentAmountFrom = '';
         paymentAmountTo = '';
         paymentStatusValue = '';
         statusValue = '';
         completedTatInDaysFrom = 0;
         completedTatInDaysTo = 0;
         applicantName = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         startDateFrom = '';
         startDateTo = '';
         endDateFrom = '';
         endDateTo = '';
         permitNumber = '';
         passportNumber = '';
         applicationCategoryValue = '';
         approvedDateFrom = '';
         approvedDateTo = '';
         registrationRefNo = '';
         appliedBySourceId = 0;
         assignedTo = '';
         paymentStatus = '';
         screenMenuName = '';
         assignedDateFrom = '';
         assignedDateTo = '';
         ibmsPermitRefNo = '';
         recommendedForValue = '';
         appliedForEmbassyId = 0;
         appliedForInstitutionId = 0;
        
}

export class entPermitApplicationSearchResult {
  plstentPermitApplicationSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entPermitApplicationSearchResultset {
  permitApplicationId = 0;
         permitApplicationNo = '';
         applicantName = '';
         applicationTypeDescription = '';
         permitTypeDescription = '';
         permitCategoryDescription = '';
         statusDescription = '';
         paymentStatusDescription = '';
         paymentDate = '';
         paymentReceiptNo = '';
         paymentAmount = '';
         completedTatInDays = 0;
         totalTatInDays = 0;
         applicationType = '';
         tat = '';
         appliedDate = '';
         passportNumber = '';
         permitNumber = '';
         endDate = '';
         startDate = '';
         applicationCategoryDescription = '';
         paymentReceiptId = 0;
         paymentReceiptDate = '';
         offlinePaymentTransactionId = 0;
         totalTat = '';
         completedTat = '';
         permitCategoryValue = '';
         workFlowId = 0;
         assignedToFullName = '';
         statusValue = '';
         isPaymentBtnShow = '';
         assignedDate = '';
         ibmsPermitRefNo = '';
         externalStatusValue = '';
         permitStatusDescription = '';
         completedTatMinutes = 0;
         totalTatMinutes = 0;
         colorCode = '';
        
}

export class entPermitApplicationStatusHistory {
  permitApplicationStatusHistoryId = 0;
         permitApplicationId = 0;
         statusId = 0;
         statusValue = '';
         changedBy = '';
         changedDate = '';
         tatInHours = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         statusDescription = '';
         changedByFullName = '';
         workedTatInDays = 0;
         workedTatInHours = 0;
         workedTatInMinutes = 0;
        
}

export class entPermitChangeRequest {
  permitChangeRequestId = 0;
         permitChangeRequestNo = '';
         requestBy = '';
         requestDate = '';
         permitId = 0;
         permitApplicationId = 0;
         passportNo = '';
         natioanlityId = 0;
         nationalityValue = '';
         issuedDate = '';
         validFromDate = '';
         validToDate = '';
         permitCategoryId = 0;
         permitCategoryValue = '';
         permitTypeId = 0;
         permitTypeValue = '';
         permitStatusId = 0;
         permitStatusValue = '';
         ibmsPermitRefNo = '';
         isStatusUpdated = '';
         passportExpiryDate = '';
         firstName = '';
         lastName = '';
         dateOfBirth = '';
         genderId = 0;
         genderValue = '';
         applicationTypeId = 0;
         applicationTypeValue = '';
         permitCategory = '';
         locationCode = '';
         applicantTypeId = 0;
         applicantTypeValue = '';
         permitNumber = '';
         sourcePrimaryId = 0;
         previousPermit = '';
         requestStatusId = 0;
         requestStatusValue = '';
         comments = '';
         natioanlityDescription = '';
         permitStatusDescription = '';
         permitCategoryDescription = '';
         permitTypeDescription = '';
         organization = '';
         employedAs = '';
         genderDescription = '';
         applicationTypeDescription = '';
         applicantTypeDescription = '';
         permitApplicationNo = '';
         requestStatusDescription = '';
         permitApplicationStatus = '';
         requestByFullName = '';
         noOfDaysValid = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entPermitInfo {
  passportno = '';
         firstname = '';
         lastname = '';
         dateofbirth = '';
         permitList: any = [];
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         errorList: any = [];
        
}

export class entPermitInfoDetails {
  permitno = '';
         permittype = '';
         startdate = '';
         enddate = '';
         permitstatus = '';
        
}

export class entPermitInfoInput {
  passportNo = '';
         nationality = '';
         firstName = '';
         lastName = '';
         dateOfBirth = '';
        
}

export class entPermitSearch {
  permitNo = '';
         permitRefNo = '';
         permitApplicationNo = '';
         firstName = '';
         passportNo = '';
         permitTypeValue = '';
         applicantTypeValue = '';
         paymentDateFrom = '';
         paymentDateTo = '';
         validFromDate = '';
         validToDate = '';
         permitStatusValue = '';
         appStatusValue = '';
         permitCategoryValue = '';
         applicationTypeValue = '';
         isortcolumn = '';
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         orderByColumnName = '';
         ascending = false;
        
}

export class entPermitSearchResult {
  searchResult: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entPermitSearchResultSet {
  permitId = 0;
         permitNo = '';
         permitRefNo = '';
         permitApplicationNo = '';
         applicantName = '';
         passportNo = '';
         permitType = '';
         applicationType = '';
         startDate = '';
         endDate = '';
         paymentDate = '';
         receiptNo = '';
         permitStatus = '';
         permitApplicationStatus = '';
         applicantType = '';
         permitApplicationId = 0;
         appStatusValue = '';
         permitStatusValue = '';
        
}

export class entPhotoFile {
  photoFileId = 0;
         fileType = '';
         fileSize = '';
         relativePath = '';
         fileName = '';
         uploadedByFullname = '';
         base64FileContent = '';
         previousPhotoFileName = '';
         isNewFile = '';
         idoObjState = '';
         updateSeq = 0;
         createdBy = '';
         createdDate = '';
         getActualFileType = '';
         pentPhotoFileLink = new entPhotoFileLink();
         msg = new entIEMessage();
        
}

export class entPhotoFileLink {
  linkedReferenceId = 0;
         linkedTableName = '';
         photoFileId = 0;
         photoFileLinkId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entPreviousApplicationInput {
  passportNo = '';
         nationality = '';
         firstName = '';
         lastName = '';
         dateOfBirth = '';
         applicationcategory = '';
        
}

export class entQualifiedEmbassy {
  qualifiedEmbassyId = 0;
         embassyName = '';
         referenceId = 0;
         brnNumber = '';
         fromDate = '';
         toDate = '';
         statusId = 0;
         statusValue = '';
         msg = new entIEMessage();
         statusDescription = '';
         updateSeq = 0;
         idoObjState = '';
        
}

export class entQualifiedEmbassySearch {
  qualifiedEmbassyId = 0;
         embassyName = '';
         referenceId = 0;
         brnNumber = '';
         fromDate = '';
         toDate = '';
         statusId = 0;
         statusValue = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entQualifiedEmbassySearchResult {
  result: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entQualifiedEmbassySearchResultSet {
  qualifiedEmbassyId = 0;
         embassyName = '';
         referenceId = 0;
         brnNumber = '';
         fromDate = '';
         toDate = '';
         statusId = 0;
         statusValue = '';
         statusDescription = '';
        
}

export class entQualifiedEmployer {
  qualifiedEmployerId = 0;
         employerName = '';
         referenceId = 0;
         brnNumber = '';
         fromDate = '';
         toDate = '';
         statusId = 0;
         statusValue = '';
         msg = new entIEMessage();
         statusDescription = '';
         updateSeq = 0;
         idoObjState = '';
        
}

export class entQualifiedEmployerSearch {
  qualifiedEmployerId = 0;
         employerName = '';
         referenceId = 0;
         brnNumber = '';
         fromDate = '';
         toDate = '';
         statusId = 0;
         statusValue = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entQualifiedEmployerSearchResult {
  result: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entQualifiedEmployerSearchResultSet {
  qualifiedEmployerId = 0;
         employerName = '';
         referenceId = 0;
         brnNumber = '';
         fromDate = '';
         toDate = '';
         statusId = 0;
         statusValue = '';
         statusDescription = '';
        
}

export class entQualifiedInstitution {
  qualifiedInstitutionId = 0;
         institutionName = '';
         referenceId = 0;
         brnNumber = '';
         fromDate = '';
         toDate = '';
         statusId = 0;
         statusValue = '';
         msg = new entIEMessage();
         statusDescription = '';
         updateSeq = 0;
         idoObjState = '';
        
}

export class entQualifiedInstitutionSearch {
  qualifiedInstitutionId = 0;
         institutionName = '';
         referenceId = 0;
         brnNumber = '';
         fromDate = '';
         toDate = '';
         statusId = 0;
         statusValue = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entQualifiedInstitutionSearchResult {
  result: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entQualifiedInstitutionSearchResultSet {
  qualifiedInstitutionId = 0;
         institutionName = '';
         referenceId = 0;
         brnNumber = '';
         fromDate = '';
         toDate = '';
         statusId = 0;
         statusValue = '';
         statusDescription = '';
        
}

export class entReceipt {
  receiptId = 0;
         permitApplicationId = 0;
         receiptNo = '';
         receiptDate = '';
         paymentModeId = 0;
         paymentModeValue = '';
         transactionNo = '';
         bankName = '';
         permitTypeId = 0;
         permitTypeValue = '';
         permitProcessingFee = '';
         permitIssuingFee = '';
         permitProcessingTaxFee = '';
         permitIssuingTaxFee = '';
         totalPaidAmount = '';
         cashierName = '';
         tinNo = '';
         referenceId = 0;
         chequeNo = '';
         permitApplicationNo = '';
         paymentModeDescription = '';
         busAdminMessages = 0;
         ientDDL = new entDDL();
         permitTypeDescription = '';
         newPermitApplicationId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entReportParameters {
  name = '';
         value = '';
         type = 0;
        
}

export class entReportRequest {
  reportServerUrl = '';
         reportPath = '';
         fileFormat = '';
         writeFileFlag = false;
         filePath = '';
         parameters: any = [];
         msg = new entIEMessage();
        
}

export class entReportResponse {
  fileName = '';
         contentType = '';
         byteData: any = [];
         msg = new entIEMessage();
        
}

export class entResidentPermitApplication {
  residentPermitApplicationId = 0;
         permitApplicationId = '';
         currentlyOutsideOfFiji = '';
         indentedArraivalDate = '';
         isIncludingDependent = '';
         applyingPeriod = '';
         industryTypeQuestioner = '';
         skillSetTypeValue = '';
         specialPurposeId = 0;
         specialPurposeValue = '';
         oldValue = '';
         idoObjState = '';
         updateSeq = 0;
         specialPurposeDescription = '';
         isRegionalCountry = '';
         pentResidentPermitApplicationPrimaryApplicantDetail = new entResidentPermitApplicationPrimaryApplicantDetail();
         plstentResidentPermitApplicationDocuments: any = [];
         pentResidentPermitApplicationDocuments = new entResidentPermitApplicationDocuments();
         applicantTypeQuestionerDescription = '';
         comments = '';
         primaryPermitNumber = '';
         primaryPermitApplicationNumber = '';
         primaryPermitTypeId = 0;
         primaryPermitTypeValue = '';
         primaryPermitTypeDescription = '';
         isApplicantIncludedInPrincipleApplication = '';
         isStudyPermit = '';
         isCurrentCitizenOfFiji = '';
         principalApplicantIdentityProofNo = '';
         pentResidentPermitRequiredInfoDocuments = new entResidentPermitApplicationDocuments();
        
}

export class entResidentPermitApplicationCharactorDeclaration {
  residentPermitApplicationCharactorDeclarationId = 0;
         declarationSourceId = 0;
         permitMasterCharacterDeclarationId = 0;
         declaration = '';
         isMandatory = '';
         isChecked = '';
         declarationForId = 0;
         declarationForValue = '';
         declarationTypeId = 0;
         declarationTypeValue = '';
         idoObjState = '';
         updateSeq = 0;
        
}

export class entResidentPermitApplicationCharactorDeclarationComments {
  residentPermitApplicationCharactorDeclarationCommentsId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         comments = '';
         idoObjState = '';
         updateSeq = 0;
         declarationSourceId = 0;
        
}

export class entResidentPermitApplicationDeclaration {
  residentPermitApplicationDeclarationId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         permitMasterApplicationDeclarationId = 0;
         declaration = '';
         isMandatory = '';
         isChecked = '';
         idoObjState = '';
         updateSeq = 0;
        
}

export class entResidentPermitApplicationDocumentDetail {
  residentPermitApplicationDocumentDetailId = 0;
         residentPermitApplicationDocumentId = 0;
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         documentDate = '';
         issuedDate = '';
         documentStatusId = 0;
         documentStatusValue = '';
         comments = '';
         idoObjState = '';
         updateSeq = 0;
         documentStatusDescription = '';
         changedByFullName = '';
         strExpiryComment = '';
         pentDocumentFile = new entDocumentFile();
         plstentResidentPermitApplicationDocumentDetailRejectionReason: any = [];
         createdDate = '';
        
}

export class entResidentPermitApplicationDocumentDetailList {
  plstentResidentPermitApplicationDocumentDetail: any = [];
         msg = new entIEMessage();
        
}

export class entResidentPermitApplicationDocumentDetailRejectionReason {
  residentPermitApplicationDocumentDetailRejectionReasonId = 0;
         residentPermitApplicationDocumentDetailId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         idoObjState = '';
         updateSeq = 0;
         reasonDescription = '';
        
}

export class entResidentPermitApplicationDocuments {
  residentPermitApplicationDocumentId = 0;
         residentPermitApplicationId = 0;
         documentForId = 0;
         documentForValue = '';
         documentForSourceId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         permitMasterDocumentId = 0;
         idoObjState = '';
         updateSeq = 0;
         plstentResidentPermitApplicationDocumentsDetail: any = [];
         ientDDLClass = new entDDLClass();
         documentTypeDescription = '';
         referenceId = 0;
         msg = new entIEMessage();
        
}

export class entResidentPermitApplicationPrimaryApplicantAssuredIncomeDetails {
  residentPermitApplicationPrimaryApplicantAssuredIncomeDetailsId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         sourceOfAssuredIncome = '';
         amount = '';
         transferFrequencyId = 0;
         transferFrequencyValue = '';
         amountToBeTransferred = '';
         receivingFundsInFiji = '';
         idoObjState = '';
         updateSeq = 0;
         transferFrequencyDescription = '';
        
}

export class entResidentPermitApplicationPrimaryApplicantContactDetailInFiji {
  residentPermitApplicationPrimaryApplicantContactDetailInFijiId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         name = '';
         relationshipTypeId = 0;
         relationshipTypeValue = '';
         contactPersonResidentialAddressId = 0;
         idoObjState = '';
         updateSeq = 0;
         ientResidentialAddress = new entAddress();
         relationshipTypeDescription = '';
        
}

export class entResidentPermitApplicationPrimaryApplicantCriminalOffenceDetails {
  residentPermitApplicationPrimaryApplicantCriminalOffenceDetailsId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         date = '';
         offence = '';
         sentence = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entResidentPermitApplicationPrimaryApplicantDependentDetails {
  residentPermitApplicationPrimaryApplicantDependentDetailsId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         givenName = '';
         surname = '';
         dateOfBirth = '';
         countryOfBirthId = 0;
         countryOfBirthValue = '';
         genderId = 0;
         genderValue = '';
         relationshipId = 0;
         relationshipValue = '';
         passportNo = '';
         oldValue = '';
         idoObjState = '';
         updateSeq = 0;
         dateOfIssue = '';
         dateOfExpiry = '';
         plstentResidentPermitApplicationDocuments: any = [];
         plstentResidentPermitApplicationCharactorDeclaration: any = [];
         pentResidentPermitApplicationCharactorDeclarationComments = new entResidentPermitApplicationCharactorDeclarationComments();
         lastEditedByFullName = '';
         appliedDate = '';
         countryOfBirthDescription = '';
         countryOfPassportDescription = '';
         genderDescription = '';
         relationshipDescription = '';
         exisitingPermitNumber = '';
         permitApplicationId = 0;
         isQualified = '';
         msg = new entIEMessage();
        
}

export class entResidentPermitApplicationPrimaryApplicantDependentDetailsList {
  plstentResidentPermitApplicationPrimaryApplicantDependentDetails: any = [];
         msg = new entIEMessage();
        
}

export class entResidentPermitApplicationPrimaryApplicantDetail {
  residentPermitApplicationPrimaryApplicantDetailId = 0;
         residentPermitApplicationId = 0;
         preferredTitleId = 0;
         preferredTitleValue = '';
         otherPreferredTitle = '';
         otherTitle = '';
         surname = '';
         givenNames = '';
         emailId = '';
         mobileNo = '';
         isAnyOtherName = '';
         otherGivenNames = '';
         otherSurname = '';
         genderId = 0;
         genderValue = '';
         dateOfBirth = '';
         nationalityId = 0;
         nationalityValue = '';
         otherNationality = '';
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         isAnyOtherPassport = '';
         isAnyPreviousPassports = '';
         currentResidentialAddressId = 0;
         currentPostalAddressId = 0;
         maritalStatusId = 0;
         maritalStatusValue = '';
         existingDateOfEntry = '';
         existingPortOfEntry = '';
         typeOfExistingPermitId = 0;
         typeOfExistingPermitValue = '';
         existingPermitExpiryDate = '';
         isPreviousVisitToFiji = '';
         isAnyCriminalOffence = '';
         intendedFijiResidentialAddressId = 0;
         intendedFijiPostalAddressId = 0;
         isFamilyMemberIncludedInApplication = '';
         isOtherPassportDetailsIncluded = '';
         isAnyContantPersonInFiji = '';
         isCommittedInAnyCriminalOffence = '';
         isSomeoneHelpedToCompleteApplication = '';
         oldValue = '';
         idoObjState = '';
         updateSeq = 0;
         pentResidentPermitApplicationPrimaryApplicantOtherPassports = new entResidentPermitApplicationPrimaryApplicantOtherPassports();
         plstentResidentPermitApplicationPrimaryApplicantPreviousVisitToFiji: any = [];
         plstentResidentPermitApplicationPrimaryApplicantResidentialAddressOfDecade: any = [];
         plstentResidentPermitApplicationPrimaryApplicantDetailsToCompleteApplication: any = [];
         plstentResidentPermitApplicationPrimaryApplicantContactDetailInFiji: any = [];
         plstentResidentPermitApplicationCharactorDeclaration: any = [];
         plstentResidentPermitApplicationTermsAndConditions: any = [];
         pentResidentPermitApplicationCharactorDeclarationComments = new entResidentPermitApplicationCharactorDeclarationComments();
         pstentResidentPermitApplicationDeclaration: any = [];
         plstentResidentPermitApplicationPrimaryApplicantDependentDetails: any = [];
         ientResidentialAddress = new entAddress();
         ientPostalAddress = new entAddress();
         ientIntendedResidentialAddress = new entAddress();
         ientIntendedPostalAddress = new entAddress();
         isSameAsResidentialAddress = '';
         isSameAsIntendedAddress = '';
         plstentResidentPermitApplicationPrimaryApplicantPurposeToResideInFiji: any = [];
         plstentResidentPermitApplicationPrimaryApplicantCriminalOffenceDetails: any = [];
         plstentResidentPermitApplicationPrimaryApplicantFamilyDetailsOutsideFiji: any = [];
         pentResidentPermitApplicationPrimaryApplicantDependentDetails = new entResidentPermitApplicationPrimaryApplicantDependentDetails();
         lastEditedByFullName = '';
         genderDescription = '';
         nationalityDescription = '';
         maritalStatusDescription = '';
         plstentResidentPermitApplicationPrimaryApplicantAssuredIncomeDetails: any = [];
         pentResidentPermitApplicationPrimaryApplicantDetailsStayInFiji = new entResidentPermitApplicationPrimaryApplicantDetailsStayInFiji();
         pentResidentPermitApplicationPrimaryApplicantSpecialPurposeDetails = new entResidentPermitApplicationPrimaryApplicantSpecialPurposeDetails();
         countryOfPassportDescription = '';
         plstentResidentPermitApplicationDocuments: any = [];
         institutionEmailId = '';
         isDependentIncludeInPrincipalApplicant = '';
         msg = new entIEMessage();
         isMajorApplicant = '';
         isStillDepondsOnPrincipalApplicant = '';
        
}

export class entResidentPermitApplicationPrimaryApplicantDetailsStayInFiji {
  residentPermitApplicationPrimaryApplicantDetailsStayInFijiId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         reasonToResideInFiji = '';
         permitOrCitizenTypeId = 0;
         permitOrCitizenTypeValue = '';
         permitOrVisaNo = '';
         permitOrCitizenTypeDescription = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entResidentPermitApplicationPrimaryApplicantDetailsToCompleteApplication {
  residentPermitApplicationPrimaryApplicantDetailsToCompleteApplicationId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         name = '';
         addressId = 0;
         idoObjState = '';
         updateSeq = 0;
         ientAddress = new entAddress();
        
}

export class entResidentPermitApplicationPrimaryApplicantFamilyDetailsOutsideFiji {
  residentPermitApplicationPrimaryApplicantFamilyDetailsOutsideFijiId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         name = '';
         genderId = 0;
         dateOfBirth = '';
         occupation = '';
         countryOfResidenceId = 0;
         countryOfResidenceValue = '';
         msg = new entIEMessage();
         genderValue = '';
         genderDescription = '';
         countryOfResidenceDescription = '';
         idoObjState = '';
         updateSeq = 0;
         relationshipDescription = '';
         relationshipId = 0;
         relationshipValue = '';
         otherRelationship = '';
        
}

export class entResidentPermitApplicationPrimaryApplicantOtherPassports {
  residentPermitApplicationPrimaryApplicantOtherPassportsId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         oldValue = '';
         idoObjState = '';
         updateSeq = 0;
         countryOfPassportDescription = '';
        
}

export class entResidentPermitApplicationPrimaryApplicantPreviousVisitToFiji {
  residentPermitApplicationPrimaryApplicantPreviousVisitToFijiId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         fromDate = '';
         toDate = '';
         permitTypeId = 0;
         permitTypeValue = '';
         permitNo = '';
         idoObjState = '';
         updateSeq = 0;
         permitTypeDescription = '';
        
}

export class entResidentPermitApplicationPrimaryApplicantPurposeToResideInFiji {
  residentPermitApplicationPrimaryApplicantPurposeToResideInFijiId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         sureName = '';
         foreName = '';
         relationshipId = 0;
         relationshipValue = '';
         reasonToResideInFiji = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         relationshipDescription = '';
         permitOrCitizenTypeId = 0;
         permitOrCitizenTypeValue = '';
         permitOrVisaNo = '';
         permitOrCitizenTypeDescription = '';
        
}

export class entResidentPermitApplicationPrimaryApplicantResidentialAddressOfDecade {
  residentPermitApplicationPrimaryApplicantResidentialAddressOfDecadeId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         fromDate = '';
         toDate = '';
         applicantTypeId = 0;
         applicantTypeValue = '';
         idoObjState = '';
         updateSeq = 0;
         residentialAddressId = 0;
         ientResidentialAddress = new entAddress();
         ientSpouseAddress = new entAddress();
         spouseAddressId = 0;
         spouseFromDate = '';
         spouseToDate = '';
         referenceId = 0;
         msg = new entIEMessage();
        
}

export class entResidentPermitApplicationPrimaryApplicantSpecialPurposeDetails {
  residentPermitApplicationPrimaryApplicantSpecialPurposeDetailsId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         durationOfStayInFiji = 0;
         durationOfStayId = 0;
         durationOfStayValue = '';
         nameOfMedicalInstitution = '';
         financialSupportInFiji = '';
         otherReasons = '';
         idoObjState = '';
         updateSeq = 0;
         durationOfStayDescription = '';
        
}

export class entResidentPermitApplicationSearch {
  permitApplicationNo = '';
         appliedByValue = '';
         appliedByRefNo = '';
         appliedForEmployerId = 0;
         applicationTypeValue = '';
         permitTypeValue = '';
         permitCategoryValue = '';
         paymentDateFrom = '';
         paymentDateTo = '';
         paymentReceiptNo = '';
         paymentAmountFrom = '';
         paymentAmountTo = '';
         paymentStatusValue = '';
         statusValue = '';
         completedTatInDaysFrom = 0;
         completedTatInDaysTo = 0;
         applicantName = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         startDateFrom = '';
         startDateTo = '';
         endDateFrom = '';
         endDateTo = '';
         permitNumber = '';
         passportNumber = '';
         applicationCategoryValue = '';
         approvedDateFrom = '';
         approvedDateTo = '';
         registrationRefNo = '';
         appliedBySourceId = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entResidentPermitApplicationSearchResult {
  plstentResidentPermitApplicationSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entResidentPermitApplicationSearchResultset {
  permitApplicationId = 0;
         permitApplicationNo = '';
         applicantName = '';
         applicationTypeDescription = '';
         permitTypeDescription = '';
         permitCategoryDescription = '';
         statusDescription = '';
         paymentStatusDescription = '';
         paymentDate = '';
         paymentReceiptNo = '';
         paymentAmount = '';
         completedTatInDays = 0;
         totalTatInDays = 0;
         applicationType = '';
         tat = '';
         appliedDate = '';
         passportNumber = '';
         permitNumber = '';
         endDate = '';
         startDate = '';
         applicationCategoryDescription = '';
         paymentReceiptId = 0;
         paymentReceiptDate = '';
         offlinePaymentTransactionId = 0;
         totalTat = '';
         completedTat = '';
         assignedToFullName = '';
         workFlowId = 0;
         statusValue = '';
         isPaymentBtnShow = '';
         permitCategoryValue = '';
         assignedTo = '';
         entryTypeDescription = '';
         entryTypeValue = '';
         assignedDate = '';
         permitStatusValue = '';
         permitStatusDescription = '';
         ibmsPermitRefNo = '';
        
}

export class entResidentPermitApplicationTermsAndConditions {
  residentPermitApplicationDeclarationId = 0;
         residentPermitApplicationPrimaryApplicantDetailId = 0;
         permitMasterApplicationTermsAndConditionsId = 0;
         declaration = '';
         isMandatory = '';
         isChecked = '';
         referenceId = 0;
         declarationForId = 0;
         declarationForValue = '';
         idoObjState = '';
         updateSeq = 0;
        
}

export class entResource {
  resourceId = 0;
         viewNameId = 0;
         viewNameValue = '';
         resourceName = '';
         resourceTypeId = 0;
         resourceTypeValue = '';
         resourceDescription = '';
         referenceId = 0;
         viewNameDescription = '';
         resourceTypeDescription = '';
         modifiedBy = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         moduleValue = '';
        
}

export class entResourcePermission {
  iResourceName = '';
         iPermission = '';
        
}

export class entRole {
  roleId = 0;
         roleName = '';
         statusId = 0;
         statusValue = '';
         beginDate = '';
         endDate = '';
         moduleId = 0;
         moduleValue = '';
         referenceId = 0;
         modifiedBy = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
         ilstRoleResource: any = [];
         statusDescription = '';
         moduleDescription = '';
         ilstentUSer: any = [];
         screenId = 0;
         screenValue = '';
         screenDescription = '';
        
}

export class entRoleGroup {
  roleGroupId = 0;
         groupId = 0;
         roleId = 0;
         beginDate = '';
         endDate = '';
         statusId = 0;
         statusValue = '';
         referenceId = 0;
         role = new entRole();
         ddlRolename = new entDDL();
         msg = new entIEMessage();
         statusDescription = '';
         roleName = '';
         modifiedBy = '';
         updateSeq = 0;
         idoObjState = '';
         ilstConfigValue: any = [];
         iGroup = new entGroup();
        
}

export class entRoleResource {
  roleResourceId = 0;
         roleId = 0;
         resourceId = 0;
         permissionId = 0;
         permissionValue = '';
         referenceId = 0;
         msg = new entIEMessage();
         role = new entRole();
         modifiedBy = '';
         updateSeq = 0;
         idoObjState = '';
         resource = new entResource();
         ilstDDLRoleName: any = [];
        
}

export class entSearchPaymentVerification {
  permitApplicationNo = '';
         isPaymentVerified = '';
         paymentFromDate = '';
         paymentToDate = '';
         permitApplicationId = 0;
         receiptFromDate = '';
         receiptToDate = '';
         receiptNo = '';
         cashierName = '';
         permitTypeValue = '';
         applicantName = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         orderByColumnName = '';
         ascending = false;
        
}

export class entSearchPermitApplicationPaymentReceipt {
  receiptNo = '';
         permitApplicationNo = '';
         paymentModeValue = '';
         receiptFromDate = '';
         receiptToDate = '';
         applicantName = '';
         cashierName = '';
         permitTypeValue = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         orderByColumnName = '';
         ascending = false;
        
}

export class entStringData {
  data = '';
         msg = new entIEMessage();
        
}

export class entStringData3 {
  data1 = '';
         data2 = '';
         data3 = '';
         msg = new entIEMessage();
        
}

export class entStudyPermitApplication {
  studyPermitApplicationId = 0;
         permitApplicationId = 0;
         currentlyOutsideOfFiji = '';
         indentedArraivalDate = '';
         isIncludingDependent = '';
         entryTypeQuestioner = '';
         applicantEmployedWithOrganiaztionQuestioner = '';
         entryTypeId = 0;
         entryTypeValue = '';
         industryTypeQuestioner = '';
         applicantTypeQuestioner = '';
         applicantIndustryTypeId = 0;
         applicantIndustryTypeValue = '';
         skillSetTypeId = 0;
         skillSetTypeValue = '';
         purposeOfVisitId = 0;
         purposeOfVisitValue = '';
         otherPurpose = '';
         referenceId = 0;
         permitValidPeriod = 0;
         oldValue = '';
         pentStudyPermitApplicationPrimaryApplicantDetail = new entStudyPermitApplicationPrimaryApplicantDetail();
         plstentStudyPermitApplicationDocuments: any = [];
         studyInstituteTypeId = 0;
         studyInstituteTypeValue = '';
         studyInstituteTypeDescription = '';
         isExemptedForPayment = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         applicantIndustryTypeDescription = '';
         pentStudyPermitApplicationDocuments = new entStudyPermitApplicationDocuments();
         pentStudyPermitRequiredInfoDocuments = new entStudyPermitApplicationDocuments();
         comments = '';
        
}

export class entStudyPermitApplicationCharactorDeclaration {
  studyPermitApplicationCharactorDeclarationId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         permitMasterCharacterDeclarationId = 0;
         declaration = '';
         isMandatory = '';
         isChecked = '';
         declarationForId = 0;
         declarationForValue = '';
         referenceId = 0;
         declarationTypeId = 0;
         declarationTypeValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationCharactorDeclarationComments {
  studyPermitApplicationCharactorDeclarationCommentsId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         comments = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationDeclaration {
  studyPermitApplicationDeclarationId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         permitMasterApplicationDeclarationId = 0;
         declaration = '';
         isMandatory = '';
         isChecked = '';
         referenceId = 0;
         declarationForId = 0;
         declarationForValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationDocumentDetail {
  studyPermitApplicationDocumentDetailId = 0;
         studyPermitApplicationDocumentId = 0;
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         documentDate = '';
         issuedDate = '';
         documentStatusId = 0;
         documentStatusValue = '';
         comments = '';
         referenceId = 0;
         changedBy = '';
         pentDocumentFile = new entDocumentFile();
         plstentStudyPermitApplicationDocumentDetailRejectionReason: any = [];
         changedByFullName = '';
         documentStatusDescription = '';
         daysToExpire = '';
         strExpiryComment = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationDocumentDetailList {
  plstentStudyPermitApplicationDocumentDetail: any = [];
         msg = new entIEMessage();
        
}

export class entStudyPermitApplicationDocumentDetailRejectionReason {
  studyPermitApplicationDocumentDetailRejectionReasonId = 0;
         studyPermitApplicationDocumentDetailId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         reasonDescription = '';
         otherReason = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationDocuments {
  studyPermitApplicationDocumentId = 0;
         studyPermitApplicationId = 0;
         documentForId = 0;
         documentForValue = '';
         documentForSourceId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         permitMasterDocumentId = 0;
         plstentStudyPermitApplicationDocumentDetail: any = [];
         ientDDLClass = new entDDLClass();
         documentTypeDescription = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationPrimaryApplicantContactDetailInFiji {
  studyPermitApplicationPrimaryApplicantContactDetailInFijiId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         name = '';
         relationshipTypeId = 0;
         relationshipTypeValue = '';
         contactNo = '';
         contactPersonResidentialAddressId = 0;
         ientResidentialAddress = new entAddress();
         relationshipTypeDescription = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationPrimaryApplicantCriminalOffenceDetails {
  studyPermitApplicationPrimaryApplicantCriminalOffenceDetailsId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         date = '';
         offence = '';
         sentence = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationPrimaryApplicantDependentDetails {
  studyPermitApplicationPrimaryApplicantDependentDetailsId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         givenName = '';
         surname = '';
         dateOfBirth = '';
         countryOfBirthId = 0;
         countryOfBirthValue = '';
         genderId = 0;
         genderValue = '';
         relationshipId = 0;
         relationshipValue = '';
         genderDescription = '';
         relationshipDescription = '';
         countryOfBirthDescription = '';
         referenceId = 0;
         oldValue = '';
         passportNo = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationPrimaryApplicantDependentDetailsList {
  plstentStudyPermitApplicationPrimaryApplicantDependentDetails: any = [];
         msg = new entIEMessage();
        
}

export class entStudyPermitApplicationPrimaryApplicantDetail {
  studyPermitApplicationPrimaryApplicantDetailId = 0;
         studyPermitApplicationId = 0;
         preferredTitleId = 0;
         preferredTitleValue = '';
         otherPreferredTitle = '';
         otherTitle = '';
         surname = '';
         givenNames = '';
         emailId = '';
         mobileNo = '';
         isAnyOtherName = '';
         otherGivenNames = '';
         otherSurname = '';
         genderId = 0;
         genderValue = '';
         dateOfBirth = '';
         nationalityId = 0;
         nationalityValue = '';
         otherNationality = '';
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         isAnyOtherPassport = '';
         isAnyPreviousPassports = '';
         currentResidentialAddressId = 0;
         currentPostalAddressId = 0;
         maritalStatusId = 0;
         maritalStatusValue = '';
         existingDateOfEntry = '';
         existingPortOfEntry = '';
         typeOfExistingPermitId = 0;
         typeOfExistingPermitValue = '';
         existingPermitExpiryDate = '';
         isPreviousVisitToFiji = '';
         isAnyCriminalOffence = '';
         intendedFijiResidentialAddressId = 0;
         intendedFijiPostalAddressId = 0;
         placeOfBirthId = 0;
         placeOfBirthValue = '';
         referenceId = 0;
         isSameAsResidentialAddress = '';
         isSameAsIntendedAddress = '';
         isFamilyMemberIncludedInApplication = '';
         isOtherPassportDetailsIncluded = '';
         isAnyContantPersonInFiji = '';
         isCommittedInAnyCriminalOffence = '';
         isSomeoneHelpedToCompleteApplication = '';
         oldValue = '';
         pentStudyPermitApplicationPrimaryApplicantInstitutionDetails = new entStudyPermitApplicationPrimaryApplicantInstitutionDetails();
         plstentStudyPermitApplicationPrimaryApplicantDependentDetails: any = [];
         ientResidentialAddress = new entAddress();
         ientPostalAddress = new entAddress();
         ientIntendedResidentialAddress = new entAddress();
         ientIntendedPostalAddress = new entAddress();
         pentStudyPermitApplicationPrimaryApplicantOtherPassports = new entStudyPermitApplicationPrimaryApplicantOtherPassports();
         plstentStudyPermitApplicationPrimaryApplicantPreviousVisitToFiji: any = [];
         plstentStudyPermitApplicationPrimaryApplicantResidentialAddressOfDecade: any = [];
         plstentStudyPermitApplicationPrimaryApplicantDetailsToCompleteApplication: any = [];
         plstentStudyPermitApplicationPrimaryApplicantContactDetailInFiji: any = [];
         plstentStudyPermitApplicationCharactorDeclaration: any = [];
         plstentStudyPermitApplicationTermsAndConditions: any = [];
         pentStudyPermitApplicationCharactorDeclarationComments = new entStudyPermitApplicationCharactorDeclarationComments();
         pstentStudyPermitApplicationDeclaration: any = [];
         plstentStudyPermitApplicationPrimaryApplicantCriminalOffenceDetails: any = [];
         pentStudyPermitApplicationPrimaryApplicantDetailsForInternshipStudies = new entStudyPermitApplicationPrimaryApplicantDetailsForInternshipStudies();
         pentStudyPermitApplicationPrimaryApplicantDetailsForResearchStudies = new entStudyPermitApplicationPrimaryApplicantDetailsForResearchStudies();
         sponsershipTypeId = 0;
         sponsershipTypeValue = '';
         sponsershipTypeDescription = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         genderDescription = '';
         countryOfPassportDescription = '';
         maritalStatusDescription = '';
         nationalityDescription = '';
         lastEditedByFullName = '';
         isMajorApplicant = '';
         isCurrentlyOutsideFiji = '';
        
}

export class entStudyPermitApplicationPrimaryApplicantDetailsForInternshipStudies {
  studyPermitApplicationPrimaryApplicantDetailsForInternshipStudiesId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         nameOfInternshipProgram = '';
         startDate = '';
         endDate = '';
         nameOfConductedOrganizationOrInstitution = '';
         detailsOfInternshipProgram = '';
         isSupportBySomeone = '';
         financialSupportTypeId = 0;
         financialSupportTypeValue = '';
         financialSupportTypeDescription = '';
         isSponsorByIndividualAndOrganization = '';
         sponsorDuration = '';
         sponsoredDetails = '';
         nameOfSponsor = '';
         referenceId = 0;
         isFullySponsered = '';
         sponsorDurationId = 0;
         sponsorDurationValue = '';
         sponsorDurationDescription = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationPrimaryApplicantDetailsForResearchStudies {
  studyPermitApplicationPrimaryApplicantDetailsForResearchStudiesId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         titleOfResearch = '';
         detailsOfResearchProject = '';
         sponsorName = '';
         researchProjectAssitDetails = '';
         researchConductedPlaceAddressId = 0;
         researchConductedPlace = '';
         thesisDetailsToImmigrationDepartment = '';
         assistDetails = '';
         isSponsorByIndividualAndOrganization = '';
         sponsorDuration = '';
         sponsoredDetails = '';
         nameOfSponsor = '';
         referenceId = 0;
         isFullySponsered = '';
         sponsorDurationId = 0;
         sponsorDurationValue = '';
         sponsorDurationDescription = '';
         ientResearchConductedAddress = new entAddress();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationPrimaryApplicantDetailsToCompleteApplication {
  studyPermitApplicationPrimaryApplicantDetailsToCompleteApplicationId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         name = '';
         addressId = 0;
         ientAddress = new entAddress();
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationPrimaryApplicantInstitutionCourseDetails {
  studyPermitApplicationPrimaryApplicantInstitutionCourseDetailsId = 0;
         studyPermitApplicationPrimaryApplicantInstitutionDetailsId = 0;
         courseStartDate = '';
         courseEndDate = '';
         durationOfCourse = '';
         durationOfCourseId = 0;
         durationOfCourseValue = '';
         durationOfCourseDescription = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationPrimaryApplicantInstitutionDetails {
  studyPermitApplicationPrimaryApplicantInstitutionDetailsId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         nameOfSchoolId = 0;
         classs = '';
         dateYouIntendToStartSchool = '';
         guardianInFiji = '';
         reasonToStudyInFiji = '';
         nameOfInstitutionId = 0;
         nameOfInstitutionValue = '';
         isOtherInstitution = '';
         nameOfOtherInstitution = '';
         nameOfCourseOrStudy = '';
         guardianAddressIdInFiji = 0;
         ientGuardianAddress = new entAddress();
         isAnyGuardianInFiji = '';
         isSponsorByIndividualAndOrganization = '';
         sponsorDuration = '';
         sponsoredDetails = '';
         referenceId = 0;
         nameOfInstitutionDescription = '';
         nameOfSponsorId = 0;
         isFullySponsered = '';
         sponsorDurationId = 0;
         sponsorDurationValue = '';
         sponsorDurationDescription = '';
         institutionOrSchoolEmailId = '';
         nameOfSchoolValue = '';
         nameOfSchoolDescription = '';
         nameOfSponsorValue = '';
         nameOfSponsorDescription = '';
         otherSponsor = '';
         sponsorEmailId = '';
         otherSchool = '';
         pentStudyPermitApplicationPrimaryApplicantInstitutionCourseDetails = new entStudyPermitApplicationPrimaryApplicantInstitutionCourseDetails();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationPrimaryApplicantOtherPassports {
  studyPermitApplicationPrimaryApplicantOtherPassportsId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         oldValue = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         countryOfPassportDescription = '';
        
}

export class entStudyPermitApplicationPrimaryApplicantPreviousVisitToFiji {
  studyPermitApplicationPrimaryApplicantPreviousVisitToFijiId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         fromDate = '';
         toDate = '';
         permitTypeId = 0;
         permitTypeValue = '';
         permitNo = '';
         permitTypeDescription = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationPrimaryApplicantResidentialAddressOfDecade {
  studyPermitApplicationPrimaryApplicantResidentialAddressOfDecadeId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         fromDate = '';
         toDate = '';
         applicantTypeId = 0;
         applicantTypeValue = '';
         residentialAddressId = 0;
         ientResidentialAddress = new entAddress();
         ientSpouseAddress = new entAddress();
         spouseAddressId = 0;
         spouseFromDate = '';
         spouseToDate = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entStudyPermitApplicationSearch {
  permitApplicationNo = '';
         appliedByValue = '';
         appliedByRefNo = '';
         appliedForEmployerId = 0;
         applicationTypeValue = '';
         permitTypeValue = '';
         permitCategoryValue = '';
         paymentDateFrom = '';
         paymentDateTo = '';
         paymentReceiptNo = '';
         paymentAmountFrom = '';
         paymentAmountTo = '';
         paymentStatusValue = '';
         statusValue = '';
         completedTatInDaysFrom = 0;
         completedTatInDaysTo = 0;
         applicantName = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         startDateFrom = '';
         startDateTo = '';
         endDateFrom = '';
         endDateTo = '';
         permitNumber = '';
         passportNumber = '';
         applicationCategoryValue = '';
         approvedDateFrom = '';
         approvedDateTo = '';
         registrationRefNo = '';
         appliedBySourceId = 0;
         assignedDateFrom = '';
         paymentStatus = '';
         entryTypeValue = '';
         assignedDateTo = '';
         assignedTo = '';
         permitStatusValue = '';
        
}

export class entStudyPermitApplicationSearchResult {
  plstentStudyPermitApplicationSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entStudyPermitApplicationSearchResultset {
  permitApplicationId = 0;
         permitApplicationNo = '';
         applicantName = '';
         applicationTypeDescription = '';
         permitTypeDescription = '';
         permitCategoryDescription = '';
         statusDescription = '';
         paymentStatusDescription = '';
         paymentDate = '';
         paymentReceiptNo = '';
         paymentAmount = '';
         completedTatInDays = 0;
         totalTatInDays = 0;
         applicationType = '';
         tat = '';
         appliedDate = '';
         passportNumber = '';
         permitNumber = '';
         endDate = '';
         startDate = '';
         applicationCategoryDescription = '';
         paymentReceiptId = 0;
         paymentReceiptDate = '';
         offlinePaymentTransactionId = 0;
         totalTat = '';
         completedTat = '';
         assignedToFullName = '';
         workFlowId = 0;
         statusValue = '';
         isPaymentBtnShow = '';
         permitCategoryValue = '';
         assignedTo = '';
         entryTypeDescription = '';
         entryTypeValue = '';
         assignedDate = '';
         permitStatusValue = '';
         permitStatusDescription = '';
         ibmsPermitRefNo = '';
        
}

export class entStudyPermitApplicationTermsAndConditions {
  studyPermitApplicationDeclarationId = 0;
         studyPermitApplicationPrimaryApplicantDetailId = 0;
         permitMasterApplicationTermsAndConditionsId = 0;
         declaration = '';
         isMandatory = '';
         isChecked = '';
         referenceId = 0;
         declarationForId = 0;
         declarationForValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entSummaryDetailReportSearch {
  startDate = '';
         endDate = '';
         fileFormat = '';
         providerType = '';
         msg = new entIEMessage();
        
}

export class entSummaryreportSearch {
  startDate = '';
         endDtae = '';
         fileFormat = '';
         msg = new entIEMessage();
        
}

export class entTikinadetails {
  tikinaId = 0;
         tikinaName = '';
         islandId = 0;
         islandName = '';
         provinceId = 0;
         provinceName = '';
        
}

export class entTikinadetailsList {
  plistentTikinadetails: any = [];
        
}

export class entTravelhistory {
  firstName = '';
         lastName = '';
         dateOfBirth = '';
         travelHistory: any = [];
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         errorList: any = [];
        
}

export class entTravelhistoryDetails {
  passportNo = '';
         nationality = '';
         entryDate = '';
         exitDate = '';
        
}

export class entTravelhistoryInput {
  passportno = '';
         nationality = '';
         firstname = '';
         lastname = '';
         dateofbirth = '';
         gender = '';
        
}

export class entUser {
  userSerialId = 0;
         userLoginId = '';
         keyword = '';
         firstName = '';
         middleName = '';
         lastName = '';
         fatherName = '';
         motherName = '';
         dob = '';
         emailId = '';
         contactNumber = '';
         alternateNumber = '';
         genderId = 0;
         genderValue = '';
         webSession = '';
         keyToken = '';
         beginDate = '';
         endDate = '';
         statusId = 0;
         statusValue = '';
         designationId = 0;
         designationValue = '';
         locationId = 0;
         locationValue = '';
         branchId = 0;
         branchValue = '';
         employeeCode = '';
         departmentId = 0;
         departmentValue = '';
         teamId = 0;
         teamValue = '';
         referenceId = 0;
         genderDescription = '';
         designationDescription = '';
         teamDescription = '';
         branchDescription = '';
         locationDescription = '';
         statusDescription = '';
         defaultLandingValueDescription = '';
         modifiedBy = '';
         updateSeq = 0;
         idoObjState = '';
         userAdditionalDetail = new entUserAdditionalDetail();
         userRights: any = [];
         userGroup: any = [];
         role: any = [];
         fullname = '';
         employeeNo = '';
         attachmentSizeLimit = '';
         fileTypes = '';
         isTempPwd = '';
         userDefaultLandingPage = '';
         isManagementGroup = false;
         userBranchCode = '';
         msg = new entIEMessage();
         pentgroup = new entGroup();
         pin = '';
         plstentDDLClass: any = [];
         plstentUserTeamLink: any = [];
         departmentDescription = '';
         screenName = '';
         clientCode = '';
         isPasswordResetted = '';
         maritalStatusId = 0;
         maritalStatusValue = '';
         spouseName = '';
         spouseDob = '';
         plstentUserBranchLink: any = [];
         userFullName = '';
         isAdminUser = '';
         plstentMenuViewNames: any = [];
        
}

export class entUserAdditionalDetail {
  userAdditionalInfoId = 0;
         userSerialId = 0;
         isTempPassword = '';
         currentLoginDatetime = '';
         lastLoginDatetime = '';
         defaultLandingPage = '';
         colorCode = '';
         isSupervisor = '';
         isManager = '';
         modifiedBy = '';
         updateSeq = 0;
         idoObjState = '';
         defaultLandingValueDescription = '';
         ilstentDDLClass: any = [];
         msg = new entIEMessage();
         languagePreference = '';
         isAdUser = '';
         failedAttemptCount = 0;
         lastFailedAttemptDatetime = '';
         isAccountLocked = '';
         urlSendDatetime = '';
         lastPasswordResetDate = '';
         otp = '';
        
}

export class entUserBranchLink {
  userBranchLinkId = 0;
         userSerialId = 0;
         branchId = 0;
         branchValue = '';
         statusId = 0;
         statusValue = '';
         msg = new entIEMessage();
         updateSeq = '';
         idoObjState = '';
         statusDescription = '';
         branchDescription = '';
         referenceId = 0;
         beginDate = '';
         endDate = '';
        
}

export class entUserGroup {
  userGroupId = 0;
         userSerialId = 0;
         groupId = 0;
         beginDate = '';
         endDate = '';
         statusId = 0;
         statusValue = '';
         statusDescription = '';
         strGroupName = '';
         strUserLoginId = '';
         strUserfullName = '';
         strUserStatus = '';
         referenceId = 0;
         modifiedBy = '';
         updateSeq = 0;
         idoObjState = '';
         iUser = new entUser();
         iGroup = new entGroup();
         msg = new entIEMessage();
        
}

export class entUserList {
  ilstUser: any = [];
         msg = new entIEMessage();
        
}

export class entUserRights {
  iViewName = '';
         resourcePermission: any = [];
        
}

export class entUserTeamLink {
  branchId = 0;
         branchValue = '';
         departmentId = 0;
         departmentValue = '';
         locationId = 0;
         locationValue = '';
         statusId = 0;
         statusValue = '';
         teamId = 0;
         teamValue = '';
         userSerialId = 0;
         userTeamId = 0;
         statusDescription = '';
         branchDescription = '';
         departmentDescription = '';
         locationDescription = '';
         teamDescription = '';
         msg = new entIEMessage();
         updateSeq = '';
         idoObjState = '';
        
}

export class entVisa {
  visaId = 0;
         permitApplicationId = 0;
         passportNo = '';
         natioanlityId = 0;
         nationalityValue = '';
         issuedDate = '';
         validFromDate = '';
         validToDate = '';
         permitCategoryId = 0;
         permitCategoryValue = '';
         permitTypeId = 0;
         permitTypeValue = '';
         permitStatusId = 0;
         permitStatusValue = '';
         ibmsPermitRefNo = '';
         isStatusUpdated = '';
         passportExpiryDate = '';
         firstName = '';
         lastName = '';
         dateOfBirth = '';
         genderId = 0;
         genderValue = '';
         applicationTypeId = 0;
         applicationTypeValue = '';
         permitCategory = '';
         locationCode = '';
         applicantTypeId = 0;
         applicantTypeValue = '';
         permitNumber = '';
         sourcePrimaryId = 0;
         ientVisaChangeRequest = new entVisaChangeRequest();
         ilstentVisaChangeRequest: any = [];
         natioanlityDescription = '';
         permitStatusDescription = '';
         permitCategoryDescription = '';
         permitTypeDescription = '';
         organization = '';
         employedAs = '';
         genderDescription = '';
         applicationTypeDescription = '';
         applicantTypeDescription = '';
         permitApplicationNo = '';
         permitApplicationStatus = '';
         noOfDaysValid = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisaChangeRequest {
  visaChangeRequestId = 0;
         visaChangeRequestNo = '';
         requestBy = '';
         requestDate = '';
         visaId = 0;
         permitApplicationId = 0;
         passportNo = '';
         natioanlityId = 0;
         nationalityValue = '';
         issuedDate = '';
         validFromDate = '';
         validToDate = '';
         permitCategoryId = 0;
         permitCategoryValue = '';
         permitTypeId = 0;
         permitTypeValue = '';
         permitStatusId = 0;
         permitStatusValue = '';
         ibmsPermitRefNo = '';
         isStatusUpdated = '';
         passportExpiryDate = '';
         firstName = '';
         lastName = '';
         dateOfBirth = '';
         genderId = 0;
         genderValue = '';
         applicationTypeId = 0;
         applicationTypeValue = '';
         permitCategory = '';
         locationCode = '';
         applicantTypeId = 0;
         applicantTypeValue = '';
         permitNumber = '';
         sourcePrimaryId = 0;
         previousPermit = '';
         requestStatusId = 0;
         requestStatusValue = '';
         comments = '';
         natioanlityDescription = '';
         permitStatusDescription = '';
         permitCategoryDescription = '';
         permitTypeDescription = '';
         organization = '';
         employedAs = '';
         genderDescription = '';
         applicationTypeDescription = '';
         applicantTypeDescription = '';
         permitApplicationNo = '';
         requestStatusDescription = '';
         permitApplicationStatus = '';
         requestByFullName = '';
         noOfDaysValid = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisaSearch {
  permitNo = '';
         permitRefNo = '';
         permitApplicationNo = '';
         firstName = '';
         passportNo = '';
         permitTypeValue = '';
         applicantTypeValue = '';
         paymentDateFrom = '';
         paymentDateTo = '';
         validFromDate = '';
         validToDate = '';
         permitStatusValue = '';
         appStatusValue = '';
         permitCategoryValue = '';
         applicationTypeValue = '';
         isortcolumn = '';
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         orderByColumnName = '';
         ascending = false;
        
}

export class entVisitorsPermitEntensionApplicationDetail {
  visitorsPermitEntensionApplicationDetailId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         dateOfArrivedInFiji = '';
         existingVisitorsVisaApplicationNo = 0;
         expiryDateOfExisitingVisitorsVisa = '';
         dateOfDeparture = '';
         reasonOfExtensionId = 0;
         reasonOfExtensionValue = '';
         destinationCountryAfterLeavingFijiId = 0;
         destinationCountryAfterLeavingFijiValue = '';
         expirationDateOfFlightTicket = '';
         destinationCountryAfterLeavingFijiDescription = '';
         reasonOfExtensionDescription = '';
         referenceId = 0;
         isNextDestinationCountryIsExempted = '';
         detailsOfOnwordOrReturnTicketNo = '';
         isVisaOrPermitForNextDestination = '';
         existingPermitNo = '';
         otherReasonOfExtension = '';
         durationOfStay = 0;
         durationOfStayId = 0;
         durationOfStayValue = '';
         durationOfStayDescription = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsPermitEntensionFinancialDetail {
  visitorsPermitEntensionFinancialDetailId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         financialDatailsId = 0;
         financialDatailsValue = '';
         isSupportBySomeone = '';
         personName = '';
         familyName = '';
         relationshipId = 0;
         relationshipValue = '';
         typeOfFinancialSupportId = 0;
         typeOfFinancialSupportValue = '';
         typeOfFinancialSupportDescription = '';
         financialDatailsDescription = '';
         relationshipDescription = '';
         referenceId = 0;
         otherRelationship = '';
         otherFinancialDatails = '';
         validSponserId = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsPermitEntensionMedicalDetail {
  visitorsPermitEntensionApplicationDetailId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         hospitalAddressId = 0;
         hospitalName = '';
         nameOfPractitioner = '';
         medicalConditionOfApplicant = '';
         ihospitalAddress = new entAddress();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplication {
  visitorsVisaApplicationId = 0;
         permitApplicationId = 0;
         currentlyOutsideOfFiji = '';
         indentedArraivalDate = '';
         isIncludingDependent = '';
         entryTypeQuestioner = '';
         applicantEmployedWithOrganiaztionQuestioner = '';
         entryTypeId = 0;
         entryTypeValue = '';
         industryTypeQuestioner = '';
         applicantTypeQuestioner = '';
         applicantIndustryTypeId = 0;
         applicantIndustryTypeValue = '';
         skillSetTypeId = 0;
         skillSetTypeValue = '';
         purposeOfVisitId = 0;
         purposeOfVisitValue = '';
         otherPurpose = '';
         visaApplicationTypeId = 0;
         visaApplicationTypeValue = '';
         visitorsVisaApplicationGroupId = 0;
         sponsorshipId = 0;
         sponsorshipValue = '';
         permitSubtypeCategoryId = 0;
         permitSubtypeCategoryValue = '';
         isTravelAsGroup = '';
         referenceId = 0;
         pentVisitorsVisaApplicationPrimaryApplicantDetail = new entVisitorsVisaApplicationPrimaryApplicantDetail();
         plstentVisitorsVisaApplicationDocuments: any = [];
         plstentVisitorsVisaApplicationFees: any = [];
         groupRefNo = '';
         pentVisitorsVisaApplicationGroup = new entVisitorsVisaApplicationGroup();
         visaApplicationTypeDescription = '';
         purposeOfVisitDescription = '';
         sponsorshipDescription = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         entryTypeDescription = '';
         editedBy = '';
         assginedTo = '';
         permitValidPeriod = 0;
         oldValue = '';
         assignedToOfficer = '';
         comments = '';
         otherSponsorshipValue = '';
         isShipCrewMember = '';
         pentVisitorsVisaApplicationDocuments = new entVisitorsVisaApplicationDocuments();
         pentVisitorsPermitRequiredInfoDocuments = new entVisitorsVisaApplicationDocuments();
        
}

export class entVisitorsVisaApplicationCharactorDeclaration {
  visitorsVisaApplicationCharactorDeclarationId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         permitMasterCharacterDeclarationId = 0;
         declaration = '';
         isMandatory = '';
         isChecked = '';
         declarationForId = 0;
         declarationForValue = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplicationCharactorDeclarationComments {
  visitorsVisaApplicationCharactorDeclarationCommentsId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         comments = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplicationDeclaration {
  visitorsVisaApplicationDeclarationId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         permitMasterApplicationDeclarationId = 0;
         declaration = '';
         isMandatory = '';
         isChecked = '';
         declarationForId = 0;
         declarationForValue = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplicationDocumentDetail {
  visitorsVisaApplicationDocumentDetailId = 0;
         visitorsVisaApplicationDocumentsId = 0;
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         documentDate = '';
         issuedDate = '';
         documentStatusId = 0;
         documentStatusValue = '';
         comments = '';
         pentDocumentFile = new entDocumentFile();
         pentVisitorsVisaApplicationDocumentDetailRejectionReason: any = [];
         documentStatusDescription = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         oldValue = '';
         changedByFullName = '';
         daysToExpire = '';
         changedBy = '';
         createdDate = '';
         strExpiryComment = '';
        
}

export class entVisitorsVisaApplicationDocumentDetailList {
  pententVisitorsVisaApplicationDocumentDetail: any = [];
         msg = new entIEMessage();
        
}

export class entVisitorsVisaApplicationDocumentDetailRejectionReason {
  visitorsVisaApplicationDocumentDetailRejectionReasonId = 0;
         visitorsVisaApplicationDocumentDetailId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         reasonDescription = '';
        
}

export class entVisitorsVisaApplicationDocuments {
  visitorsVisaApplicationDocumentsId = 0;
         visitorsVisaApplicationId = 0;
         documentForId = 0;
         documentForValue = '';
         documentForSourceId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         permitMasterDocumentId = 0;
         documentForDescription = '';
         documentTypeDescription = '';
         referenceId = 0;
         plstentVisitorsVisaApplicationDocumentDetail: any = [];
         ientDDLClass = new entDDLClass();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplicationFees {
  visitorsVisaApplicationFeesId = 0;
         visitorsVisaApplicationId = 0;
         permitMasterFeesDetailId = 0;
         feeAmount = '';
         taxPercentage = '';
         taxAmount = '';
         totalFee = '';
         feeType = '';
         mandatory = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplicationGroup {
  visitorsVisaApplicationGroupId = 0;
         visitorsVisaGroupRefNo = '';
         visitorsVisaGroupName = '';
         statusId = 0;
         statusValue = '';
         natueOfGroupId = 0;
         natueOfGroupValue = '';
         natueOfGroupDescription = '';
         statusDescription = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplicationPrimaryApplicantContactDetailInFiji {
  visitorsVisaApplicationPrimaryApplicantContactDetailInFijiId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         name = '';
         relationshipTypeId = 0;
         relationshipTypeValue = '';
         contactPersonResidentialAddressId = '';
         relationshipTypeDescription = '';
         referenceId = 0;
         icontactPersonResidentialAddress = new entAddress();
         contactNo = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplicationPrimaryApplicantDependentsDetail {
  visitorsVisaApplicationPrimaryApplicantDependentsDetailId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         givenName = '';
         dateOfBirth = '';
         countryOfBirthId = 0;
         countryOfBirthValue = '';
         otherCountryOfBirth = '';
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountryOfPassport = '';
         genderId = 0;
         genderValue = '';
         relationshipId = 0;
         relationshipValue = '';
         genderDescription = '';
         countryOfBirthDescription = '';
         countryOfPassportDescription = '';
         relationshipDescription = '';
         surname = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         lastEditedByFullName = '';
         oldValue = '';
        
}

export class entVisitorsVisaApplicationPrimaryApplicantDetail {
  visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         visitorsVisaApplicationId = 0;
         preferredTitleId = 0;
         preferredTitleValue = '';
         otherPreferredTitle = '';
         otherTitle = '';
         surname = '';
         givenNames = '';
         emailId = '';
         mobileNo = '';
         isAnyOtherName = '';
         otherGivenNames = '';
         otherSurname = '';
         genderId = 0;
         genderValue = '';
         dateOfBirth = '';
         nationalityId = 0;
         nationalityValue = '';
         otherNationality = '';
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         isAnyOtherPassport = '';
         isAnyPreviousPassports = '';
         currentResidentialAddressId = 0;
         occupationAddressId = 0;
         maritalStatusId = 0;
         maritalStatusValue = '';
         existingDateOfEntry = '';
         existingPortOfEntry = '';
         typeOfExistingPermitId = 0;
         typeOfExistingPermitValue = '';
         existingPermitExpiryDate = '';
         isPreviousVisitToFiji = '';
         isAnyCriminalOffence = '';
         currentResidentialPostalAddressId = 0;
         extensionFijiResidentialAddressId = 0;
         placeOfBirthId = 0;
         placeOfBirthValue = '';
         plstentVisitorsVisaApplicationPrimaryApplicantDependentsDetail: any = [];
         pentVisitorsVisaApplicationPrimaryApplicantStayDetail = new entVisitorsVisaApplicationPrimaryApplicantStayDetail();
         pentVisitorsVisaApplicationPrimaryApplicantPreviousTravelDetail: any = [];
         pslstentVisitorsVisaApplicationPrimaryApplicantContactDetailInFiji: any = [];
         ientHomeAddress = new entAddress();
         ientPostalHomeAddress = new entAddress();
         referenceId = 0;
         pentVisitorsPermitEntensionApplicationDetail = new entVisitorsPermitEntensionApplicationDetail();
         pentVisitorsPermitEntensionFinancialDetail = new entVisitorsPermitEntensionFinancialDetail();
         pentVisitorsVisaApplicationPrimaryApplicantPreviousPassports = new entVisitorsVisaApplicationPrimaryApplicantPreviousPassports();
         pentVisitorsVisaApplicationPrimaryApplicantOtherPassports = new entVisitorsVisaApplicationPrimaryApplicantOtherPassports();
         intendedExtensionFijiResidentialAddressId = 0;
         intendedExtensionFijiPostalAddressId = 0;
         isSameAsResidentialAddress = '';
         isSameAsIntendedResidentialAddressFiji = '';
         isSameAsExtensionIntendedResidentialAddressFiji = '';
         existingPermitNumber = '';
         preferredTitleDescription = '';
         genderDescription = '';
         nationalityDescription = '';
         countryOfPassportDescription = '';
         maritalStatusDescription = '';
         typeOfExistingPermitDescription = '';
         lastEditedByFullName = '';
         isFamilyMemberIncluded = '';
         isAnyContactFamilyInFiji = '';
         plstentVisitorsVisaApplicationCharactorDeclaration: any = [];
         plstentVisitorsVisaApplicationDeclaration: any = [];
         pentVisitorsVisaApplicationCharactorDeclarationComments = new entVisitorsVisaApplicationCharactorDeclarationComments();
         ientOccupaionAddress = new entAddress();
         ientIntendedEntensionResidentialFijiAddress = new entAddress();
         occupation = '';
         employerName = '';
         employerContactNo = '';
         placeOfBirthDescription = '';
         existingPermitNoForExtension = '';
         employerTypeId = '';
         employerTypeValue = '';
         employerTypeDescription = '';
         isMajorApplicant = '';
         oldValue = '';
         isResidingInOtherCountry = '';
         isSameAsResidingResidentialAddress = '';
         residingResidentialAddressId = 0;
         residingPostalAddressId = 0;
         areUTravelWithSpouse = '';
         areUTravelWithParents = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         iresidingResidentialAddress = new entAddress();
         iresidingPostalAddress = new entAddress();
         pentVisitorsPermitEntensionMedicalDetail = new entVisitorsPermitEntensionMedicalDetail();
        
}

export class entVisitorsVisaApplicationPrimaryApplicantOtherPassports {
  visitorsVisaApplicationPrimaryApplicantOtherPassportsId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplicationPrimaryApplicantPreviousPassports {
  visitorsVisaApplicationPrimaryApplicantPreviousPassportsId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplicationPrimaryApplicantPreviousTravelDetail {
  visitorsVisaApplicationPrimaryApplicantPreviousTravelDetailId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         fullName = '';
         dependentName = '';
         dateOfApplication = '';
         placeOfApplication = '';
         resultOfApplicationId = 0;
         resultOfApplicationValue = '';
         visaNoOrPermitNo = '';
         resultOfApplicationDescription = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplicationPrimaryApplicantStayDetail {
  visitorsVisaApplicationPrimaryApplicantStayDetailId = 0;
         visitorsVisaApplicationPrimaryApplicantDetailId = 0;
         stayAddressId = 0;
         dateOfArrivalInFiji = '';
         durationOfStay = '';
         sourceOfFinancialSupportId = 0;
         sourceOfFinancialSupportValue = '';
         arrivalFromId = 0;
         arrivalFromValue = '';
         nextCountryToVisitId = 0;
         nextCountryToVisitValue = '';
         referenceId = 0;
         arrivalFromDescription = '';
         nextCountryToVisitDescription = '';
         sourceOfFinancialSupportDescription = '';
         ientStayAddressInFiji = new entAddress();
         durationOfStayId = 0;
         durationOfStayValue = '';
         durationOfStayDescription = '';
         isVisaOrPermitForNextDestination = '';
         isNextDestinationIsExempted = '';
         detailsOfOnwardAndReturnTicket = '';
         isAppliedForPermitBefore = '';
         stayTypeInFijiId = 0;
         stayTypeInFijiValue = '';
         otherStayTypeInFiji = '';
         durationOfStayInTime = '';
         stayTypeInFijiDescription = '';
         accommodation = '';
         arePlannedToStayInFiji = '';
         hotelName = '';
         otherSourceOfFinancialSupport = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entVisitorsVisaApplicationSearch {
  permitApplicationNo = '';
         appliedByValue = '';
         appliedByRefNo = '';
         appliedForEmployerId = 0;
         applicationTypeValue = '';
         permitTypeValue = '';
         permitCategoryValue = '';
         paymentDateFrom = '';
         paymentDateTo = '';
         paymentReceiptNo = '';
         paymentAmountFrom = '';
         paymentAmountTo = '';
         paymentStatusValue = '';
         statusValue = '';
         completedTatInDaysFrom = 0;
         completedTatInDaysTo = 0;
         applicantName = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         startDateFrom = '';
         startDateTo = '';
         endDateFrom = '';
         endDateTo = '';
         permitNumber = '';
         passportNumber = '';
         applicationCategoryValue = '';
         approvedDateFrom = '';
         approvedDateTo = '';
         registrationRefNo = '';
         appliedBySourceId = 0;
         assignedDateFrom = '';
         paymentStatus = '';
         entryTypeValue = '';
         assignedDateTo = '';
         assignedTo = '';
         visitorsVisaGroupRefNo = '';
         permitStatusValue = '';
        
}

export class entVisitorsVisaApplicationSearchResult {
  plstentVisitorsVisaApplicationSearchResultset: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entVisitorsVisaApplicationSearchResultset {
  permitApplicationId = 0;
         permitApplicationNo = '';
         applicantName = '';
         applicationTypeDescription = '';
         permitTypeDescription = '';
         permitCategoryDescription = '';
         statusDescription = '';
         paymentStatusDescription = '';
         paymentDate = '';
         paymentReceiptNo = '';
         paymentAmount = '';
         completedTatInDays = 0;
         totalTatInDays = 0;
         applicationType = '';
         tat = '';
         appliedDate = '';
         passportNumber = '';
         permitNumber = '';
         endDate = '';
         startDate = '';
         applicationCategoryDescription = '';
         paymentReceiptId = 0;
         paymentReceiptDate = '';
         offlinePaymentTransactionId = 0;
         totalTat = '';
         completedTat = '';
         assignedToFullName = '';
         workFlowId = 0;
         statusValue = '';
         isPaymentBtnShow = '';
         permitCategoryValue = '';
         assignedTo = '';
         entryTypeDescription = '';
         entryTypeValue = '';
         assignedDate = '';
         permitStatusValue = '';
         permitStatusDescription = '';
         visitorsVisaGroupRefNo = '';
        
}

export class entWorkPermitApplication {
  workPermitApplicationId = 0;
         permitApplicationId = 0;
         currentlyOutsideOfFiji = '';
         indentedArraivalDate = '';
         isIncludingDependent = '';
         oldValue = '';
         referenceId = 0;
         pentWorkPermitApplicationPrimaryApplicantDetail = new entWorkPermitApplicationPrimaryApplicantDetail();
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         lentWorkPermitApplicationQuestions: any = [];
         plstentWorkPermitApplicationChecklist: any = [];
         plstentWorkPermitApplicationFees: any = [];
         applicationTypeQuestionerId = 0;
         applicantEmployedWithOrganiaztionQuestionerId = 0;
         applyingPeriodId = 0;
         industryTypeQuestionerId = 0;
         applicantTypeQuestionerId = 0;
         applicantIndustryTypeId = 0;
         applicantIndustryTypeValue = '';
         skillSetTypeId = 0;
         skillSetTypeValue = '';
         purposeOfApplicationId = 0;
         purposeOfApplicationValue = '';
         otherPurpose = '';
         purposeOfApplicationDescription = '';
         applicationTypeQuestionerDescription = '';
         applicantEmployedWithOrganiaztionQuestionerDescription = '';
         applyingPeriodDescription = '';
         industryTypeQuestionerDescription = '';
         applicantTypeQuestionerDescription = '';
         applicationTypeQuestionerValue = '';
         applicantEmployedWithOrganiaztionQuestionerValue = '';
         applyingPeriodValue = '';
         industryTypeQuestionerValue = '';
         applicantTypeQuestionerValue = '';
         comments = '';
         pentWorkPermitApplicationDocuments = new entWorkPermitApplicationDocuments();
         workPermitApplicationGroupId = 0;
         pentWorkPermitApplicationGroup = new entWorkPermitApplicationGroup();
        
}

export class entWorkPermitApplicationAuthorisedRecipientDetail {
  workPermitApplicationAuthorisedRecipientDetailId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         isCommunicationToAuthorisedRecipient = '';
         surname = '';
         givenNames = '';
         organizationName = '';
         businessAddressId = 0;
         addressOfCorrespondenceId = 0;
         emailId = '';
         mobileNo = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationCharactorDeclaration {
  workPermitApplicationCharactorDeclarationId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         permitMasterCharacterDeclarationId = 0;
         declaration = '';
         comments = '';
         isMandatory = '';
         isChecked = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         declarationForId = 0;
         declarationForValue = '';
         declarationSourceId = 0;
        
}

export class entWorkPermitApplicationChecklist {
  workPermitApplicationChecklistId = 0;
         workPermitApplicationId = 0;
         permitMasterChecklistId = 0;
         checklist = '';
         isMandatory = '';
         oldValue = '';
         checkedBy = '';
         checkDate = '';
         groupId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationDeclaration {
  workPermitApplicationDeclarationId = 0;
         workPermitApplicationId = 0;
         permitMasterApplicationDeclarationId = 0;
         declaration = '';
         comments = '';
         isMandatory = '';
         isChecked = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         isApplicationDeclaration = '';
         isDocumentRequired = '';
         pentWorkPermitApplicationDocuments = new entWorkPermitApplicationDocuments();
         declarationCode = '';
        
}

export class entWorkPermitApplicationDeclarationComment {
  workPermitApplicationDeclarationCommentId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         comments = '';
         nameOfDeclarationPerson = '';
         positionInOrganization = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationDependentCharactorDeclarationComment {
  workPermitApplicationDependentCharactorDeclarationCommentId = 0;
         workPermitApplicationPrimaryApplicantDependentsDetailId = 0;
         comments = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationDocumentDetailRejectionReason {
  workPermitApplicationDocumentDetailRejectionReasonId = 0;
         workPermitApplicationDocumentDetailId = 0;
         reasonId = 0;
         reasonValue = '';
         isChecked = '';
         otherReason = '';
         reasonDescription = '';
         updateSeq = 0;
         idoObjState = '';
         msg = new entIEMessage();
        
}

export class entWorkPermitApplicationDocuments {
  workPermitApplicationDocumentId = 0;
         workPermitApplicationId = 0;
         documentForId = 0;
         documentForValue = '';
         documentForSourceId = 0;
         documentTypeId = 0;
         documentTypeValue = '';
         isMandatory = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         documentTypeDescription = '';
         plstentWorkPermitApplicationDocumentsDetail: any = [];
         permitMasterDocumentId = 0;
         pentDDLData = new entDDLClass();
        
}

export class entWorkPermitApplicationDocumentsDetail {
  workPermitApplicationDocumentDetailId = 0;
         workPermitApplicationDocumentId = 0;
         documentFileId = 0;
         dmsRefNo = '';
         documentRefNo = '';
         expiryDate = '';
         documentDate = '';
         issuedDate = '';
         oldValue = '';
         documentStatusId = 0;
         documentStatusValue = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         documentStatusDescription = '';
         pentDocumentFile = new entDocumentFile();
         comments = '';
         changedByFullName = '';
         daysToExpire = '';
         changedBy = '';
         createdDate = '';
         strExpiryComment = '';
         plstentWorkPermitApplicationDocumentDetailRejectionReason: any = [];
        
}

export class entWorkPermitApplicationDocumentsDetailList {
  plstentWorkPermitApplicationDocumentsDetail: any = [];
         msg = new entIEMessage();
        
}

export class entWorkPermitApplicationEmployeeContractBenefitDetail {
  workPermitApplicationEmployeeContractBenifitDetailId = 0;
         workPermitApplicationEmployeeContractDetailId = 0;
         benefitId = 0;
         benefitValue = '';
         isChecked = '';
         otherBenefit = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         benefitDescription = '';
        
}

export class entWorkPermitApplicationEmployeeContractDetail {
  workPermitApplicationEmployeeContractDetailId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         jobTitle = '';
         durationOfContract = 0;
         durationId = 0;
         durationValue = '';
         remunerationRate = '';
         remunerationId = 0;
         remunerationValue = '';
         employmentStartDate = '';
         employmentEndDate = '';
         hoursOfWorkFrom = '';
         hoursOfWorkTo = '';
         isShiftHourWork = '';
         shiftHour = 0;
         probationaryPeriod = 0;
         allowanceId = 0;
         allowanceValue = '';
         placeOfWork = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         durationDescription = '';
         remunerationDescription = '';
         allowanceDescription = '';
         probationaryPeriodId = 0;
         probationaryPeriodValue = '';
         probationaryPeriodDescription = '';
         plstentWorkPermitApplicationEmployeeContractBenefitDetail: any = [];
         remunerationPeriodId = 0;
         remunerationPeriodValue = '';
         restPeriod = '';
         remunerationPeriodDescription = '';
        
}

export class entWorkPermitApplicationEmployeeDeclaration {
  workPermitApplicationEmployeeDeclarationId = 0;
         workPermitApplicationEmployeeDeclarationSummaryId = 0;
         employeeDeclarationId = 0;
         employeeDeclarationValue = '';
         isChecked = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         employeeDeclarationDescription = '';
        
}

export class entWorkPermitApplicationEmployeeDeclarationSummary {
  workPermitApplicationEmployeeDeclarationSummaryId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         signature = '';
         date = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         plstentWorkPermitApplicationEmployeeDeclaration: any = [];
         nameOfAdultWitness = '';
        
}

export class entWorkPermitApplicationEmployerDeclaration {
  workPermitApplicationEmployerDeclarationId = 0;
         workPermitApplicationEmployerDeclarationSummaryId = 0;
         employerDeclarationId = 0;
         employerDeclarationValue = '';
         isChecked = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         employerDeclarationDescription = '';
        
}

export class entWorkPermitApplicationEmployerDeclarationSummary {
  workPermitApplicationEmployerDeclarationSummaryId = 0;
         workPermitApplicationEmployerDetailId = 0;
         signature = '';
         date = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         plstentWorkPermitApplicationEmployerDeclaration: any = [];
         nameOfPerson = '';
         positionInOrganization = '';
        
}

export class entWorkPermitApplicationEmployerDetail {
  workPermitApplicationEmployerDetailId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         organizationName = '';
         organizationAddressId = 0;
         industryTypeId = 0;
         industryTypeValue = '';
         emailId = '';
         mobileNo = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         pentWorkPermitApplicationEmployerDeclarationSummary = new entWorkPermitApplicationEmployerDeclarationSummary();
         industryTypeDescription = '';
         pentAddress = new entAddress();
         addressId = 0;
         plstentWorkPermitApplicationDocuments: any = [];
         plstentLocalEmployerPersonEmployedPositionDetail: any = [];
         plstentExpatrateEmployerPersonEmployedPositionDetail: any = [];
        
}

export class entWorkPermitApplicationFees {
  workPermitApplicationFeesId = 0;
         workPermitApplicationId = 0;
         permitMasterFeesDetailId = 0;
         oldValue = '';
         feesAmount = '';
         feeType = '';
         mandatory = '';
         taxAmount = '';
         totalFee = '';
         taxPercentage = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationGroup {
  workPermitApplicationGroupId = 0;
         groupRefNo = '';
         groupName = '';
         statusId = 0;
         statusValue = '';
         statusDescription = '';
         referenceId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationLocalPersonAndPositionDetail {
  workPermitApplicationLocalPersonDetailId = 0;
         workPermitApplicationId = 0;
         name = '';
         position = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         emailId = '';
         contactNo = '';
         dateOfBirth = '';
         proofDocumentId = 0;
         pentWorkPermitApplicationDocuments = new entWorkPermitApplicationDocuments();
        
}

export class entWorkPermitApplicationOverseasEmployerDetail {
  workPermitApplicationOverseasEmployerDetailId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         organizationName = '';
         organizationAddressId = 0;
         emailId = '';
         mobileNo = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         pentAddress = new entAddress();
        
}

export class entWorkPermitApplicationPersonCurrentEmployement {
  workPermitApplicationPersonCurrentEmploymentId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         currentEmploymentStatusId = 0;
         currentEmploymentStatusValue = '';
         businessOrOrganizationName = '';
         businessOrOrganizationAddressId = 0;
         positionHeld = '';
         startDateOfEmployment = '';
         contactPersonName = '';
         contactPersonPosition = '';
         contactPersonEmailId = '';
         contactPersonPhoneNo = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         currentEmploymentStatusDescription = '';
         pentAddress = new entAddress();
        
}

export class entWorkPermitApplicationPersonEducationDetails {
  workPermitApplicationPersonEducationDetailId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         educationalInstituteName = '';
         qualificationAttained = '';
         attainedDate = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationPersonPreviousEmployment {
  workPermitApplicationPersonPreviousEmploymentId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         businessOrOrganizationName = '';
         positionHeld = '';
         startDate = '';
         endDate = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationPositionAdvertisementDetail {
  workPermitApplicationPositionAdvertisementDetailId = 0;
         workPermitApplicationId = 0;
         newspaperName = '';
         issueDate = '';
         numberOfApplicants = 0;
         result = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationPrimaryApplicantCharactorDeclarationComment {
  workPermitApplicationPrimaryApplicantCharactorDeclarationId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         comments = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationPrimaryApplicantCriminalOffenceDetail {
  workPermitApplicationPrimaryApplicantCriminalOffenceDetailId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         dateOfCriminalOffence = '';
         offence = '';
         sentence = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationPrimaryApplicantDependentsDetail {
  workPermitApplicationPrimaryApplicantDependentsDetailId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         surname = '';
         givenNames = '';
         dateOfBirth = '';
         countryOfBirthId = 0;
         countryOfBirthValue = '';
         otherCountryOfBirth = '';
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountryOfPassport = '';
         genderId = 0;
         genderValue = '';
         relationshipId = 0;
         relationshipValue = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         countryOfBirthDescription = '';
         countryOfPassportDescription = '';
         genderDescription = '';
         relationshipDescription = '';
         plstentWorkPermitApplicationDocuments: any = [];
         ientWorkPermitApplicationDependentCharactorDeclarationComment = new entWorkPermitApplicationDependentCharactorDeclarationComment();
         plstentWorkPermitApplicationCharactorDeclaration: any = [];
         lastEditedByFullName = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         appliedDate = '';
         isQualified = '';
        
}

export class entWorkPermitApplicationPrimaryApplicantDetail {
  workPermitApplicationPrimaryApplicantDetailId = 0;
         workPermitApplicationId = 0;
         preferredTitleId = 0;
         preferredTitleValue = '';
         otherTitle = '';
         surname = '';
         givenNames = '';
         emailId = '';
         mobileNo = '';
         isAnyOtherName = '';
         otherGivenNames = '';
         otherSurname = '';
         genderId = 0;
         genderValue = '';
         dateOfBirth = '';
         nationalityId = 0;
         nationalityValue = '';
         otherNationality = '';
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         isAnyOtherPassport = '';
         isAnyPreviousPassports = '';
         currentResidentialAddressId = 0;
         currentPostalAddressId = 0;
         maritalStatusId = 0;
         maritalStatusValue = '';
         existingDateOfEntry = '';
         existingPortOfEntry = '';
         typeOfExistingPermitId = 0;
         typeOfExistingPermitValue = '';
         existingPermitExpiryDate = '';
         isPreviousVisitToFiji = '';
         isAnyCriminalOffence = '';
         intendedFijiResidentialAddressId = 0;
         intendedFijiPostalAddressId = 0;
         isInvestor = '';
         oldValue = '';
         plstentWorkPermitApplicationDocuments: any = [];
         pentWorkPermitApplicationPrimaryApplicantPreviousPassports = new entWorkPermitApplicationPrimaryApplicantPreviousPassports();
         pentWorkPermitApplicationPrimaryApplicantOtherPassports = new entWorkPermitApplicationPrimaryApplicantOtherPassports();
         plstentWorkPermitApplicationPrimaryApplicantPreviousVisitDetail: any = [];
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         plstentWorkPermitApplicationPrimaryApplicantCriminalOffenceDetail: any = [];
         pentWorkPermitApplicationPrimaryApplicantShareHoldingDetail = new entWorkPermitApplicationPrimaryApplicantShareHoldingDetail();
         plstentWorkPermitApplicationPrimaryApplicantDependentsDetail: any = [];
         pentWorkPermitApplicationAuthorisedRecipientDetail = new entWorkPermitApplicationAuthorisedRecipientDetail();
         pentWorkPermitApplicationEmployerDetail = new entWorkPermitApplicationEmployerDetail();
         pentWorkPermitApplicationPrimaryApplicantPositionDetail = new entWorkPermitApplicationPrimaryApplicantPositionDetail();
         pentWorkPermitApplicationEmployeeContractDetail = new entWorkPermitApplicationEmployeeContractDetail();
         pentWorkPermitApplicationEmployeeDeclarationSummary = new entWorkPermitApplicationEmployeeDeclarationSummary();
         pentWorkPermitApplicationPersonCurrentEmployement = new entWorkPermitApplicationPersonCurrentEmployement();
         plstentWorkPermitApplicationPersonPreviousEmployment: any = [];
         plstentWorkPermitApplicationPersonEducationDetails: any = [];
         preferredTitleDescription = '';
         genderDescription = '';
         nationalityDescription = '';
         countryOfPassportDescription = '';
         maritalStatusDescription = '';
         typeOfExistingPermitDescription = '';
         plstentWorkPermitApplicationPrimaryApplicantSpouseResidentialDetail: any = [];
         pentResidentialAddress = new entAddress();
         pentPostalAddress = new entAddress();
         pentIntendedResidentialAddress = new entAddress();
         pentIntendedPostalAddress = new entAddress();
         ientWorkPermitApplicationPrimaryApplicantCharactorDeclarationComment = new entWorkPermitApplicationPrimaryApplicantCharactorDeclarationComment();
         ientWorkPermitApplicationDeclarationComment = new entWorkPermitApplicationDeclarationComment();
         plstentWorkPermitApplicationCharactorDeclaration: any = [];
         plstentWorkPermitApplicationDeclaration: any = [];
         plstentPrimaryApplicantCotraversialList: any = [];
         plstentPrimaryApplicantTravelHitory: any = [];
         plstentPrimaryApplicantPIStatusList: any = [];
         plstentPrimaryApplicantDPOList: any = [];
         ientWorkPermitApplicationPrimaryApplicantDependentsDetail = new entWorkPermitApplicationPrimaryApplicantDependentsDetail();
         isSameAsResidentialAddress = '';
         isSameAsIntendedResidentialAddressFiji = '';
         pentWorkPermitApplicationOverseasEmployerDetail = new entWorkPermitApplicationOverseasEmployerDetail();
         existingPermitNumber = '';
         lastEditedByFullName = '';
         plstentWorkPermitApplicationPrimaryApplicantQualification: any = [];
         plstentWorkPermitApplicationPrimaryApplicantExperience: any = [];
         plstentWorkPermitApplicationRequiredQualification: any = [];
         plstentWorkPermitApplicationRequiredExperience: any = [];
        
}

export class entWorkPermitApplicationPrimaryApplicantExperience {
  workPermitApplicationPrimaryApplicantExperienceId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         experienceId = 0;
         experienceValue = '';
         otherExperience = '';
         commentBox = '';
         position = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         experienceDescription = '';
         experienceTypeId = 0;
         experienceTypeValue = '';
         experienceTypeDescription = '';
        
}

export class entWorkPermitApplicationPrimaryApplicantOtherPassports {
  workPermitApplicationPrimaryApplicantOtherPassportsId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         countryOfPassportDescription = '';
        
}

export class entWorkPermitApplicationPrimaryApplicantPositionDetail {
  workPermitApplicationPrimaryApplicantPositionDetailId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         positionOfEmployee = '';
         dutiesOfEmployee = '';
         numberOfLocalEmployees = 0;
         numberOfExpatriateEmployees = 0;
         isPositionNew = '';
         detailsOfPreviousWorkingPerson = '';
         experienceNeededForPosition = 0;
         qualificatonNeededForPosition = '';
         primaryApplicantQualification = '';
         reasonWhyPositionCannotFilledByLocal = '';
         reasonWhyLocalApplicantsNotSuitable = '';
         trainingPlanForLocalApplicants = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         plstentWorkPermitApplicationLocalPersonAndPositionDetail: any = [];
         plstentWorkPermitApplicationPositionAdvertisementDetail: any = [];
         positionName = '';
         lastEditedByFullName = '';
        
}

export class entWorkPermitApplicationPrimaryApplicantPreviousPassports {
  workPermitApplicationPrimaryApplicantPreviousPassportsId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         passportNumber = '';
         countryOfPassportId = 0;
         countryOfPassportValue = '';
         otherCountry = '';
         dateOfIssue = '';
         dateOfExpiry = '';
         placeOfIssue = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         countryOfPassportDescription = '';
        
}

export class entWorkPermitApplicationPrimaryApplicantPreviousVisitDetail {
  workPermitApplicationPrimaryApplicantPreviousVisitDetailId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         fromDate = '';
         toDate = '';
         typeOfPermitId = 0;
         typeOfPermitValue = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         typeOfPermitDescription = '';
        
}

export class entWorkPermitApplicationPrimaryApplicantQualification {
  workPermitApplicationPrimaryApplicantQualificationId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         qualificationId = 0;
         qualificationValue = '';
         otherQualification = '';
         areaOfSpecialization = '';
         yearOfComplition = '';
         commentBox = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         qualificationDescription = '';
         qualificationTypeId = 0;
         qualificationTypeValue = '';
         qualificationTypeDescription = '';
        
}

export class entWorkPermitApplicationPrimaryApplicantShareHoldingDetail {
  workPermitApplicationPrimaryApplicantShareHoldingDetailId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         nameOfBusiness = '';
         shareHoldingPercentage = '';
         monetaryValue = '';
         dateOfCommensementOfBusiness = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkPermitApplicationPrimaryApplicantSpouseResidentialDetail {
  workPermitApplicationPrimaryApplicantSpouseResidentialDetailId = 0;
         workPermitApplicationPrimaryApplicantDetailId = 0;
         primaryApplicantFromDate = '';
         primaryApplicantToDate = '';
         primaryApplicantAddressId = 0;
         spouseFromDate = '';
         spouseToDate = '';
         spouseAddressId = 0;
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
         pentPrimaryApplicantAddress = new entAddress();
         pentSpouseAddress = new entAddress();
        
}

export class entWorkPermitApplicationQuestions {
  workPermitApplicationQuestionsId = 0;
         workPermitApplicationId = 0;
         permitMasterQuestionsId = 0;
         questions = '';
         answer = '';
         isMandatory = '';
         comments = '';
         oldValue = '';
         msg = new entIEMessage();
         idoObjState = '';
         updateSeq = 0;
        
}

export class entWorkflowSearch {
  workflowName = '';
         statusValue = '';
         sourceRefValue = '';
         sourceRefNo = '';
         stepName = '';
         stepStatusValue = '';
         assignedTo = '';
         sourceName = '';
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         orderByColumnName = '';
         ascending = false;
         istrSortColumn = '';
         istrSortOrder = false;
        
}

export class entWorkflowSearchForApplication {
  workflowName = '';
         statusValue = '';
         sourceRefValue = '';
         sourceRefNo = '';
         stepName = '';
         stepStatusValue = '';
         assignedTo = '';
         sourceName = '';
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
         orderByColumnName = '';
         ascending = false;
         istrSortColumn = '';
         istrSortOrder = false;
        
}

export class entWorkflowSearchResult {
  searchResult: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entWorkflowSearchResultForApplication {
  searchResult: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entWorkflowSearchResultSet {
  workflowId = 0;
         workflowTemplateId = 0;
         workflowRefNo = '';
         workflowName = '';
         sourceName = '';
         sourceRefValue = '';
         sourceRefNo = '';
         sourcePrimaryKey = 0;
         workflowElementStepId = 0;
         stepName = '';
         stepStatusDescription = '';
         workflowTemplateElementId = 0;
         actualTatInMinutes = '';
         assignedTo = '';
         assignedDateTime = '';
         slaDay = 0;
         slaHour = 0;
         slaMin = 0;
         escalationLevel = 0;
         remainingTatInMinutes = '';
         totalTatInMinutes = '';
         completedTatInMinutes = '';
         tatCompletedPercentage = '';
         assignedToFullName = '';
         workflowStatusDescription = '';
         totalTatInWords = '';
         completedTatInWords = '';
         remainingTatInWords = '';
         expectedCompletionDateTime = '';
         colorForTAT = '';
        
}

export class entWorkflowSearchResultSetForApplication {
  workflowId = 0;
         workflowTemplateId = 0;
         workflowRefNo = '';
         workflowName = '';
         sourceName = '';
         sourceRefValue = '';
         sourceRefNo = '';
         sourcePrimaryKey = 0;
         workflowElementStepId = 0;
         stepName = '';
         stepStatusDescription = '';
         workflowTemplateElementId = 0;
         actualTatInMinutes = '';
         assignedTo = '';
         assignedDateTime = '';
         slaDay = 0;
         slaHour = 0;
         slaMin = 0;
         escalationLevel = 0;
         remainingTatInMinutes = '';
         totalTatInMinutes = '';
         completedTatInMinutes = '';
         tatCompletedPercentage = '';
         assignedToFullName = '';
         workflowStatusDescription = '';
         totalTatInWords = '';
         completedTatInWords = '';
         remainingTatInWords = '';
         expectedCompletionDateTime = '';
         colorForTAT = '';
         isQualifiedEmployer = '';
         isQualifiedEmployerColor = '';
        
}




