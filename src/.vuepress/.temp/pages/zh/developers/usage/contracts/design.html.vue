<template><div><h1 id="contract-design-upgradability" tabindex="-1"><a class="header-anchor" href="#contract-design-upgradability" aria-hidden="true">#</a> Contract Design &amp; Upgradability</h1>
<br>
<h2 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture" aria-hidden="true">#</a> Architecture</h2>
<p>The Kele Pool network contracts are built with upgradability in mind, using a hub-and-spoke architecture.
The central hub of the network is the <code v-pre>RocketStorage</code> contract, which is responsible for storing the state of the entire network.
This is implemented through the use of maps for key-value storage, and getter and setter methods for reading and writing values for a key.</p>
<p>The <code v-pre>RocketStorage</code> contract also stores the addresses of all other network contracts (keyed by name), and restricts data modification to those contracts only.
Using this architecture, the network can be upgraded by deploying new versions of an existing contract, and updating its address in storage.
This gives Kele Pool the flexibility required to fix bugs or implement new features to improve the network.</p>
<br>
<h2 id="interacting-with-kele-pool" tabindex="-1"><a class="header-anchor" href="#interacting-with-kele-pool" aria-hidden="true">#</a> Interacting With Kele Pool</h2>
<p>To begin interacting with the Kele Pool network, first create an instance of the <code v-pre>RocketStorage</code> contract using <a href="https://github.com/rocket-pool/kelepool/blob/master/contracts/interface/RocketStorageInterface.sol" target="_blank" rel="noopener noreferrer">its interface<ExternalLinkIcon/></a>:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">import</span> <span class="token string">"RocketStorageInterface.sol"</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>

    RocketStorageInterface rocketStorage <span class="token operator">=</span> <span class="token function">RocketStorageInterface</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _rocketStorageAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rocketStorage <span class="token operator">=</span> <span class="token function">RocketStorageInterface</span><span class="token punctuation">(</span>_rocketStorageAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above constructor should be called with the address of the <code v-pre>RocketStorage</code> contract on the appropriate network.</p>
<p>Because of Kele Pool's architecture, the addresses of other contracts should not be used directly, but retrieved from the blockchain before use.
Network upgrades may have occurred since the previous interaction, resulting in outdated addresses.</p>
<p>Other contract instances can be created using the appropriate interface taken from the <a href="https://github.com/rocket-pool/kelepool/tree/master/contracts/interface" target="_blank" rel="noopener noreferrer">Kele Pool repository<ExternalLinkIcon/></a>, e.g.:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token keyword">import</span> <span class="token string">"RocketStorageInterface.sol"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"RocketDepositPoolInterface.sol"</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>

    RocketStorageInterface rocketStorage <span class="token operator">=</span> <span class="token function">RocketStorageInterface</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _rocketStorageAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rocketStorage <span class="token operator">=</span> <span class="token function">RocketStorageInterface</span><span class="token punctuation">(</span>_rocketStorageAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">exampleMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> rocketDepositPoolAddress <span class="token operator">=</span> rocketStorage<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span><span class="token string">"contract.address"</span><span class="token punctuation">,</span> <span class="token string">"rocketDepositPool"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        RocketDepositPoolInterface rocketDepositPool <span class="token operator">=</span> <span class="token function">RocketDepositPoolInterface</span><span class="token punctuation">(</span>rocketDepositPoolAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The Kele Pool contracts, as defined in <code v-pre>RocketStorage</code>, are:</p>
<ul>
<li>
<p><code v-pre>rocketRole</code> - Handles assignment of privileged admin roles (internal)</p>
</li>
<li>
<p><code v-pre>rocketVault</code> - Stores ETH held by network contracts (internal, not upgradeable)</p>
</li>
<li>
<p><code v-pre>rocketUpgrade</code> - Provides upgrade functionality for the network (internal)</p>
</li>
<li>
<p><code v-pre>rocketDepositPool</code> - Accepts user-deposited ETH and handles assignment to minipools</p>
</li>
<li>
<p><code v-pre>rocketMinipoolFactory</code> - Creates minipool contract instances (internal)</p>
</li>
<li>
<p><code v-pre>rocketMinipoolManager</code> - Creates &amp; manages all minipools in the network</p>
</li>
<li>
<p><code v-pre>rocketMinipoolQueue</code> - Organises minipools into a queue for ETH assignment</p>
</li>
<li>
<p><code v-pre>rocketMinipoolStatus</code> - Handles minipool status updates from watchtower nodes</p>
</li>
<li>
<p><code v-pre>rocketNetworkBalances</code> - Handles network balance updates from watchtower nodes</p>
</li>
<li>
<p><code v-pre>rocketNetworkFees</code> - Calculates node commission rates based on network node demand</p>
</li>
<li>
<p><code v-pre>rocketNetworkWithdrawal</code> - Handles processing of beacon chain validator withdrawals</p>
</li>
<li>
<p><code v-pre>rocketNodeDeposit</code> - Handles node deposits for minipool creation</p>
</li>
<li>
<p><code v-pre>rocketNodeManager</code> - Registers &amp; manages all nodes in the network</p>
</li>
<li>
<p><code v-pre>rocketDAOProtocolSettingsDeposit</code> - Provides network settings relating to deposits</p>
</li>
<li>
<p><code v-pre>rocketDAOProtocolSettingsMinipool</code> - Provides network settings relating to minipools</p>
</li>
<li>
<p><code v-pre>rocketDAOProtocolSettingsNetwork</code> - Provides miscellaneous network settings</p>
</li>
<li>
<p><code v-pre>rocketDAOProtocolSettingsNode</code> - Provides network settings relating to nodes</p>
</li>
<li>
<p><code v-pre>rocketTokenRETH</code> - The rETH token contract (not upgradeable)</p>
</li>
<li>
<p><code v-pre>addressQueueStorage</code> - A utility contract (internal)</p>
</li>
<li>
<p><code v-pre>addressSetStorage</code> - A utility contract (internal)</p>
</li>
</ul>
<p>Contracts marked as &quot;internal&quot; do not provide methods which are accessible to the general public, and so are generally not useful for extension.
For information on specific contract methods, consult their interfaces in the <a href="https://github.com/rocket-pool/kelepool/tree/master/contracts/interface" target="_blank" rel="noopener noreferrer">Kele Pool repository<ExternalLinkIcon/></a>.</p>
</div></template>
