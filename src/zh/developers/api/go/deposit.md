# deposit

```go
import "github.com/rocket-pool/kelepool-go/deposit"
```

## Index

- [func AssignDeposits(rp *kelepool.RocketPool, opts *bind.TransactOpts) (common.Hash, error)](<#func-assigndeposits>)
- [func Deposit(rp *kelepool.RocketPool, opts *bind.TransactOpts) (common.Hash, error)](<#func-deposit>)
- [func EstimateAssignDepositsGas(rp *kelepool.RocketPool, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateassigndepositsgas>)
- [func EstimateDepositGas(rp *kelepool.RocketPool, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimatedepositgas>)
- [func GetBalance(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)](<#func-getbalance>)
- [func GetExcessBalance(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)](<#func-getexcessbalance>)


## func [AssignDeposits](<https://github.com/rocket-pool/kelepool-go/blob/release/deposit/deposit.go#L77>)

```go
func AssignDeposits(rp *kelepool.RocketPool, opts *bind.TransactOpts) (common.Hash, error)
```

Assign deposits

## func [Deposit](<https://github.com/rocket-pool/kelepool-go/blob/release/deposit/deposit.go#L53>)

```go
func Deposit(rp *kelepool.RocketPool, opts *bind.TransactOpts) (common.Hash, error)
```

Make a deposit

## func [EstimateAssignDepositsGas](<https://github.com/rocket-pool/kelepool-go/blob/release/deposit/deposit.go#L67>)

```go
func EstimateAssignDepositsGas(rp *kelepool.RocketPool, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

Estimate the gas of AssignDeposits

## func [EstimateDepositGas](<https://github.com/rocket-pool/kelepool-go/blob/release/deposit/deposit.go#L43>)

```go
func EstimateDepositGas(rp *kelepool.RocketPool, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

Estimate the gas of Deposit

## func [GetBalance](<https://github.com/rocket-pool/kelepool-go/blob/release/deposit/deposit.go#L15>)

```go
func GetBalance(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)
```

Get the deposit pool balance

## func [GetExcessBalance](<https://github.com/rocket-pool/kelepool-go/blob/release/deposit/deposit.go#L29>)

```go
func GetExcessBalance(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)
```

Get the excess deposit pool balance

