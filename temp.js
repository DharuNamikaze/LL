// function doPost(e) {
//   try {
//     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Adjust the sheet name if necessary
//     var data = JSON.parse(e.postData.contents);

//     // Append the data to the sheet
//     sheet.appendRow([
//       data.fullName,
//       data.email,
//       data.phone,
//       data.yearOfStudy,
//       data.graduationYear,
//       data.collegeName,
//       data.department,
//       data.address,
//       data.fullstack,
//       data.joinWorkshop,
//       data.priceRange,
//       data.expectations,
//       data.setupHelp,
//       data.topics
//     ]);

//     return ContentService
//       .createTextOutput(JSON.stringify({ 'status': 'success' }))
//       .setMimeType(ContentService.MimeType.JSON);
//   } catch (error) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.message }))
//       .setMimeType(ContentService.MimeType.JSON);
//   }
// }

// function doGet(e) {
//   return ContentService
//     .createTextOutput("GET requests are not supported.")
//     .setMimeType(ContentService.MimeType.TEXT);
// }




function doPost(e) {
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Adjust the sheet name if necessary
      var data = JSON.parse(e.postData.contents);
  
      // Append the data to the sheet
      sheet.appendRow([
        data.fullName,
        data.email,
        data.phone,
        data.yearOfStudy,
        data.graduationYear,
        data.collegeName,
        data.department,
        data.address,
        data.fullstack,
        data.joinWorkshop,
        data.priceRange,
        data.expectations,
        data.setupHelp,
        data.topics
      ]);
  
      return ContentService
        .createTextOutput(JSON.stringify({ 'status': 'success' }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
      return ContentService
        .createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.message }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  function doGet(e) {
    return ContentService
      .createTextOutput("GET requests are not supported.")
      .setMimeType(ContentService.MimeType.TEXT);
  }
  
  function doOptions(e) {
    return ContentService.createTextOutput('')
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'POST')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }














  axios 

  function doPost(e) {
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
      var data = JSON.parse(e.postData.contents);
  
      var requiredFields = ["fullName", "email", "phone", "yearOfStudy", "graduationYear", 
                            "collegeName", "department", "address", "fullstack", 
                            "joinWorkshop", "priceRange", "setupHelp", "topics"];
  
      var rowData = requiredFields.map(field => data[field] || ""); // Fill missing fields with an empty string
      sheet.appendRow(rowData);
  
      var response = {
        status: 'success',
        message: 'Data saved successfully'
      };
  
      return ContentService
        .createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeader("Access-Control-Allow-Origin", "*")
        .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
        .setHeader("Access-Control-Allow-Headers", "Content-Type");
    } catch (error) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: error.message }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeader("Access-Control-Allow-Origin", "*")
        .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
        .setHeader("Access-Control-Allow-Headers", "Content-Type");
    }
  }
  
  function doOptions(e) {
    return ContentService.createTextOutput("")
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  