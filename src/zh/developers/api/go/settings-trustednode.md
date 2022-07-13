# trustednode

```go
import "github.com/rocket-pool/kelepool-go/settings/trustednode"
```

## Index

- [Constants](<#constants>)
- [func BootstrapChallengeCooldown(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapchallengecooldown>)
- [func BootstrapChallengeCost(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapchallengecost>)
- [func BootstrapChallengeWindow(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapchallengewindow>)
- [func BootstrapMinipoolUnbondedMax(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapminipoolunbondedmax>)
- [func BootstrapMinipoolUnbondedMinFee(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapminipoolunbondedminfee>)
- [func BootstrapProposalActionTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapproposalactiontime>)
- [func BootstrapProposalCooldownTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapproposalcooldowntime>)
- [func BootstrapProposalExecuteTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapproposalexecutetime>)
- [func BootstrapProposalVoteDelayTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapproposalvotedelaytime>)
- [func BootstrapProposalVoteTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapproposalvotetime>)
- [func BootstrapQuorum(rp *kelepool.RocketPool, value float64, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstrapquorum>)
- [func BootstrapRPLBond(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (common.Hash, error)](<#func-bootstraprplbond>)
- [func EstimateProposeChallengeCooldownGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposechallengecooldowngas>)
- [func EstimateProposeChallengeCostGas(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposechallengecostgas>)
- [func EstimateProposeChallengeWindowGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposechallengewindowgas>)
- [func EstimateProposeMinipoolUnbondedMaxGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposeminipoolunbondedmaxgas>)
- [func EstimateProposeMinipoolUnbondedMinFeeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposeminipoolunbondedminfeegas>)
- [func EstimateProposeProposalActionTimeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposeproposalactiontimegas>)
- [func EstimateProposeProposalCooldownTimeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposeproposalcooldowntimegas>)
- [func EstimateProposeProposalExecuteTimeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposeproposalexecutetimegas>)
- [func EstimateProposeProposalVoteDelayTimeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposeproposalvotedelaytimegas>)
- [func EstimateProposeProposalVoteTimeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposeproposalvotetimegas>)
- [func EstimateProposeQuorumGas(rp *kelepool.RocketPool, value float64, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposequorumgas>)
- [func EstimateProposeRPLBondGas(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (kelepool.GasInfo, error)](<#func-estimateproposerplbondgas>)
- [func GetChallengeCooldown(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)](<#func-getchallengecooldown>)
- [func GetChallengeCost(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)](<#func-getchallengecost>)
- [func GetChallengeWindow(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)](<#func-getchallengewindow>)
- [func GetMinipoolUnbondedMax(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)](<#func-getminipoolunbondedmax>)
- [func GetMinipoolUnbondedMinFee(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)](<#func-getminipoolunbondedminfee>)
- [func GetProposalActionTime(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)](<#func-getproposalactiontime>)
- [func GetProposalCooldownTime(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)](<#func-getproposalcooldowntime>)
- [func GetProposalExecuteTime(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)](<#func-getproposalexecutetime>)
- [func GetProposalVoteDelayTime(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)](<#func-getproposalvotedelaytime>)
- [func GetProposalVoteTime(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)](<#func-getproposalvotetime>)
- [func GetQuorum(rp *kelepool.RocketPool, opts *bind.CallOpts) (float64, error)](<#func-getquorum>)
- [func GetRPLBond(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)](<#func-getrplbond>)
- [func ProposeChallengeCooldown(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposechallengecooldown>)
- [func ProposeChallengeCost(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposechallengecost>)
- [func ProposeChallengeWindow(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposechallengewindow>)
- [func ProposeMinipoolUnbondedMax(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposeminipoolunbondedmax>)
- [func ProposeMinipoolUnbondedMinFee(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposeminipoolunbondedminfee>)
- [func ProposeProposalActionTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposeproposalactiontime>)
- [func ProposeProposalCooldownTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposeproposalcooldowntime>)
- [func ProposeProposalExecuteTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposeproposalexecutetime>)
- [func ProposeProposalVoteDelayTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposeproposalvotedelaytime>)
- [func ProposeProposalVoteTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposeproposalvotetime>)
- [func ProposeQuorum(rp *kelepool.RocketPool, value float64, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposequorum>)
- [func ProposeRPLBond(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (uint64, common.Hash, error)](<#func-proposerplbond>)


## Constants

Config

```go
const (
    MembersSettingsContractName       = "rocketDAONodeTrustedSettingsMembers"
    QuorumSettingPath                 = "members.quorum"
    RPLBondSettingPath                = "members.rplbond"
    MinipoolUnbondedMaxSettingPath    = "members.minipool.unbonded.max"
    MinipoolUnbondedMinFeeSettingPath = "members.minipool.unbonded.min.fee"
    ChallengeCooldownSettingPath      = "members.challenge.cooldown"
    ChallengeWindowSettingPath        = "members.challenge.window"
    ChallengeCostSettingPath          = "members.challenge.cost"
)
```

Config

```go
const (
    ProposalsSettingsContractName = "rocketDAONodeTrustedSettingsProposals"
    CooldownTimeSettingPath       = "proposal.cooldown.time"
    VoteTimeSettingPath           = "proposal.vote.time"
    VoteDelayTimeSettingPath      = "proposal.vote.delay.time"
    ExecuteTimeSettingPath        = "proposal.execute.time"
    ActionTimeSettingPath         = "proposal.action.time"
)
```

## func [BootstrapChallengeCooldown](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L134>)

```go
func BootstrapChallengeCooldown(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)
```

## func [BootstrapChallengeCost](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L180>)

```go
func BootstrapChallengeCost(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (common.Hash, error)
```

## func [BootstrapChallengeWindow](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L157>)

```go
func BootstrapChallengeWindow(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)
```

## func [BootstrapMinipoolUnbondedMax](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L87>)

```go
func BootstrapMinipoolUnbondedMax(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)
```

## func [BootstrapMinipoolUnbondedMinFee](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L111>)

```go
func BootstrapMinipoolUnbondedMinFee(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)
```

## func [BootstrapProposalActionTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L130>)

```go
func BootstrapProposalActionTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)
```

## func [BootstrapProposalCooldownTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L38>)

```go
func BootstrapProposalCooldownTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)
```

## func [BootstrapProposalExecuteTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L107>)

```go
func BootstrapProposalExecuteTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)
```

## func [BootstrapProposalVoteDelayTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L84>)

```go
func BootstrapProposalVoteDelayTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)
```

## func [BootstrapProposalVoteTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L61>)

```go
func BootstrapProposalVoteTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (common.Hash, error)
```

## func [BootstrapQuorum](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L41>)

```go
func BootstrapQuorum(rp *kelepool.RocketPool, value float64, opts *bind.TransactOpts) (common.Hash, error)
```

## func [BootstrapRPLBond](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L64>)

```go
func BootstrapRPLBond(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (common.Hash, error)
```

## func [EstimateProposeChallengeCooldownGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L140>)

```go
func EstimateProposeChallengeCooldownGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [EstimateProposeChallengeCostGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L186>)

```go
func EstimateProposeChallengeCostGas(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [EstimateProposeChallengeWindowGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L163>)

```go
func EstimateProposeChallengeWindowGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [EstimateProposeMinipoolUnbondedMaxGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L93>)

```go
func EstimateProposeMinipoolUnbondedMaxGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [EstimateProposeMinipoolUnbondedMinFeeGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L117>)

```go
func EstimateProposeMinipoolUnbondedMinFeeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [EstimateProposeProposalActionTimeGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L136>)

```go
func EstimateProposeProposalActionTimeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [EstimateProposeProposalCooldownTimeGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L44>)

```go
func EstimateProposeProposalCooldownTimeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [EstimateProposeProposalExecuteTimeGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L113>)

```go
func EstimateProposeProposalExecuteTimeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [EstimateProposeProposalVoteDelayTimeGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L90>)

```go
func EstimateProposeProposalVoteDelayTimeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [EstimateProposeProposalVoteTimeGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L67>)

```go
func EstimateProposeProposalVoteTimeGas(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [EstimateProposeQuorumGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L47>)

```go
func EstimateProposeQuorumGas(rp *kelepool.RocketPool, value float64, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [EstimateProposeRPLBondGas](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L70>)

```go
func EstimateProposeRPLBondGas(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (kelepool.GasInfo, error)
```

## func [GetChallengeCooldown](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L123>)

```go
func GetChallengeCooldown(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)
```

The period a member must wait for before submitting another challenge\, in blocks

## func [GetChallengeCost](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L169>)

```go
func GetChallengeCost(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)
```

The fee for a non\-member to challenge a member\, in wei

## func [GetChallengeWindow](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L146>)

```go
func GetChallengeWindow(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)
```

The period during which a member can respond to a challenge\, in blocks

## func [GetMinipoolUnbondedMax](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L76>)

```go
func GetMinipoolUnbondedMax(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)
```

The maximum number of unbonded minipools a member can run

## func [GetMinipoolUnbondedMinFee](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L100>)

```go
func GetMinipoolUnbondedMinFee(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)
```

The minimum commission rate before unbonded minipools are allowed

## func [GetProposalActionTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L119>)

```go
func GetProposalActionTime(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)
```

The period during which an action can be performed on an executed proposal in seconds

## func [GetProposalCooldownTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L27>)

```go
func GetProposalCooldownTime(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)
```

The cooldown period a member must wait after making a proposal before making another in seconds

## func [GetProposalExecuteTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L96>)

```go
func GetProposalExecuteTime(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)
```

The period during which a passed proposal can be executed in time

## func [GetProposalVoteDelayTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L73>)

```go
func GetProposalVoteDelayTime(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)
```

The delay after creation before a proposal can be voted on in seconds

## func [GetProposalVoteTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L50>)

```go
func GetProposalVoteTime(rp *kelepool.RocketPool, opts *bind.CallOpts) (uint64, error)
```

The period a proposal can be voted on for in seconds

## func [GetQuorum](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L30>)

```go
func GetQuorum(rp *kelepool.RocketPool, opts *bind.CallOpts) (float64, error)
```

Member proposal quorum threshold

## func [GetRPLBond](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L53>)

```go
func GetRPLBond(rp *kelepool.RocketPool, opts *bind.CallOpts) (*big.Int, error)
```

RPL bond required for a member

## func [ProposeChallengeCooldown](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L137>)

```go
func ProposeChallengeCooldown(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

## func [ProposeChallengeCost](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L183>)

```go
func ProposeChallengeCost(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

## func [ProposeChallengeWindow](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L160>)

```go
func ProposeChallengeWindow(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

## func [ProposeMinipoolUnbondedMax](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L90>)

```go
func ProposeMinipoolUnbondedMax(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

## func [ProposeMinipoolUnbondedMinFee](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L114>)

```go
func ProposeMinipoolUnbondedMinFee(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

## func [ProposeProposalActionTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L133>)

```go
func ProposeProposalActionTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

## func [ProposeProposalCooldownTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L41>)

```go
func ProposeProposalCooldownTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

## func [ProposeProposalExecuteTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L110>)

```go
func ProposeProposalExecuteTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

## func [ProposeProposalVoteDelayTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L87>)

```go
func ProposeProposalVoteDelayTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

## func [ProposeProposalVoteTime](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/proposals.go#L64>)

```go
func ProposeProposalVoteTime(rp *kelepool.RocketPool, value uint64, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

## func [ProposeQuorum](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L44>)

```go
func ProposeQuorum(rp *kelepool.RocketPool, value float64, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

## func [ProposeRPLBond](<https://github.com/rocket-pool/kelepool-go/blob/release/settings/trustednode/members.go#L67>)

```go
func ProposeRPLBond(rp *kelepool.RocketPool, value *big.Int, opts *bind.TransactOpts) (uint64, common.Hash, error)
```

