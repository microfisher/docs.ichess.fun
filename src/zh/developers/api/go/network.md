# network

```go
import "github.com/rocket-pool/kelepool-go/network"
```

## Index

- [func EstimateSubmitBalancesGas(rp *kelepool.RocketPool, block uint64, totalEth, stakingEth, rethSupply *big.Int, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimatesubmitbalancesgas>)
- [func EstimateSubmitPricesGas(rp *kelepool.RocketPool, block uint64, rplPrice *big.Int, effectiveRplStake *big.Int, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimatesubmitpricesgas>)
- [func GetBalancesBlock(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)](<#func-getbalancesblock>)
- [func GetETHUtilizationRate(rp *kelepool.RocketPool, opts *bind.CallOpts) (float64, error)](<#func-getethutilizationrate>)
- [func GetLatestReportableBalancesBlock(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)](<#func-getlatestreportablebalancesblock>)
- [func GetLatestReportablePricesBlock(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)](<#func-getlatestreportablepricesblock>)
- [func GetNodeDemand(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)](<#func-getnodedemand>)
- [func GetNodeFee(rp *kelepool.RocketPool, opts *bind.CallOpts) (float64, error)](<#func-getnodefee>)
- [func GetNodeFeeByDemand(rp *kelepool.RocketPool, nodeDemand *big.Int, opts *bind.CallOpts) (float64, error)](<#func-getnodefeebydemand>)
- [func GetPricesBlock(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)](<#func-getpricesblock>)
- [func GetRPLPrice(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)](<#func-getrplprice>)
- [func GetStakingETHBalance(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)](<#func-getstakingethbalance>)
- [func GetTotalETHBalance(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)](<#func-gettotalethbalance>)
- [func GetTotalRETHSupply(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)](<#func-gettotalrethsupply>)
- [func InConsensus(rp *kelepool.RocketPool, opts *bind.CallOpts) (bool, error)](<#func-inconsensus>)
- [func SubmitBalances(rp *kelepool.RocketPool, block uint64, totalEth, stakingEth, rethSupply *big.Int, opts *bind.TransactOpts) (common.Hash, error)](<#func-submitbalances>)
- [func SubmitPrices(rp *kelepool.RocketPool, block uint64, rplPrice, effectiveRplStake *big.Int, opts *bind.TransactOpts) (common.Hash, error)](<#func-submitprices>)


## func [EstimateSubmitBalancesGas](<https://github.com/rocket-pool/kelepool-go/blob/release/network/balances.go#L86>)

```go
func EstimateSubmitBalancesGas(rp *kelepool.RocketPool, block uint64, totalEth, stakingEth, rethSupply *big.Int, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

Estimate the gas of SubmitBalances

## func [EstimateSubmitPricesGas](<https://github.com/rocket-pool/kelepool-go/blob/release/network/prices.go#L43>)

```go
func EstimateSubmitPricesGas(rp *kelepool.RocketPool, block uint64, rplPrice *big.Int, effectiveRplStake *big.Int, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

Estimate the gas of SubmitPrices

## func [GetBalancesBlock](<https://github.com/rocket-pool/kelepool-go/blob/release/network/balances.go#L16>)

```go
func GetBalancesBlock(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)
```

Get the block number which network balances are current for

## func [GetETHUtilizationRate](<https://github.com/rocket-pool/kelepool-go/blob/release/network/balances.go#L72>)

```go
func GetETHUtilizationRate(rp *kelepool.RocketPool, opts *bind.CallOpts) (float64, error)
```

Get the current network ETH utilization rate

## func [GetLatestReportableBalancesBlock](<https://github.com/rocket-pool/kelepool-go/blob/release/network/balances.go#L110>)

```go
func GetLatestReportableBalancesBlock(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)
```

Returns the latest block number that oracles should be reporting balances for

## func [GetLatestReportablePricesBlock](<https://github.com/rocket-pool/kelepool-go/blob/release/network/prices.go#L81>)

```go
func GetLatestReportablePricesBlock(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)
```

Returns the latest block number that oracles should be reporting prices for

## func [GetNodeDemand](<https://github.com/rocket-pool/kelepool-go/blob/release/network/fees.go#L16>)

```go
func GetNodeDemand(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)
```

Get the current network node demand in ETH

## func [GetNodeFee](<https://github.com/rocket-pool/kelepool-go/blob/release/network/fees.go#L30>)

```go
func GetNodeFee(rp *kelepool.RocketPool, opts *bind.CallOpts) (float64, error)
```

Get the current network node commission rate

## func [GetNodeFeeByDemand](<https://github.com/rocket-pool/kelepool-go/blob/release/network/fees.go#L44>)

```go
func GetNodeFeeByDemand(rp *kelepool.RocketPool, nodeDemand *big.Int, opts *bind.CallOpts) (float64, error)
```

Get the network node fee for a node demand value

## func [GetPricesBlock](<https://github.com/rocket-pool/kelepool-go/blob/release/network/prices.go#L15>)

```go
func GetPricesBlock(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)
```

Get the block number which network prices are current for

## func [GetRPLPrice](<https://github.com/rocket-pool/kelepool-go/blob/release/network/prices.go#L29>)

```go
func GetRPLPrice(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)
```

Get the current network RPL price in ETH

## func [GetStakingETHBalance](<https://github.com/rocket-pool/kelepool-go/blob/release/network/balances.go#L44>)

```go
func GetStakingETHBalance(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)
```

Get the current network staking ETH balance

## func [GetTotalETHBalance](<https://github.com/rocket-pool/kelepool-go/blob/release/network/balances.go#L30>)

```go
func GetTotalETHBalance(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)
```

Get the current network total ETH balance

## func [GetTotalRETHSupply](<https://github.com/rocket-pool/kelepool-go/blob/release/network/balances.go#L58>)

```go
func GetTotalRETHSupply(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)
```

Get the current network total rETH supply

## func [InConsensus](<https://github.com/rocket-pool/kelepool-go/blob/release/network/prices.go#L67>)

```go
func InConsensus(rp *kelepool.RocketPool, opts *bind.CallOpts) (bool, error)
```

Check if the network is currently in consensus about the RPL price\, or if it is still reaching consensus

## func [SubmitBalances](<https://github.com/rocket-pool/kelepool-go/blob/release/network/balances.go#L96>)

```go
func SubmitBalances(rp *kelepool.RocketPool, block uint64, totalEth, stakingEth, rethSupply *big.Int, opts *bind.TransactOpts) (common.Hash, error)
```

Submit network balances for an epoch

## func [SubmitPrices](<https://github.com/rocket-pool/kelepool-go/blob/release/network/prices.go#L53>)

```go
func SubmitPrices(rp *kelepool.RocketPool, block uint64, rplPrice, effectiveRplStake *big.Int, opts *bind.TransactOpts) (common.Hash, error)
```

Submit network prices and total effective RPL stake for an epoch

