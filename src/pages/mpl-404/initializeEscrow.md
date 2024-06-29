---
title: Initializing Escrow
metaTitle: MPL-404 - Initializing Escrow
description: Initializing MPL-404 Escrow
---

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
