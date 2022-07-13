<template><div><h1 id="smart-contracts" tabindex="-1"><a class="header-anchor" href="#smart-contracts" aria-hidden="true">#</a> Smart Contracts</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>The Kele Pool <a href="https://www.ethereum.org/learn/#smart-contracts" target="_blank" rel="noopener noreferrer">Smart Contracts<ExternalLinkIcon/></a> form the foundation of the Kele Pool protocol. They are the base layer of infrastructure which all other elements of the network are built on top of, including the JavaScript library, the Smart Node software stack, and all web or application interfaces.</p>
<p>Direct interaction with the contracts is usually not necessary, and is facilitated through the use of other software (such as the JavaScript library). This section provides a detailed description of the contract design, and information on how to build on top of Kele Pool for developers wishing to extend it. All code examples are given as Solidity <code v-pre>v0.7.6</code>.</p>
<h3 id="contract-design" tabindex="-1"><a class="header-anchor" href="#contract-design" aria-hidden="true">#</a> Contract Design</h3>
<p>The Kele Pool network contracts are built with upgradability in mind, using a hub-and-spoke architecture. The central hub of the network is the <code v-pre>RocketStorage</code> contract, which is responsible for storing the state of the entire protocol. This is implemented through the use of maps for key-value storage, and getter and setter methods for reading and writing values for a key.</p>
<p>The <code v-pre>RocketStorage</code> contract also stores the addresses of all other network contracts (keyed by name), and restricts data modification to those contracts only. Using this architecture, the protocol can be upgraded by deploying new versions of an existing contract, and updating its address in storage. This gives Kele Pool the flexibility required to fix bugs or implement new features to improve the protocol.</p>
<h3 id="interacting-with-kele-pool" tabindex="-1"><a class="header-anchor" href="#interacting-with-kele-pool" aria-hidden="true">#</a> Interacting With Kele Pool</h3>
<p>To begin interacting with the Kele Pool network, first create an instance of the <code v-pre>RocketStorage</code> contract using its <a href="https://github.com/rocket-pool/kelepool/blob/master/contracts/interface/RocketStorageInterface.sol" target="_blank" rel="noopener noreferrer">interface<ExternalLinkIcon/></a>:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">import</span> <span class="token string">"RocketStorageInterface.sol"</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>

    RocketStorageInterface rocketStorage <span class="token operator">=</span> <span class="token function">RocketStorageInterface</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _rocketStorageAddress<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        rocketStorage <span class="token operator">=</span> <span class="token function">RocketStorageInterface</span><span class="token punctuation">(</span>_rocketStorageAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above constructor should be called with the address of the <code v-pre>RocketStorage</code> contract on the appropriate network.</p>
<p>Because of Kele Pool's architecture, the addresses of other contracts should not be used directly but retrieved from the blockchain before use. Network upgrades may have occurred since the previous interaction, resulting in outdated addresses. <code v-pre>RocketStorage</code> can never change address, so it is safe to store a reference to it.</p>
<p>Other contract instances can be created using the appropriate interface taken from the <a href="https://github.com/rocket-pool/kelepool/tree/master/contracts/interface" target="_blank" rel="noopener noreferrer">Kele Pool repository<ExternalLinkIcon/></a>, e.g.:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">import</span> <span class="token string">"RocketStorageInterface.sol"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"RocketDepositPoolInterface.sol"</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>

    RocketStorageInterface rocketStorage <span class="token operator">=</span> <span class="token function">RocketStorageInterface</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _rocketStorageAddress<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token comment">// It is safe to store reference to RocketStorage</span>
        rocketStorage <span class="token operator">=</span> <span class="token function">RocketStorageInterface</span><span class="token punctuation">(</span>_rocketStorageAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">exampleMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token comment">// All other contracts should be queried each time they are used</span>
        <span class="token builtin">address</span> rocketDepositPoolAddress <span class="token operator">=</span> rocketStorage<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span><span class="token string">"contract.address"</span><span class="token punctuation">,</span> <span class="token string">"rocketDepositPool"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        RocketDepositPoolInterface rocketDepositPool <span class="token operator">=</span> <span class="token function">RocketDepositPoolInterface</span><span class="token punctuation">(</span>rocketDepositPoolAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The Kele Pool contracts, as defined in <code v-pre>RocketStorage</code>, are:</p>
<ul>
<li><code v-pre>rocketVault</code> - Stores ETH held by network contracts (internal, not upgradeable)</li>
<li><code v-pre>rocketAuctionManager</code> - Handles the auctioning of RPL slashed from node operators' stake</li>
<li><code v-pre>rocketDepositPool</code> - Accepts user-deposited ETH and handles assignment to minipools</li>
<li><code v-pre>rocketMinipoolManager</code> - Creates &amp; manages all minipools in the network</li>
<li><code v-pre>rocketMinipoolQueue</code> - Organises minipools into a queue for ETH assignment</li>
<li><code v-pre>rocketMinipoolStatus</code> - Handles minipool status updates from watchtower nodes</li>
<li><code v-pre>rocketMinipoolPenalty</code> - Stores penalties applied to node operators by the oDAO</li>
<li><code v-pre>rocketNetworkBalances</code> - Handles network balance updates from watchtower nodes</li>
<li><code v-pre>rocketNetworkFees</code> - Calculates node commission rates based on network node demand</li>
<li><code v-pre>rocketNetworkPrices</code> - Handles RPL price and effective stake updates from watchtower nodes</li>
<li><code v-pre>rocketNetworkWithdrawal</code> - Handles processing of beacon chain validator withdrawals</li>
<li><code v-pre>rocketRewardsPool</code> - Handles the distribution of rewards to each rewards contract</li>
<li><code v-pre>rocketClaimDAO</code> - Handles the claiming of rewards for the pDAO</li>
<li><code v-pre>rocketClaimNode</code> - Handles the claiming of rewards for node operators</li>
<li><code v-pre>rocketClaimTrustedNode</code> - Handles the claiming of rewards for the oDAO</li>
<li><code v-pre>rocketNodeDeposit</code> - Handles node deposits for minipool creation</li>
<li><code v-pre>rocketNodeManager</code> - Registers &amp; manages all nodes in the network</li>
<li><code v-pre>rocketNodeStaking</code> - Handles node staking and unstaking</li>
<li><code v-pre>rocketDAOProposal</code> - Contains common oDAO and pDAO functionality</li>
<li><code v-pre>rocketDAONodeTrusted</code> - Handles oDAO related proposals</li>
<li><code v-pre>rocketDAONodeTrustedProposals</code> - Contains oDAO proposal functionality (internal)</li>
<li><code v-pre>rocketDAONodeTrustedActions</code> - Contains oDAO action functionality (internal)</li>
<li><code v-pre>rocketDAONodeTrustedUpgrade</code> - Handles oDAO contract upgrade functionality (internal)</li>
<li><code v-pre>rocketDAONodeTrustedSettingsMembers</code> - Handles settings relating to trusted members</li>
<li><code v-pre>rocketDAONodeTrustedSettingsProposals</code> - Handles settings relating to proposals</li>
<li><code v-pre>rocketDAONodeTrustedSettingsMinipool</code> - Handles settings relating to minipools</li>
<li><code v-pre>rocketDAOProtocol</code> - Handles pDAO related proposals</li>
<li><code v-pre>rocketDAOProtocolProposals</code> - Handles pDAO proposal functionality (internal)</li>
<li><code v-pre>rocketDAOProtocolActions</code> - Handles pDAO action functionality (internal)</li>
<li><code v-pre>rocketDAOProtocolSettingsInflation</code> - Handles settings related to inflation</li>
<li><code v-pre>rocketDAOProtocolSettingsRewards</code> - Handles settings related to rewards</li>
<li><code v-pre>rocketDAOProtocolSettingsAuction</code> - Handles settings related to auction system</li>
<li><code v-pre>rocketDAOProtocolSettingsNode</code> - Handles settings related to node operators</li>
<li><code v-pre>rocketDAOProtocolSettingsNetwork</code> - Handles settings related to the network</li>
<li><code v-pre>rocketDAOProtocolSettingsDeposit</code> - Handles settings related to deposits</li>
<li><code v-pre>rocketDAOProtocolSettingsMinipool</code> - Handles settings related to minipools</li>
<li><code v-pre>rocketTokenRETH</code> - The rETH token contract (not upgradeable)</li>
<li><code v-pre>rocketTokenRPL</code> - The RPL token contract (not upgradeable)</li>
<li><code v-pre>addressQueueStorage</code> - A utility contract (internal)</li>
<li><code v-pre>addressSetStorage</code> - A utility contract (internal)</li>
</ul>
<p>Contracts marked as “internal” do not provide methods which are accessible to the general public, and so are generally not useful for extension. For information on specific contract methods, consult their interfaces in the <a href="https://github.com/rocket-pool/kelepool/tree/master/contracts/interface" target="_blank" rel="noopener noreferrer">Kele Pool repository<ExternalLinkIcon/></a>.</p>
<h2 id="deposits" tabindex="-1"><a class="header-anchor" href="#deposits" aria-hidden="true">#</a> Deposits</h2>
<p>The main reason for extending the Kele Pool network is to implement custom deposit logic which funnels user deposits into the deposit pool. For example, a fund manager may wish to stake their users’ ETH in Kele Pool via their own smart contracts, and abstract the use of Kele Pool itself away from their users.</p>
<p>Note: the <code v-pre>RocketDepositPool</code> contract address should not be hard-coded in your contracts, but retrieved from <code v-pre>RocketStorage</code> dynamically. See <a href="#interacting-with-rocket-pool">Interacting With Kele Pool</a> for more details.</p>
<h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3>
<p>The following describes a basic example contract which forwards deposited ETH into Kele Pool and minted rETH back to the caller:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">import</span> <span class="token string">"RocketStorageInterface.sol"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"RocketDepositPoolInterface.sol"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"RocketETHTokenInterface.sol"</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>

    RocketStorageInterface rocketStorage <span class="token operator">=</span> <span class="token function">RocketStorageInterface</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> balances<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _rocketStorageAddress<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        rocketStorage <span class="token operator">=</span> <span class="token function">RocketStorageInterface</span><span class="token punctuation">(</span>_rocketStorageAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token comment">// Check deposit amount</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"Invalid deposit amount"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Load contracts</span>
        <span class="token builtin">address</span> rocketDepositPoolAddress <span class="token operator">=</span> rocketStorage<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span><span class="token string">"contract.address"</span><span class="token punctuation">,</span> <span class="token string">"rocketDepositPool"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        RocketDepositPoolInterface rocketDepositPool <span class="token operator">=</span> <span class="token function">RocketDepositPoolInterface</span><span class="token punctuation">(</span>rocketDepositPoolAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">address</span> rocketETHTokenAddress <span class="token operator">=</span> rocketStorage<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span><span class="token string">"contract.address"</span><span class="token punctuation">,</span> <span class="token string">"rocketETHToken"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        RocketETHTokenInterface rocketETHToken <span class="token operator">=</span> <span class="token function">RocketETHTokenInterface</span><span class="token punctuation">(</span>rocketETHTokenAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Forward deposit to RP &amp; get amount of rETH minted</span>
        <span class="token builtin">uint256</span> rethBalance1 <span class="token operator">=</span> rocketETHToken<span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rocketDepositPool<span class="token punctuation">.</span>deposit<span class="token punctuation">{</span>value<span class="token punctuation">:</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> rethBalance2 <span class="token operator">=</span> rocketETHToken<span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>rethBalance2 <span class="token operator">></span> rethBalance1<span class="token punctuation">,</span> <span class="token string">"No rETH was minted"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> rethMinted <span class="token operator">=</span> rethBalance2 <span class="token operator">-</span> rethBalance1<span class="token punctuation">;</span>
        <span class="token comment">// Update user's balance</span>
        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">+=</span> rethMinted<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// After 24 hours it's possible to transfer the tokens</span>
    <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token comment">// Load contracts</span>
        <span class="token builtin">address</span> rocketETHTokenAddress <span class="token operator">=</span> rocketStorage<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span><span class="token string">"contract.address"</span><span class="token punctuation">,</span> <span class="token string">"rocketETHToken"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        RocketETHTokenInterface rocketETHToken <span class="token operator">=</span> <span class="token function">RocketETHTokenInterface</span><span class="token punctuation">(</span>rocketETHTokenAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Transfer rETH to caller</span>
        <span class="token builtin">uint256</span> balance <span class="token operator">=</span> balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">;</span>
        balances<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>rocketETHToken<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> balance<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"rETH was not transferred to caller"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
