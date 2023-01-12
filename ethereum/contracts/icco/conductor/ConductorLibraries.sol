// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "../shared/ICCOStructs.sol";
import "./ConductorStructs.sol";
import "./ConductorState.sol";

library HelperLibrary {

    // validates all createSale parameters and requriements
    function validateCreateSale(ICCOStructs.Raise memory raise, ICCOStructs.Token[] memory acceptedTokens, address owner, ICCOStructs.WormholeFees memory feeAccounting) external view {

        require(block.timestamp < raise.saleStart, "4");
        require(raise.saleStart < raise.saleEnd, "5");
        require(raise.unlockTimestamp >= raise.saleEnd, "6");
        require(raise.unlockTimestamp - raise.saleEnd <= 63072000, "7");
        /// set timestamp cap for non-evm Contributor contracts
        require(raise.unlockTimestamp <= 2**63-1, "8");
        /// sanity check other raise parameters
        require(raise.tokenAmount > 0, "9");
        require(acceptedTokens.length > 0, "10");
        require(acceptedTokens.length < 255, "11");
        require(raise.minRaise > 0, "12");
        require(raise.maxRaise >= raise.minRaise, "13");
        require(raise.token != bytes32(0), "14");
        require(raise.recipient != address(0), "15");
        require(raise.refundRecipient != address(0), "16");
        /// confirm that sale authority is set properly
        require(raise.authority != address(0) && raise.authority != owner, "17");
        /// make sure the caller has sent enough eth to cover message fees
        require(feeAccounting.valueSent >= 2 * feeAccounting.messageFee, "18");
    }

    function validateAbortSaleBeforeTime(ConductorStructs.Sale memory sale) external view {
        /// confirm that caller is the sale initiator
        require(sale.initiator == msg.sender, "24");

        /// make sure that the sale is still valid and hasn't started yet
        require(!sale.isSealed && !sale.isAborted, "25");
        /// sale must be aborted 20 minutes before saleStart
        require(block.timestamp < sale.saleStart - 1200, "26");
    }

    function validateAbortBrickedSale(ConductorStructs.Sale memory sale, uint256 fee) external view {
        require(!sale.isSealed && !sale.isAborted, "44");
        require(block.timestamp > sale.saleEnd + 604800, "45");
        require(msg.value == fee, "46");
    }
}