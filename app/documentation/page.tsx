"use client";

import React from "react";

export default function ContractDocsPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Smart Contract Documentation</h1>
      <p>
        This reference page provides context and explanations for each reusable
        contract function available in the IDE.
      </p>

      <h2>GPI Contract Functions</h2>
      <ul>
        <li>
          <strong>GPI::SomeFunction</strong>: Executes a generic operation in the
          GPI contract. (Replace with detailed context as needed.)
        </li>
        {/* Add more GPI functions as applicable */}
      </ul>

      <h2>QX Contract Functions</h2>
      <ul>
        <li>
          <strong>IssueAsset</strong>: Issues a new asset by transferring fees, checking
          the invocation reward, and finally calling <code>qpi.issueAsset</code>.
          <br />
          <em>Usage:</em> Construct the <code>IssueAsset_input</code>, call the procedure
          via <code>CALL_CONTRACT</code>, and verify <code>issuedNumberOfShares</code> in the output.
        </li>
        <li>
          <strong>Other Functions</strong>: You can add similar explanations for functions
          like <code>AssetAskOrders</code>, <code>TransferShareOwnershipAndPossession</code>, etc.
        </li>
      </ul>

      <h2>How to Use These in Your Contracts</h2>
      <p>
        When writing a new smart contract, simply use the reusable function buttons below
        the editor to paste the appropriate code snippet. You can then modify the snippet
        as needed for your contract’s logic.
      </p>
    </div>
  );
}