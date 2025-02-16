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
        
}

export class entDDLData {
  data: any = [];
         count1 = '';
         count2 = '';
         msg = new entIEMessage();
        
}

export class entIEMessage {
  infoMessage = new entMsgDetail();
         errorMessage: any = [];
         hasError = false;
        
}

export class entMsgDetail {
  msgID = 0;
         msgType = 0;
         msgDescription = '';
        
}

export class entStringData {
  data = '';
         msg = new entIEMessage();
        
}

export class entWorkflowStepSearch {
  workflowRefNo = '';
         stepStatusValue = '';
         assignedDateTimeFrom = '';
         assignedDateTimeTo = '';
         assignedTo = '';
         sourceRefValue = '';
         isortcolumn = '';
         isortorder = false;
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entWorkflowStepSearchResult {
  plstentWorkflowStepSearchResultSet: any = [];
         totalCount = 0;
         pageSize = 0;
         pageNumber = 0;
        
}

export class entWorkflowStepSearchResultSet {
  workflowId = 0;
         workflowElementStepId = '';
         workflowName = '';
         workflowRefNo = '';
         assignedDateTime = '';
         stepStatusDescription = '';
         sourceRefDescription = '';
         sourceRefNo = '';
         sourceRefValue = '';
         slaHour = 0;
         slaMin = 0;
         escalationLevel = 0;
         remainingTatInMinutes = '';
         totalTatInMinutes = '';
         completedTatInMinutes = '';
         tatCompletedPercentage = '';
        
}




