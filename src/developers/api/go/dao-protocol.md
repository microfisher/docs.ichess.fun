# protocol

```go
import "github.com/rocket-pool/kelepool-go/dao/protocol"
```

## Index

- [func BootstrapAddress(rp *kelepool.RocketPool, contractName, settingPath string, value common.Address, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapaddress>)
- [func BootstrapBool(rp *kelepool.RocketPool, contractName, settingPath string, value bool, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapbool>)
- [func BootstrapClaimer(rp *kelepool.RocketPool, contractName string, amount float64, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapclaimer>)
- [func BootstrapUint(rp *kelepool.RocketPool, contractName, settingPath string, value *big.Int, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapuint>)
- [func EstimateBootstrapAddressGas(rp *kelepool.RocketPool, contractName, settingPath string, value common.Address, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimatebootstrapaddressgas>)
- [func EstimateBootstrapBoolGas(rp *kelepool.RocketPool, contractName, settingPath string, value bool, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimatebootstrapboolgas>)
- [func EstimateBootstrapClaimerGas(rp *kelepool.RocketPool, contractName string, amount float64, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimatebootstrapclaimergas>)
- [func EstimateBootstrapUintGas(rp *kelepool.RocketPool, contractName, settingPath string, value *big.Int, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimatebootstrapuintgas>)


## func [BootstrapAddress](<https://github.com/rocket-pool/kelepool-go/blob/release/dao/protocol/dao.go#L74>)

```go
func BootstrapAddress(rp *kelepool.RocketPool, contractName, settingPath string, value common.Address, opts *bind.TransactOpts) (common.Hash, error)
```

Bootstrap an address setting

## func [BootstrapBool](<https://github.com/rocket-pool/kelepool-go/blob/release/dao/protocol/dao.go#L26>)

```go
func BootstrapBool(rp *kelepool.RocketPool, contractName, settingPath string, value bool, opts *bind.TransactOpts) (common.Hash, error)
```

Bootstrap a bool setting

## func [BootstrapClaimer](<https://github.com/rocket-pool/kelepool-go/blob/release/dao/protocol/dao.go#L98>)

```go
func BootstrapClaimer(rp *kelepool.RocketPool, contractName string, amount float64, opts *bind.TransactOpts) (common.Hash, error)
```

Bootstrap a rewards claimer

## func [BootstrapUint](<https://github.com/rocket-pool/kelepool-go/blob/release/dao/protocol/dao.go#L50>)

```go
func BootstrapUint(rp *kelepool.RocketPool, contractName, settingPath string, value *big.Int, opts *bind.TransactOpts) (common.Hash, error)
```

Bootstrap a uint256 setting

## func [EstimateBootstrapAddressGas](<https://github.com/rocket-pool/kelepool-go/blob/release/dao/protocol/dao.go#L64>)

```go
func EstimateBootstrapAddressGas(rp *kelepool.RocketPool, contractName, settingPath string, value common.Address, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

Estimate the gas of BootstrapAddress

## func [EstimateBootstrapBoolGas](<https://github.com/rocket-pool/kelepool-go/blob/release/dao/protocol/dao.go#L16>)

```go
func EstimateBootstrapBoolGas(rp *kelepool.RocketPool, contractName, settingPath string, value bool, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

Estimate the gas of BootstrapBool

## func [EstimateBootstrapClaimerGas](<https://github.com/rocket-pool/kelepool-go/blob/release/dao/protocol/dao.go#L88>)

```go
func EstimateBootstrapClaimerGas(rp *kelepool.RocketPool, contractName string, amount float64, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

Estimate the gas of BootstrapClaimer

## func [EstimateBootstrapUintGas](<https://github.com/rocket-pool/kelepool-go/blob/release/dao/protocol/dao.go#L40>)

```go
func EstimateBootstrapUintGas(rp *kelepool.RocketPool, contractName, settingPath string, value *big.Int, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

Estimate the gas of BootstrapUint

