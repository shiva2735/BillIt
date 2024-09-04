function test(n) {
  if (n < 0)
      return false;
  
  // Arrays to hold words for single-digit, double-digit, and below-hundred numbers
  single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
  
  if (n === 0) return 'Zero';
  
  // Recursive function to translate the number into words
  function translate(n) {
      let word = "";
      if (n < 10) {
          word = single_digit[n] + ' ';
      } else if (n < 20) {
          word = double_digit[n - 10] + ' ';
      } else if (n < 100) {
          let rem = translate(n % 10);
          word = below_hundred[(n - n % 10) / 10 - 2] + ' ' + rem;
      } else if (n < 1000) {
          word = single_digit[Math.trunc(n / 100)] + ' Hundred ' + translate(n % 100);
      } else if (n < 1000000) {
          word = translate(parseInt(n / 1000)).trim() + ' Thousand ' + translate(n % 1000);
      } else if (n < 1000000000) {
          word = translate(parseInt(n / 1000000)).trim() + ' Million ' + translate(n % 1000000);
      } else {
          word = translate(parseInt(n / 1000000000)).trim() + ' Billion ' + translate(n % 1000000000);
      }
      return word;
  }
  
  // Get the result by translating the given number
  let result = translate(n);
  return result.trim() + '.';
}








let editMode = false;



const setActive = (el, active) => {
  if (!editMode) {
    const formField = el.parentNode.parentNode;
    if (active) {
      formField.classList.add("form-field--is-active");
    } else {
      formField.classList.remove("form-field--is-active");
      el.value === ""
        ? formField.classList.remove("form-field--is-filled")
        : formField.classList.add("form-field--is-filled");
    }
  }
};

[].forEach.call(
  document.querySelectorAll(".form-field__input, .form-field__textarea"),
  (el) => {
    el.onblur = () => {
      setActive(el, false);
    };
    el.onfocus = () => {
      setActive(el, true);
    };
  }
);

let previousRowsEditable = false;

function addItem() {
  const table = document.querySelector(".ttable");
  const newRow = document.createElement("div");
  newRow.classList.add("trow");

  const inputs = [
    "Quantity",
    "Item Description",
    "Batch",
    "Exp",
    "HSN",
    "M.R.P",
    "Rate",
    "Amount",
    "GST",
  ];

  inputs.forEach((input) => {
    const cell = document.createElement("div");
    cell.classList.add("tcell");
    const inputField = document.createElement("input");
    inputField.classList.add("form-field__input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", input);
    inputField.disabled = false; // New row is always editable
    cell.appendChild(inputField);
    newRow.appendChild(cell);
  });

  table.appendChild(newRow);

  showPopupMessage(
    previousRowsEditable ? "Edit mode enabled" : "Edit mode disabled"
  ); // Show popup message after adding a new row
}

function toggleEdit() {
  previousRowsEditable = !previousRowsEditable;

  const formInputs = document.querySelectorAll(".ttable .form-field__input");
  formInputs.forEach((input, index) => {
    if (index !== input.length - 1) {
      // Exclude the input fields of the newly added row
      input.disabled = !previousRowsEditable;
    }
  });

  showPopupMessage(
    previousRowsEditable ? "Edit mode enabled" : "Edit mode disabled"
  ); // Show popup message after toggling edit mode
}

function showPopupMessage(message) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.textContent = message;
  document.body.appendChild(popup);

  // Hide the popup after a certain duration (e.g., 2 seconds)
  setTimeout(() => {
    document.body.removeChild(popup);
  }, 2000); // Adjust the duration as needed
}

// FormInput.js

// function generateOutput() {
//   const items = extractItems();

//   // Display Seller Details
//   // Display Seller Details
//   const sellerDetailsDiv = document.getElementById("sellerDetails");
//   sellerDetailsDiv.innerHTML = `<p>Company Name: ${sellerCompanyName}</p>
//                         <p>GST.No: ${sellerGSTNo}</p>
//                         <p>Address: ${sellerAddress}</p>
//                         <p>Email: ${sellerEmail}</p>
//                         <p>Zip code: ${sellerZipCode}</p>
//                         <p>Invoice Number: ${sellerInvoiceNumber}</p>
//                         <p>Phone Number: ${sellerPhoneNumber}</p>
//                         <p>Additional info: ${sellerAdditionalInfo}</p>`;

