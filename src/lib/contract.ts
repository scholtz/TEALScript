/* eslint-disable no-undef */
/// <reference path="../../types/global.d.ts" />

export default class Contract {
  itxn!: Expand<
    AppOnChainTransactionParams &
    Partial<AppParams> &
    Partial<PaymentParams> &
    Partial<AssetCreateParams> &
    Partial<AssetTransferParams>
  >;

  txn!: Expand<ThisTxnParams>;

  txnGroup!: Txn[];

  app!: Application;
}
