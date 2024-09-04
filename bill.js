import {
  sellerCompanyName,
  // buyerGSTNo,
  sellerGSTNo,
  // sellerAddress,
  // sellerEmail,
  // sellerInvoiceNumber,
  // sellerPhoneNumber,
  // sellerZipCode,
  // sellerAdditionalInfo,
  // buyerCompanyName,
  // buyerAddress,
  // buyerEmail,
  // buyerZipCode,
  // buyerInvoiceNumber,
  // buyerPhoneNumber,
  // items,
  // generateOutput
} from "./input.js";

// Display Seller Details
console.log(sellerCompanyName); 
function Display() {
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
  itemsDiv.innerHTML = `<table>
                                           <tr>
                                               <th>QUANTITY</th>
                                               <th>ITEM DISCRIPTION</th>
                                               <th>BATCH</th>
                                               <th>EXP</th>
                                               <th>HSN</th>
                                               <th>M.R.P</th>
                                               <th>RATE</th>
                                               <th>AMOUNT</th>
                                               <th>GST</th>
                                           </tr>
                                           ${items
                                             .map(
                                               (item) => `<tr>
                                                                   <td>${item["Quantity"]}</td>
                                                                   <td>${item["ItemDescription"]}</td>
                                                                   <td>${item["Batch"]}</td>
                                                                   <td>${item["Exp"]}</td>
                                                                   <td>${item["HSN"]}</td>
                                                                   <td>${item["MRP"]}</td>
                                                                   <td>${item["Rate"]}</td>
                                                                   <td>${item["Amount"]}</td>
                                                                   <td>${item["GST"]}</td>
                                                                 </tr>`
                                             )
                                             .join("")}
                                       </table>`;
}
Display();