//   // Display Buyer Details
//   const buyerDetailsDiv = document.getElementById("buyerDetails");
//   buyerDetailsDiv.innerHTML = `<p>Company Name: ${buyerCompanyName}</p>
//                         <p>GST.No: ${buyerGSTNo}</p>
//                         <p>Address: ${buyerAddress}</p>
//                         <p>Email: ${buyerEmail}</p>
//                         <p>Zip code: ${buyerZipCode}</p>
//                         <p>Invoice Number: ${buyerInvoiceNumber}</p>
//                         <p>Phone Number: ${buyerPhoneNumber}</p>`;

//   const itemsDiv = document.getElementById("items");
//   itemsDiv.innerHTML = `<table>
//                                      <tr>
//                                          <th>QUANTITY</th>
//                                          <th>ITEM DISCRIPTION</th>
//                                          <th>BATCH</th>
//                                          <th>EXP</th>
//                                          <th>HSN</th>
//                                          <th>M.R.P</th>
//                                          <th>RATE</th>
//                                          <th>AMOUNT</th>
//                                          <th>GST</th>
//                                      </tr>
//                                      ${items
//                                        .map(
//                                          (item) => `<tr>
//                                                              <td>${item["Quantity"]}</td>
//                                                              <td>${item["ItemDescription"]}</td>
//                                                              <td>${item["Batch"]}</td>
//                                                              <td>${item["Exp"]}</td>
//                                                              <td>${item["HSN"]}</td>
//                                                              <td>${item["MRP"]}</td>
//                                                              <td>${item["Rate"]}</td>
//                                                              <td>${item["Amount"]}</td>
//                                                              <td>${item["GST"]}</td>
//                                                            </tr>`
//                                        )
//                                        .join("")}
//                                  </table>`;
// }
function extractDetails(type) {
  const detailsContainer = document.querySelector(`#${type}Details`);
  const inputs = detailsContainer.querySelectorAll(".form-field__input");
  const details = {};
  inputs.forEach((input) => {
    const label = input.previousElementSibling.textContent;
    const value = input.value;
    details[label] = value;
  });
  return details;
}

function extractItems() {
  console.log("IN extract");
}

