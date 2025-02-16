export class entBSPRequestMessage {
    narMsgType = '';
           narMerTxnTime = '';
           narMerBankCode = '';
           narOrderNo = '';
           narMerId = '';
           narTxnCurrency = '';
           narTxnAmount = '';
           narRemitterEmail = '';
           narRemitterMobile = '';
           narCardType = '';
           narCheckSum = '';
           narPaymentDesc = '';
           narVersion = '';
           narReturnUrl = '';
           narSecure = '';
           msg = new entIEMessage();
           modifiedBy = '';
           updateSeq = '';
           idoObjState = '';
          
  }
  
  export class entBSPResponceMessage {
    narMsgType = '';
           narNarTxnId = '';
           narNarTxnTime = '';
           narMerTxnTime = '';
           narOrderNo = '';
           narMerId = '';
           narTxnCurrency = '';
           narTxnAmount = '';
           narCheckSum = '';
           narRemitterName = '';
           narRemitterBankId = '';
           narDebitAuthCode = '';
           narDebitAuthNo = '';
           narCardType = '';
           narCardNo = '';
           narRemarks = '';
           narReturnUrl = '';
           narPaymentId = '';
           msg = new entIEMessage();
           modifiedBy = '';
           updateSeq = '';
           idoObjState = '';
          
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
  
  export class entConfigMetaDataList {
    configValueSerialId = 0;
           ilistentConfigMetaData: any = [];
           msg = new entIEMessage();
          
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
  
  export class entIEMessage {
    infoMessage = new entMsgDetail();
           errorMessage: any = [];
           hasError = false;
          
  }
  
  export class entImmigrationPaymentTransactionForPayment {
    paymentImmigrationTransactionId = 0;
           sourceRefValue = '';
           sourcePrimaryKey = 0;
           providerTypeValue = '';
           paymentTransactionNo = '';
           orderId = 0;
           requestId = 0;
           transactionRefNo = '';
           paymentId = '';
           transactionId = '';
           cardType = '';
           transactionInitiationTime = '';
           payerMobileNo = '';
           transactionAmount = '';
           transactionFees = '';
           providerReturnUrl = '';
           responseCode = '';
           responseCodeDescription = '';
           providerRequestData = '';
           providerResponseData = '';
           paymentResponseCodeValue = '';
           transactionStatusValue = '';
           transactionConsent = '';
           ientProviderMaster = new entProviderMaster();
           ilstentWalletProviderMaster: any = [];
           ilstentBankProviderMaster: any = [];
           ilstentCardProviderMaster: any = [];
           providerTypeDescription = '';
           transactionStatusDescription = '';
           totalPayableAmount = '';
           otp = '';
           token = '';
           clientNavigationUrl = '';
           paymentGatewayUrl = '';
           immiReturnUrl = '';
           ientBSPRequestMessage = new entBSPRequestMessage();
           ientBSPResponceMessage = new entBSPResponceMessage();
           sourceRefNo = '';
           receiptResponse = '';
           receiptURL = '';
           receiptRelativePath = '';
           transactionStartTime = '';
           modifiedBy = '';
           updateSeq = '';
           idoObjState = '';
          
  }
  
  export class entImmigrationPaymentTransactionForPaymentList {
    ilstentImmigrationPaymentTransactionForPayment: any = [];
           msg = new entIEMessage();
          
  }
  
  export class entImmigrationPaymentTransactionSearch {
    paymentTransactionNo = '';
           sourceRefNo = '';
           providerTypeValue = '';
           transactionStartTimeFrom = '';
           transactionStartTimeTo = '';
           totalCount = 0;
           pageSize = 0;
           pageNumber = 0;
           orderByColumnName = '';
           ascending = false;
           istrSortColumn = '';
           istrSortOrder = false;
          
  }
  
  export class entImmigrationPaymentTransactionSearchResult {
    searchResult: any = [];
           totalCount = 0;
           pageSize = 0;
           pageNumber = 0;
          
  }
  
  export class entImmigrationPaymentTransactionSearchResultSet {
    paymentImmigrationTransactionId = 0;
           source = '';
           sourceRefNo = '';
           sourcePrimaryKey = 0;
           provider = '';
           providerTypeValue = '';
           paymentTransactionNo = '';
           transactionStartTime = '';
           transactionInitiationTime = '';
           transactionAmount = '';
           transactionFees = '';
           totalAmount = '';
           providerRequestData = '';
           paymentResponseStatus = '';
           paymentResponseCodeValue = '';
           transactionStatus = '';
           paymentGatewayUrl = '';
           ientBSPRequestMessage = new entBSPRequestMessage();
          
  }
  
  export class entImmigrationProviderAccount {
    immigrationProviderAccountId = 0;
           providerMasterId = 0;
           providerTypeId = 0;
           providerTypeValue = '';
           merchantId = '';
           merchantSecretKey = '';
           mersecureKey = '';
           transactionId = '';
           apiKey = '';
           username = '';
           password = '';
           productId = '';
           mycashMobileNo = '';
           statusId = 0;
           statusValue = '';
           providerTypeDescription = '';
          
  }
  
  export class entIntStringData {
    data1 = 0;
           data2 = '';
           msg = new entIEMessage();
          
  }
  
  export class entLongData {
    data = 0;
           msg = new entIEMessage();
          
  }
  
  export class entLongStringData {
    data = 0;
           data1 = '';
           msg = new entIEMessage();
          
  }
  
  export class entMsgDetail {
    msgID = 0;
           msgType = 0;
           msgDescription = '';
          
  }
  
  export class entPaymentTransactionRequest {
    sourceRefValue = '';
           sourcePrimaryKey = 0;
           returnUrl = '';
           payAmount = '';
          
  }
  
  export class entProviderCardTypeTransactionCharges {
    providerCardTypeTransactionChargesId = 0;
           providerCardTypeId = 0;
           providerTransactionCharge = '';
           effectiveDate = '';
           flatOnlineTransactionCharge = '';
          
  }
  
  export class entProviderMaster {
    providerMasterId = 0;
           providerCode = '';
           providerCategoryId = 0;
           providerCategoryValue = '';
           providerTypeId = 0;
           providerTypeValue = '';
           providerName = '';
           providerDisplayName = '';
           beginDate = '';
           url = '';
           statusId = 0;
           statusValue = '';
           ientProviderMasterLogo = new entProviderMasterLogo();
           ientImmigrationProviderAccount = new entImmigrationProviderAccount();
           ientProviderMasterCardType = new entProviderMasterCardType();
           ilstentProviderMasterCardType: any = [];
           providerTypeDescription = '';
           providerCategoryDescription = '';
           statusDescription = '';
          
  }
  
  export class entProviderMasterCardType {
    providerCardTypeId = 0;
           providerMasterId = 0;
           cardTypeName = '';
           cardTypeCode = '';
           cardTypeLogo = '';
           referenceId = 0;
           ientProviderCardTypeTransactionCharges = new entProviderCardTypeTransactionCharges();
           ilstentProviderCardTypeTransactionCharges: any = [];
           cardTypeNameDescription = '';
           cardTypeDescription = '';
           providerFeesAmount = '';
           totalAmountToPay = '';
          
  }
  
  export class entProviderMasterLogo {
    providerMasterLogoId = 0;
           providerMasterId = 0;
           providerPaymentLogo = '';
           fileName = '';
          
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
  
  export class entconfigValueList {
    ilistConfigValue: any = [];
           msg = new entIEMessage();
          
  }
  
  
  
  
  