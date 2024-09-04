// FormInput.js
const sellerCompanyName = document.getElementById("firstname").value;
const sellerGSTNo = document.getElementById("Firstname").value;
const sellerAddress = document.getElementById("Address").value;
const sellerEmail = document.getElementById("email").value;
const sellerZipCode = document.getElementById("zip").value;
const sellerInvoiceNumber = document.getElementById("Invoice").value;
const sellerPhoneNumber = document.getElementById("city").value;
const sellerAdditionalInfo = document.getElementById("additionalInfo").value;

// Retrieve buyer details
const buyerCompanyName = document.getElementById("bfirstname").value;
const buyerGSTNo = document.getElementById("gfirstname").value;
const buyerAddress = document.getElementById("afirstname").value;
const buyerEmail = document.getElementById("bemail").value;
const buyerZipCode = document.getElementById("bzip").value;
const buyerInvoiceNumber = document.getElementById("bInvoice").value;
const buyerPhoneNumber = document.getElementById("bcity").value;

export {
  sellerCompanyName,
  sellerGSTNo,
  sellerAddress,
  sellerEmail,
  sellerZipCode,
  sellerInvoiceNumber,
  sellerPhoneNumber,
  sellerAdditionalInfo,
  buyerCompanyName,
  buyerGSTNo,
  buyerAddress,
  buyerEmail,
  buyerZipCode,
  buyerInvoiceNumber,
  buyerPhoneNumber,
};