function Display() {
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

  const itemRows = document.querySelectorAll(".ttable .trow:not(.header)");
  const items = [];
  let tot = 0;
  itemRows.forEach((row) => {
    const cells = row.querySelectorAll(".tcell");
    const item = {
      Quantity: cells[0].querySelector(".form-field__input").value,
      ItemDescription: cells[1].querySelector(".form-field__input").value,
      Batch: cells[2].querySelector(".form-field__input").value,
      Exp: cells[3].querySelector(".form-field__input").value,
      HSN: cells[4].querySelector(".form-field__input").value,
      MRP: cells[5].querySelector(".form-field__input").value,
      Rate: cells[6].querySelector(".form-field__input").value,
      Amount: cells[7].querySelector(".form-field__input").value,
      GST: cells[8].querySelector(".form-field__input").value,
    };
    tot += Number(item["Amount"]);
    items.push(item);
  });
  console.log("total", tot);
  console.log("in display");
  console.log(sellerCompanyName);
  const sellerDetailsDiv = document.getElementById("sellerDetails");
  sellerDetailsDiv.innerHTML = `<p>Company Name: ${sellerCompanyName}</p>
                                                <p>GST.No: ${sellerGSTNo}</p>
                                                <p>Address: ${sellerAddress}</p>
                                                <p>Email: ${sellerEmail}</p>
                                                <p>Zip code: ${sellerZipCode}</p>
                                                <p>Invoice Number: ${sellerInvoiceNumber}</p>
                                                <p>Phone Number: ${sellerPhoneNumber}</p>
                                                <p>Additional info: ${sellerAdditionalInfo}</p>`;

  // Display Buyer Details
  const buyerDetailsDiv = document.getElementById("buyerDetails");
  buyerDetailsDiv.innerHTML = `<p>Company Name: ${buyerCompanyName}</p>
                                               <p>GST.No: ${buyerGSTNo}</p>
                                               <p>Address: ${buyerAddress}</p>
                                               <p>Email: ${buyerEmail}</p>
                                               <p>Zip code: ${buyerZipCode}</p>
                                               <p>Invoice Number: ${buyerInvoiceNumber}</p>
                                               <p>Phone Number: ${buyerPhoneNumber}</p>`;

  // Display Items
  const itemsDiv = document.getElementById("items");
  itemsDiv.innerHTML = `<hr><table style="border-collapse: collapse;">
                          <tr>
                            <th style="padding: 15px;">QUANTITY</th>
                            <th style="padding: 15px;">ITEM DISCRIPTION</th>
                            <th style="padding: 15px;">BATCH</th>
                            <th style="padding: 15px;">EXP</th>
                            <th style="padding: 15px;">HSN</th>
                            <th style="padding: 15px;">M.R.P</th>
                            <th style="padding: 15px;">RATE</th>
                            <th style="padding: 15px;">AMOUNT</th>
                            <th>GST</th>
                          </tr>
                          ${items
                            .map(
                              (item) => `<tr>
                                            <td style="padding: 15px;">${item["Quantity"]}</td>
                                            <td style="padding: 15px;">${item["ItemDescription"]}</td>
                                            <td style="padding: 15px;">${item["Batch"]}</td>
                                            <td style="padding: 15px;">${item["Exp"]}</td>
                                            <td style="padding: 15px;">${item["HSN"]}</td>
                                            <td style="padding: 15px;">${item["MRP"]}</td>
                                            <td style="padding: 15px;">${item["Rate"]}</td>
                                            <td style="padding: 15px;">${item["Amount"]}</td>
                                            <td>${item["GST"]}</td>
                                          </tr>`
                            )
                            .join("")}
                            </table>`;
  const pretot = tot;
  tot +=Number( 0.05 * Number(tot) * 2);
  let st=test(tot);
  const footid = document.getElementById("footer");
  footid.innerHTML = `<table>
    <thead>
      <tr>
        <th colspan="2">Items</th>
        <th>1</th>
        <th colspan="3">Subtotal</th>
      </tr>
      <tr>
        <th colspan="2">Scheme Discount</th>
        <td colspan="3"></td>
      </tr>
      <tr>
        <th colspan="2">Total</th>
        <td colspan="3">${pretot}</td>
      </tr>
      <tr>
        <th colspan="2">SGST</th>
        <td colspan="3">₹0.00</td>
      </tr>
      <tr>
        <th colspan="2">CGST</th>
        <td colspan="3">₹0.00</td>
      </tr>
      <tr>
        <th colspan="2">Total Amount</th>
        <td colspan="3">${pretot}</td>
      </tr>
      <tr>
        <th rowspan="4">GST</th>
        <th>5.00%</th>
        <td>₹0.00</td>
        <td colspan="2"></td>
      </tr>
      <tr>
        <th>12.00%</th>
        <td>₹0.00</td>
        <td colspan="2"></td>
      </tr>
      <tr>
        <th>18.00%</th>
        <td>${tot}</td>
        <td colspan="2"></td>
      </tr>
      <tr>
        <th>28.00%</th>
        <td>₹0.00</td>
        <td colspan="2"></td>
      </tr>
      <tr>
        <th colspan="2">SGST Payable</th>
        <td colspan="3">${0.05 * tot}</td>
      </tr>
      <tr>
        <th colspan="2">CGST Payable</th>
        <td colspan="3">${0.05 * tot}</td>
      </tr>
      <tr>
        <th colspan="2">CR/DR Note</th>
        <td colspan="3">₹0.00</td>
      </tr>
      <tr>
        <th colspan="2">Party Total</th>
        <td colspan="3">${tot}</td>
      </tr>
    </thead>
  </table>
  <p><h2>Amount</h2>Rs.${st}</p>
</div>
`;
}

function s() {
  const pdfDiv = document.querySelector("#invoice");
  Display();
  if (pdfDiv.style.display === "none") {
    console.log(pdfDiv.style.display);
    pdfDiv.style.display = "block";
  } else {
    pdfDiv.style.display = "none";
  }
}
function gen() {
  window.location.href = "bill.html";
}
