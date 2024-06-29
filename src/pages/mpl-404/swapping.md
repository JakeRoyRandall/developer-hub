---
title: Swapping
metaTitle: MPL-404 - Swapping
description: MPL-404 Swapping
---

## Release: Swapping to fungibles

```
await releaseV1(umi, {
    owner: umi.identity,
    escrow,
    asset: assets[0].publicKey,
    collection: collecotion.publicKey,
    feeProjectAccount: escrowData.feeLocation,
    token: tokenMint.publicKey,
  }).sendAndConfirm(umi);
```

## Capture: Swapping to non-fungibles

```
await captureV1(umi, {
    owner: umi.identity,
    escrow,
    asset: assets[0].publicKey,
    collection: collection.publicKey,
    feeProjectAccount: escrowData.feeLocation,
    token: tokenMint.publicKey,
  }).sendAndConfirm(umi);
```

## Capture Helper: Fetch Assets by Owner (for picking an NFT to swap to)

```
import { publicKey } from '@metaplex-foundation/umi'
import { fetchAssetsByCollection } from '@metaplex-foundation/mpl-core'

const collection = publicKey('11111111111111111111111111111111')

const assetsByCollection = await fetchAssetsByCollection(umi, collection, {
  skipDerivePlugins: false,
})

console.log(assetsByCollection)
```