---
title: Initializing Escrow
metaTitle: MPL-404 - Initializing Escrow
description: Initializing MPL-404 Escrow
---

## MPL-404 Escrow Account Structure

Explain what data is stored and what role that data has for the user.

{% totem %}
{% totem-accordion title="On Chain MPL-404 Escrow Data Structure" %}

The onchain account structure of an MPL-404 Escrow [Link](https://github.com/metaplex-foundation/mpl-hybrid/blob/main/programs/mpl-hybrid/src/state/escrow.rs)

| Name           | Type    | Size | Description                                              |     |
| -------------- | ------- | ---- | -------------------------------------------------------- | --- |
| collection     | Pubkey  | 32   | The collection account                                   |     |
| authority      | Pubkey  | 32   | The Authority of the Escrow                              |     |
| token          | Pubkey  | 32   | The token to be dispensed                                |     |
| fee_location   | Pubkey  | 32   | The account to send token fees to                        |     |
| name           | String  | 4    | The NFT name                                             |     |
| uri            | String  | 8    | The base uri for the NFT metadata                        |     |
| max            | u64     | 8    | The max index of NFTs that append to the uri             |     |
| min            | u64     | 8    | The minimum index of NFTs that append to the uri         |     |
| amount         | u64     | 8    | The token cost to swap                                   |     |
| fee_amount     | u64     | 8    | The token fee for capturing the NFT                      |     |
| sol_fee_amount | u64     | 8    | The sol fee for capturing the NFT                        |     |
| count          | u64     | 8    | The total number of swaps                                |     |
| path           | u16     | 1    | The onchain/offchain metadata update path                |     |
| bump           | u8      | 1    | The escrow bump                                          |     |


{% /totem-accordion %}
{% /totem %}


## Initializing the MPL-404 Smart Escrow

```
const escrow = umi.eddsa.findPda(MPL_HYBRID_PROGRAM_ID, [
    string({ size: 'variable' }).serialize('escrow'),
    publicKeySerializer().serialize(collection.publicKey),
  ]);
```

```
  await initEscrowV1(umi, {
    escrow,
    collection: collection.publicKey,
    token: tokenMint.publicKey,
    feeLocation: feeLocation.publicKey,
    name: 'Test Escrow',
    uri: 'www.test.com',
    max: 2,
    min: 1,
    amount: 3,
    feeAmount: 4,
    path: Path.RerollMetadata,
    solFeeAmount: 5,
    feeAta: findAssociatedTokenPda(umi, {
      mint: tokenMint.publicKey,
      owner: publicKey(feeLocation.publicKey),
    }),
    associatedTokenProgram: SPL_ASSOCIATED_TOKEN_PROGRAM_ID,
  }).sendAndConfirm(umi);

```
