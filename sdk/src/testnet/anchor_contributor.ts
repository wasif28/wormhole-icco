export type AnchorContributor = {
  "version": "0.1.0",
  "name": "anchor_contributor",
  "instructions": [
    {
      "name": "createCustodian",
      "accounts": [
        {
          "name": "custodian",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initSale",
      "accounts": [
        {
          "name": "custodian",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreBridgeVaa",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "contribute",
      "accounts": [
        {
          "name": "custodian",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "custodianAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "attestContributions",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreBridge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "wormholeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wormholeFeeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wormholeDerivedEmitter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wormholeSequence",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wormholeMessageKey",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "sealSale",
      "accounts": [
        {
          "name": "custodian",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreBridgeVaa",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "abortSale",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreBridgeVaa",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimRefund",
      "accounts": [
        {
          "name": "custodian",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "buyerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "custodianAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "buyer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totals",
            "type": {
              "vec": {
                "defined": "BuyerTotal"
              }
            }
          },
          {
            "name": "initialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "custodian",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "sale",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "custodian",
            "type": "publicKey"
          },
          {
            "name": "id",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "associatedSaleTokenAddress",
            "type": "publicKey"
          },
          {
            "name": "tokenChain",
            "type": "u16"
          },
          {
            "name": "tokenDecimals",
            "type": "u8"
          },
          {
            "name": "times",
            "type": {
              "defined": "SaleTimes"
            }
          },
          {
            "name": "recipient",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "status",
            "type": {
              "defined": "SaleStatus"
            }
          },
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "totals",
            "type": {
              "vec": {
                "defined": "AssetTotal"
              }
            }
          },
          {
            "name": "nativeTokenDecimals",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "BuyerTotal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "contributions",
            "type": "u64"
          },
          {
            "name": "allocations",
            "type": "u64"
          },
          {
            "name": "excessContributions",
            "type": "u64"
          },
          {
            "name": "status",
            "type": {
              "defined": "ContributionStatus"
            }
          }
        ]
      }
    },
    {
      "name": "SaleTimes",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "start",
            "type": "u64"
          },
          {
            "name": "end",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "AssetTotal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenIndex",
            "type": "u8"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "contributions",
            "type": "u64"
          },
          {
            "name": "allocations",
            "type": "u64"
          },
          {
            "name": "excessContributions",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PostMessageData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nonce",
            "type": "u32"
          },
          {
            "name": "payload",
            "type": "bytes"
          },
          {
            "name": "consistencyLevel",
            "type": {
              "defined": "ConsistencyLevel"
            }
          }
        ]
      }
    },
    {
      "name": "BridgeData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "guardianSetIndex",
            "type": "u32"
          },
          {
            "name": "lastLamports",
            "type": "u64"
          },
          {
            "name": "config",
            "type": {
              "defined": "BridgeConfig"
            }
          }
        ]
      }
    },
    {
      "name": "BridgeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "guardianSetExpirationTime",
            "type": "u32"
          },
          {
            "name": "fee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ContributionStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Inactive"
          },
          {
            "name": "Active"
          },
          {
            "name": "AllocationIsClaimed"
          },
          {
            "name": "RefundIsClaimed"
          }
        ]
      }
    },
    {
      "name": "SaleStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Active"
          },
          {
            "name": "Sealed"
          },
          {
            "name": "Aborted"
          }
        ]
      }
    },
    {
      "name": "ConsistencyLevel",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Confirmed"
          },
          {
            "name": "Finalized"
          }
        ]
      }
    },
    {
      "name": "Instruction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Initialize"
          },
          {
            "name": "PostMessage"
          },
          {
            "name": "PostVAA"
          },
          {
            "name": "SetFees"
          },
          {
            "name": "TransferFees"
          },
          {
            "name": "UpgradeContract"
          },
          {
            "name": "UpgradeGuardianSet"
          },
          {
            "name": "VerifySignatures"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AmountTooLarge",
      "msg": "AmountTooLarge"
    },
    {
      "code": 6001,
      "name": "BuyerDeactivated",
      "msg": "BuyerDeactivated"
    },
    {
      "code": 6002,
      "name": "BuyerInactive",
      "msg": "BuyerInactive"
    },
    {
      "code": 6003,
      "name": "ContributionTooEarly",
      "msg": "ContributionTooEarly"
    },
    {
      "code": 6004,
      "name": "IncorrectSale",
      "msg": "IncorrectSale"
    },
    {
      "code": 6005,
      "name": "IncorrectVaaPayload",
      "msg": "IncorrectVaaPayload"
    },
    {
      "code": 6006,
      "name": "InvalidAcceptedTokenPayload",
      "msg": "InvalidAcceptedTokenPayload"
    },
    {
      "code": 6007,
      "name": "InvalidConductor",
      "msg": "InvalidConductor"
    },
    {
      "code": 6008,
      "name": "InvalidRemainingAccounts",
      "msg": "InvalidRemainingAccounts"
    },
    {
      "code": 6009,
      "name": "InvalidTokenDecimals",
      "msg": "InvalidTokenDecimals"
    },
    {
      "code": 6010,
      "name": "InvalidTokenIndex",
      "msg": "InvalidTokenIndex"
    },
    {
      "code": 6011,
      "name": "InvalidVaaAction",
      "msg": "InvalidVaaAction"
    },
    {
      "code": 6012,
      "name": "InvalidAcceptedTokens",
      "msg": "InvalidTokensAccepted"
    },
    {
      "code": 6013,
      "name": "NothingToClaim",
      "msg": "NothingToClaim"
    },
    {
      "code": 6014,
      "name": "SaleAlreadyInitialized",
      "msg": "SaleAlreadyInitialized"
    },
    {
      "code": 6015,
      "name": "SaleEnded",
      "msg": "SaleEnded"
    },
    {
      "code": 6016,
      "name": "SaleNotAborted",
      "msg": "SaleNotAborted"
    },
    {
      "code": 6017,
      "name": "SaleNotAttestable",
      "msg": "SaleNotAttestable"
    },
    {
      "code": 6018,
      "name": "SaleNotFinished",
      "msg": "SaleNotFinished"
    },
    {
      "code": 6019,
      "name": "SaleNotSealed",
      "msg": "SaleNotSealed"
    },
    {
      "code": 6020,
      "name": "TooManyAcceptedTokens",
      "msg": "TooManyAcceptedTokens"
    },
    {
      "code": 6021,
      "name": "WrongAuthority",
      "msg": "WrongAuthority"
    }
  ]
};

