// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,  
  TOKEN_END_POINT: "https://testapiext.corecon.com/api/token",
  API_URI: "https://testapiext.corecon.com/api",
  ACCOUNT_ID: "58fc3bfd-fea0-ed5c-f00a-bbd2cf806d1a",
  CLIENT_ID: "cca534b3-93c9-3292-46fe-d03a46f8064c6",
  SECRET_Key: "2c5c8674-bc4c-87d2-496d-3107109fe78f",
  DATA: '{"Project":[{ "ProjectNumber": "GC-001", "PrimeContractNumber": ["001", "002", "003"] },{ "ProjectNumber": "GC-002", "PrimeContractNumber": ["001", "002", "003"] }],"Date": { "FromDate": "02-Mar-2022", "ToDate": "04-Mar-2022" },"Timezone": "India Standard Time"}',
  LaborTimeImportExcelData: '[{"UserName":"Amit Sharma","UserCompanyId":483,"UserCompanyName":"Company name-Test","Collection":{"Date":"24-03-2022","EmployeeName":"Amit Sharma","ProjectNumber":"GC-001","PrimeContractNumber":"001","ChangeOrderNumber":"","LaborCode":"","PayrollCode":"ST","CostCode":"01000","WCCode":"","Hours":"8","BillableStatus":"Billable","Comments":"approved"}}]',
  EquipmentTimeImportExcelData: '[{"UserName":"Amit Sharma","UserCompanyId":483,"UserCompanyName":"Company name-Test","Collection":{"Date":"24-03-2022","EquipmentCode":"01559-100-1150","ProjectNumber":"GC-001","PrimeContractNumber":"001","ChangeOrderNumber":"","CostCode":"01000","RTHours":"8","ITHours":"0","DTHours":"0","BillableStatus":"Billable"}}]',
  EmployeeMiscImportExcelData: '[{"UserName":"Amit Sharma","UserCompanyId":483,"UserCompanyName":"Company name-Test","Collection":{"ProjectNumber":"GC-001","PrimeContractNumber":"001","ChangeOrderNumber":"","ExpenseDate":"24-03-2022","ExpenseType":"Materials","PaymentType":"Credit Card","EmployeeName":"Amit Sharma","PayeeType":"Employee","PayeeCompany":"American Express","ItemDescription":"2x4x8 Doug Fir","ItemUnit":"EA","ItemQuantity":"10","ItemUnitPrice":"4.25","ItemResource":"M","ItemCostCode":"06100","ItemTaxCode":"","BillableStatus":"Billable"}}]',
  corecon: {
    API_URL: 'https://testapiext.corecon.com/api'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