export const IDL: AnchorContributor = {
  "version": "0.1.0",
  "name": "anchor_contributor",
  "instructions": [
    {
      "name": "createCustodian",
      "accounts": [
        {
          "name": "custodian",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initSale",
      "accounts": [
        {
          "name": "custodian",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreBridgeVaa",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "contribute",
      "accounts": [
        {
          "name": "custodian",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "custodianAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "attestContributions",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreBridge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "wormholeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wormholeFeeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wormholeDerivedEmitter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wormholeSequence",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wormholeMessageKey",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "sealSale",
      "accounts": [
        {
          "name": "custodian",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreBridgeVaa",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "abortSale",
      "accounts": [
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreBridgeVaa",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimRefund",
      "accounts": [
        {
          "name": "custodian",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "buyerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "custodianAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "buyer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totals",
            "type": {
              "vec": {
                "defined": "BuyerTotal"
              }
            }
          },
          {
            "name": "initialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "custodian",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "sale",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "custodian",
            "type": "publicKey"
          },
          {
            "name": "id",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "associatedSaleTokenAddress",
            "type": "publicKey"
          },
          {
            "name": "tokenChain",
            "type": "u16"
          },
          {
            "name": "tokenDecimals",
            "type": "u8"
          },
          {
            "name": "times",
            "type": {
              "defined": "SaleTimes"
            }
          },
          {
            "name": "recipient",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "status",
            "type": {
              "defined": "SaleStatus"
            }
          },
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "totals",
            "type": {
              "vec": {
                "defined": "AssetTotal"
              }
            }
          },
          {
            "name": "nativeTokenDecimals",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "BuyerTotal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "contributions",
            "type": "u64"
          },
          {
            "name": "allocations",
            "type": "u64"
          },
          {
            "name": "excessContributions",
            "type": "u64"
          },
          {
            "name": "status",
            "type": {
              "defined": "ContributionStatus"
            }
          }
        ]
      }
    },
    {
      "name": "SaleTimes",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "start",
            "type": "u64"
          },
          {
            "name": "end",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "AssetTotal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenIndex",
            "type": "u8"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "contributions",
            "type": "u64"
          },
          {
            "name": "allocations",
            "type": "u64"
          },
          {
            "name": "excessContributions",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PostMessageData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nonce",
            "type": "u32"
          },
          {
            "name": "payload",
            "type": "bytes"
          },
          {
            "name": "consistencyLevel",
            "type": {
              "defined": "ConsistencyLevel"
            }
          }
        ]
      }
    },
    {
      "name": "BridgeData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "guardianSetIndex",
            "type": "u32"
          },
          {
            "name": "lastLamports",
            "type": "u64"
          },
          {
            "name": "config",
            "type": {
              "defined": "BridgeConfig"
            }
          }
        ]
      }
    },
    {
      "name": "BridgeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "guardianSetExpirationTime",
            "type": "u32"
          },
          {
            "name": "fee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ContributionStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Inactive"
          },
          {
            "name": "Active"
          },
          {
            "name": "AllocationIsClaimed"
          },
          {
            "name": "RefundIsClaimed"
          }
        ]
      }
    },
    {
      "name": "SaleStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Active"
          },
          {
            "name": "Sealed"
          },
          {
            "name": "Aborted"
          }
        ]
      }
    },
    {
      "name": "ConsistencyLevel",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Confirmed"
          },
          {
            "name": "Finalized"
          }
        ]
      }
    },
    {
      "name": "Instruction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Initialize"
          },
          {
            "name": "PostMessage"
          },
          {
            "name": "PostVAA"
          },
          {
            "name": "SetFees"
          },
          {
            "name": "TransferFees"
          },
          {
            "name": "UpgradeContract"
          },
          {
            "name": "UpgradeGuardianSet"
          },
          {
            "name": "VerifySignatures"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AmountTooLarge",
      "msg": "AmountTooLarge"
    },
    {
      "code": 6001,
      "name": "BuyerDeactivated",
      "msg": "BuyerDeactivated"
    },
    {
      "code": 6002,
      "name": "BuyerInactive",
      "msg": "BuyerInactive"
    },
    {
      "code": 6003,
      "name": "ContributionTooEarly",
      "msg": "ContributionTooEarly"
    },
    {
      "code": 6004,
      "name": "IncorrectSale",
      "msg": "IncorrectSale"
    },
    {
      "code": 6005,
      "name": "IncorrectVaaPayload",
      "msg": "IncorrectVaaPayload"
    },
    {
      "code": 6006,
      "name": "InvalidAcceptedTokenPayload",
      "msg": "InvalidAcceptedTokenPayload"
    },
    {
      "code": 6007,
      "name": "InvalidConductor",
      "msg": "InvalidConductor"
    },
    {
      "code": 6008,
      "name": "InvalidRemainingAccounts",
      "msg": "InvalidRemainingAccounts"
    },
    {
      "code": 6009,
      "name": "InvalidTokenDecimals",
      "msg": "InvalidTokenDecimals"
    },
    {
      "code": 6010,
      "name": "InvalidTokenIndex",
      "msg": "InvalidTokenIndex"
    },
    {
      "code": 6011,
      "name": "InvalidVaaAction",
      "msg": "InvalidVaaAction"
    },
    {
      "code": 6012,
      "name": "InvalidAcceptedTokens",
      "msg": "InvalidTokensAccepted"
    },
    {
      "code": 6013,
      "name": "NothingToClaim",
      "msg": "NothingToClaim"
    },
    {
      "code": 6014,
      "name": "SaleAlreadyInitialized",
      "msg": "SaleAlreadyInitialized"
    },
    {
      "code": 6015,
      "name": "SaleEnded",
      "msg": "SaleEnded"
    },
    {
      "code": 6016,
      "name": "SaleNotAborted",
      "msg": "SaleNotAborted"
    },
    {
      "code": 6017,
      "name": "SaleNotAttestable",
      "msg": "SaleNotAttestable"
    },
    {
      "code": 6018,
      "name": "SaleNotFinished",
      "msg": "SaleNotFinished"
    },
    {
      "code": 6019,
      "name": "SaleNotSealed",
      "msg": "SaleNotSealed"
    },
    {
      "code": 6020,
      "name": "TooManyAcceptedTokens",
      "msg": "TooManyAcceptedTokens"
    },
    {
      "code": 6021,
      "name": "WrongAuthority",
      "msg": "WrongAuthority"
    }
  ]
};
